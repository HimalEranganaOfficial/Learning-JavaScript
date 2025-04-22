export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if ((a/b) <= 1) {
        return b/a;
    } else {
        return a/b;
    }
}

const PI = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;
export {PI}
