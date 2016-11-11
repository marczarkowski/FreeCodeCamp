'use strict';

$(document).ready(function() {
    var currentOperation = undefined;
    var singleNumberOperation = false;
    var lastOperation = undefined;
    var x = undefined;
    var chainCalculation = undefined;
    var eraseBefore = false;
    var appendToMemory = true;
    var previousTarget = undefined;

    function accessRow(row, method, value, state) {
        if (value !== undefined && value % 1 !== 0 && !isNaN(value)) {
            value = String(value).replace(".", ",").substring(0, 6);
        }
        if (method === "clean") {
            $("." + row).text("");
        } else if (method === "text" && value != undefined) {
            return $("." + row).text(value);
        } else if (method === "text") {
            return $("." + row).text();
        } else if (row === "memoryrow" && method === "append" && value != undefined && state == true) {
            $("." + row).append(value);
            if (accessRow("memoryrow", "text").length > 30) {
                accessRow("memoryrow", "text", ("<<" + accessRow("memoryrow", "text").substring(accessRow("memoryrow", "text").length - 28)));
            }
        } else if (row === "activerow" && method === "append" && value != undefined) {
            return $("." + row).append(value);
        }
    }

    function getDoubleValue() {
        var value = undefined;
        var textValue = accessRow("activerow", "text");
        if (textValue.trim().length > 0) {
            value = Number(textValue.replace(",", "."));
        } else {
            value = 0;
            accessRow("activerow", "text", value);
            eraseBefore = true;
        }
        return value;
    }

    function calculate(x, currentOperation, equals) {
        var y = undefined;
        if ($(previousTarget).hasClass("equals")) {
            x = getDoubleValue();
            y = accessRow("memoryrow", "text");
            y = Number(y.substring(y.lastIndexOf(currentOperation), y.lastIndexOf("=")));
        } else {
            y = getDoubleValue();
        }
        var operations = {
            '+': function(x, y) {
                return x + y
            },
            '-': function(x, y) {
                return x - y
            },
            '÷': function(x, y) {
                return x / y
            },
            '×': function(x, y) {
                return x * y
            }
        }
        if ($(previousTarget).hasClass("equals")) {
            accessRow("memoryrow", "append", (x + currentOperation + y + "="), true)
        } else if (equals === true ) {
            accessRow("memoryrow", "append", (y + "="), true)
        }
        x = operations[currentOperation](x, y);
        accessRow("activerow", "text", x);
    }

    function pressedOperation(operation) {
        if (chainCalculation) {
            accessRow("memoryrow", "append", (accessRow("activerow", "text") + operation), appendToMemory);
            appendToMemory = !appendToMemory;
            calculate(x, currentOperation);
            chainCalculation = false;
            lastOperation = operation;
            pressedOperation(lastOperation);
        } else {
            x = getDoubleValue();
            currentOperation = operation;
            chainCalculation = true;
            accessRow("memoryrow", "append", (accessRow("activerow", "text") + operation), appendToMemory);
            appendToMemory = true;
        }
        eraseBefore = true;
    }
    $(".number").click(function() {
        if (eraseBefore) {
            accessRow("activerow", "text", $(this).text().trim());
            eraseBefore = false;
        } else {
            accessRow("activerow", "append", $(this).text().trim());
        }
        if (accessRow("activerow", "text").length > 8) {
            eraseBefore = true;
            return;
        }
        previousTarget = undefined;
    });
    $(".operation").click(function() {
        if ($(previousTarget).hasClass("operation")) {
            currentOperation = $(this).text().trim();
            accessRow("memoryrow", "text", (accessRow("memoryrow", "text").substring(0, accessRow("memoryrow", "text").length - 1) + currentOperation), true);
            return;
        }
        pressedOperation($(this).text().trim());
        previousTarget = $(this);
    });
    $(".equals").click(function() {
        x = calculate(x, currentOperation, true);
        chainCalculation = false;
        eraseBefore = true;
        previousTarget = $(this);
    });
    $(".clear").click(function() {
        currentOperation = undefined;
        singleNumberOperation = false;
        lastOperation = undefined;
        x = undefined;
        chainCalculation = undefined;
        eraseBefore = false;
        appendToMemory = true;
        previousTarget = undefined;
        accessRow("activerow", "clean");
        accessRow("memoryrow", "clean");
    });
    $(".clearentry").click(function() {
        accessRow("activerow", "clean");
    });
    $(".plusminus").click(function() {
        var value = accessRow("activerow", "text");
        if (value !== "") {
            if (value > 0) {
                accessRow("activerow", "text", -Math.abs(Number(value)));
            } else {
                accessRow("activerow", "text", Math.abs(Number(value)));
            }
        }
    });
    $(".inverse").click(function() {
        var value = getDoubleValue();
        if (value < 1) {
            accessRow("activerow", "text", (Math.round(1 / value)));
        } else if (value > 1) {
            accessRow("activerow", "text", (1 / value));
        }
    });
});