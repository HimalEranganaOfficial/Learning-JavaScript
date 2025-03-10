/*let year = prompt("Enter a year...", "2025");*/

let year = "2003";

// Long form... ↓
function isLeapYear(year) {
    if (((Number(year%400) === 0) & (Number(year%100) === 0)) | ((Number(year%4) === 0) & (Number(year%100) !== 0))) {
        return `${year} is a leap year.`;
    } else {
        return result = `${year} is not a leap year.`;
    }
}
let result = isLeapYear(year);
console.log(result);

//Short Form ↓
/*let isLeapYear = (year) => (isLeapYear = (((Number(year%400) === 0) & (Number(year%100) === 0)) | ((Number(year%4) === 0) & (Number(year%100) !== 0))) ? `${year} is a leap year.` : `${year} is not a leap year.`);
console.log(isLeapYear(year));*/
