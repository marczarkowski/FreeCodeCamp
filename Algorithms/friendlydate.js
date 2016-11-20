/**
 * Created by Marcin on 18.11.2016.
 */
function makeFriendlyDates(arr) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = arr[0].split('-').reverse().concat(arr[1].split("-").reverse());
    let transformDayMonth = (element, index) =>
    {
        let days = ["1st", "2nd", "3rd", "th"];
        if (element.indexOf("0") === 0) {
            element = element.substring(1);
        }
        if (index === 1 || index === 4) {
            return months[Number(element - 1)];
        } else if (index === 0 || index === 3) {
            return element < 4 ? days[Number(element - 1)] : element + days[3];
        }
        return element;
    }
    let removeRedundant = (element, index, array) => {
        if (index === 2 && (element === "2016" && (array[5] - element < 1 || (array[5] - element == 1 && (months.indexOf(array[1]) < months.indexOf(array[4]) || (array[1] === array[4] && array[0].substring(0, array[0].search(/\D/)) < array[3].substring(0, array[3].search(/\D/)))))))) {
            return "";
        }
        return element;
    }
    date = date.map(transformDayMonth).map(removeRedundant);
    console.log(date);
}
makeFriendlyDates(["2016-12-01", "2017-11-01"])
