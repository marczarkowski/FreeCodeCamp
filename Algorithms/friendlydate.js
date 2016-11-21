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
        let checkYears = () =>  (array[5] - array[2] < 1);
        let checkMonths = () => (array[5] - array[2] == 1 && months.indexOf(array[1]) > months.indexOf(array[4]));
        let checkDays = () => (array[1] === array[4] && (array[0].substring(0, array[0].search(/\D/)) < array[3].substring(0, array[3].search(/\D/))));
        if ((index === 2 && element === "2016" && (checkYears() || checkMonths() || checkDays()))) {
            return;
        } else if (index === 5 && (checkYears() || (checkMonths() || checkDays()))) {
            return;
        } else if (index === 4 && checkYears() && array[4] === array[1]) {
            return;
        } else if (index === 3 && checkYears() && array[4] === array[1] && array[0] === array[3]) {
            return;
        }
        return element;
    }

    let transformToFriendly = (array) => {
        let transformed = [];
        transformed.push(`${array[1]} ${array[0]}`);
        if (array[2] !== '') {
            transformed[0] = `${transformed[0]}, ${array[2]}`
        }
        console.log(transformed);

        return transformed;
    }
    date = date.map(transformDayMonth).map(removeRedundant);
    // date = transformToFriendly(date);
    console.log(date);
    return date;
}
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
console.log(`Oczekiwany wynik: ["December 1st","February 3rd"].`);
makeFriendlyDates(["2016-07-01", "2016-07-04"]);
console.log(`Oczekiwany wynik: ["July 1st","4th"].`);
makeFriendlyDates(["2016-12-01", "2018-02-03"]);
console.log(`Oczekiwany wynik: ["December 1st, 2016","February 3rd, 2018"].`);
makeFriendlyDates(["2017-03-01", "2017-05-05"]);
console.log(`Oczekiwany wynik: ["March 1st, 2017","May 5th"].`);
makeFriendlyDates(["2018-01-13", "2018-01-13"]);
console.log(`Oczekiwany wynik: ["January 13th, 2018"].`);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
console.log(`Oczekiwany wynik: ["September 5th, 2022","September 4th"].`);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);
console.log(`Oczekiwany wynik:["September 5th, 2022","September 5th, 2023"].`);