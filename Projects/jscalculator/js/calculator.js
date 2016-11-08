// napraw błąd z dodawaniem negatywnych wartości w czasie chaina

$(document).ready(function() {
    var currentOperation = undefined;
    var singleNumberOperation = false;
    var lastOperation = undefined;
    var x = undefined;
    var chainCalculation = undefined;
    var eraseBefore = false;
    var appendToMemory = true;
    var previousTarget = undefined;

    function accessActiveRow(method, value) {
        if (value !== undefined && value % 1 !== 0) {
            value = String(value).replace(".", ",").substring(0, 5);
        }
        if (method === "text" && value != undefined) {
            return $(".activerow").text(value);
        } else if (method === "text") {
            return $(".activerow").text();
        } else if (method === "append" && value != undefined) {
            return $(".activerow").append(value);
        } else if (method === "clean") {
            $(".activerow").text("");
        }
    }

    function accessMemoryRow(method, state, value) {
        if (value !== undefined && value % 1 !== 0) {
            value = String(value).replace(".", ",")
        }
        if (method === "append" && value != undefined && state == true) {
            return $(".memoryrow").append(value);
        } else if (method === "clean") {
            $(".memoryrow").text("");
        } else if (method === "text" && value != undefined) {
            return $(".memoryrow").text(value);
        } else if (method === "text") {
            return $(".memoryrow").text();
        }
    }

    function getDoubleValue() {
        var value = undefined;
        var textValue = accessActiveRow("text");
        if (textValue.trim().length > 0) {
            value = Number(textValue.replace(",", "."));
        } else {
            value = 0;
            accessActiveRow("text", value);
            eraseBefore = true;
        }
        return value;
    }

    function calculate(x, currentOperation, equals) {
        var y = getDoubleValue();
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
        if (equals === true) {
            accessMemoryRow("append", true, (`${y} =`))
        }
        x = operations[currentOperation](x, y);
        accessActiveRow("text", x);
    };

    function pressedOperation(operation) {
        if (chainCalculation) {
            accessMemoryRow("append", appendToMemory, (accessActiveRow("text") + currentOperation));
            appendToMemory = !appendToMemory;
            calculate(x, currentOperation);
            chainCalculation = false;
            lastOperation = currentOperation;
            pressedOperation(lastOperation);
        } else {
            x = getDoubleValue();
            currentOperation = operation;
            chainCalculation = true;
            accessMemoryRow("append", appendToMemory, (accessActiveRow("text") + currentOperation));
            appendToMemory = true;
            previousTarget = $(this);
        }
        eraseBefore = true;
    }
    $(".number").click(function() {
        if (eraseBefore) {
            accessActiveRow("text", $(this).text().trim());
            eraseBefore = false;
        } else {
            accessActiveRow("append", $(this).text().trim());
        }
        previousTarget = undefined;
    });
    $(".operation").click(function() {
        if ($(previousTarget).hasClass("operation")) {
            currentOperation = $(this).text().trim();
            accessMemoryRow("text", true, (accessMemoryRow("text").substring(0, accessMemoryRow("text").length - 1) + currentOperation));
            return;
        }
        pressedOperation($(this).text().trim());
        previousTarget = $(this);
    });
    $(".equals").click(function() {
        previousTarget = undefined;
        x = calculate(x, currentOperation, true);
        chainCalculation = false;
        eraseBefore = true;
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
        accessActiveRow("clean");
        accessMemoryRow("clean");
    });
    $(".clearentry").click(function() {
        accessActiveRow("clean");
    });
    $(".plusminus").click(function() {
        var value = accessActiveRow("text");
        if (value !== "") {
            if (value > 0) {
                accessActiveRow("text", -Math.abs(Number(value)));
            } else {
                accessActiveRow("text", Math.abs(Number(value)));
            }
        }
    });
    $(".inverse").click(function() {
        var value = accessActiveRow("text");
        if (value !== "") {
            accessActiveRow("text", (1 / value));
        }
    });
});