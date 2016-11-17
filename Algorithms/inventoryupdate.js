/**
 * Created by Marcin on 17.11.2016.
 */
function updateInventory(arr1, arr2) {
    let args = Array.prototype.slice.call(arguments);

    let checkArgs = args.filter((arg) => {
        return arg.length > 0;
    });
    if (checkArgs.length < 2) {
        return checkArgs[0].sort((x, y) => {
            return x[1] > y[1];
        });
    }
    let updatedQuantity = arr1.filter((element) => {
        for (let i = 0; i < arr2.length; i++) {
            if (element[1] === arr2[i][1]) {
                return element[0] = element[0] + arr2[i][0];
            }
        }
        return element;
    });
    let newItems = arr2.filter((element) => {
        for (let i = 0; i < arr2.length; i++) {
            if (element[1] === arr1[i][1])
                return;
        }
        return element;
    });
    let updatedInventory = updatedQuantity.concat(newItems);
    updatedInventory = updatedInventory.sort((x, y) => {
        return x[1] > y[1]
    });
    return updatedInventory;
}

// Example inventory lists
var curInv = [];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));