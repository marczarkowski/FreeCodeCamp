function pairwise(arr, arg) {
    let used = [];
    return arr.reduce(function (sum, elO, iO) {
        return arr.reduce(function (_, elI, iI) {
            if (arg - (elO + elI) === 0 && used.indexOf(iO) === -1 && used.indexOf(iI) === -1 && iO != iI ) {
                used.push(iO, iI);
                return sum += iO + iI;
            } return sum + 0;
        });
    }, 0);
}