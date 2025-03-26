let num = Math.ceil(19*(Math.random()));

function factorialCalculator(numToGetFac) {
    let result = 1;
    numToGetFac = Number(numToGetFac);
    for (let i = 1; i <= numToGetFac; i++) {
        result = result * i;
    }
    return result;
};

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
