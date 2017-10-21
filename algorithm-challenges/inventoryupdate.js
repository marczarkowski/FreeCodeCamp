function updateInventory(arr1, arr2) {
    let args = Array.prototype.slice.call(arguments);

    let checkArgs = args.filter((arg) => {
            return arg.length > 0;
});
    let alphabeticalOrder = ((x, y) => {
            return x[1] > y[1];
});
    if (checkArgs.length < 2) {
        return checkArgs[0].sort(alphabeticalOrder);
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
    updatedInventory = updatedInventory.sort(alphabeticalOrder);
    return updatedInventory;
}
