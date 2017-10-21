/**
 * Created by Marcin on 18.11.2016.
 */
function makeFriendlyDates(arr) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = arr[0].split('-').reverse().concat(arr[1].split("-").reverse());
    let transformDayMonth = (element, index) => {
        let days = ["1st", "2nd", "3rd", "th"];
        element = Number(element);
        if (index === 1 || index === 4) {
            return months[Number(element - 1)];
        } else if (index === 0 || index === 3) {
            return element < 4 ? days[Number(element - 1)] : element + days[3];
        }
        return element;
    }

    let removeRedundant = (element, index, array) => {
        let checkYears = () => (array[5] - array[2] < 1);
        let checkMonths = () => (array[5] - array[2] == 1 && months.indexOf(array[1]) > months.indexOf(array[4]));
        let checkDays = () => (array[1] === array[4] && (array[0].substring(0, array[0].search(/\D/)) > array[3].substring(0, array[3].search(/\D/))));
        if ((index === 2 && element === "2016" && (checkYears() || checkMonths() || checkDays()))) {
            return "";
        } else if (index === 5 && (checkYears() || (checkMonths() || checkDays()))) {
            return "";
        } else if (index === 4 && checkYears() && array[4] === array[1]) {
            return "";
        } else if (index === 3 && checkYears() && array[4] === array[1] && array[0] === array[3]) {
            return "";
        }
        return element;
    }

    let transformToFriendly = (array) => {
        let transformed = [];
        transformed.push(`${array[1]} ${array[0]}`);
        if (array[2] !== '') {
            transformed[0] = `${transformed[0]}, ${array[2]}`
        }
        transformed.push(`${array[4]} ${array[3]}`)
        if (array[5] !== '') {
            transformed[1] = `${transformed[1]}, ${array[5]}`;
        }
        transformed.forEach((el, i, arr) => {
            if (el.length === 0 || el === " " || el === "") {
                arr.splice(i, 1);
            } else if (el.indexOf(" ") === 0) {
                arr[i] = el.substring(1);
            }
        });
        return transformed;
    }
    date = date.map(transformDayMonth).map(removeRedundant);
    date = transformToFriendly(date);
    console.log(date);
    return date;
}