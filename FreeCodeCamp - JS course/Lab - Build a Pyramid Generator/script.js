function pyramid(repeatableStr, rowsNum, randomBool) {
    const mainArray = new Array();
    let maxStrNumber = (2 * rowsNum) - 1;
    for (let i = 1; i <= maxStrNumber; i += 2) {
        let spaceLength = (maxStrNumber - i) / 2;
        mainArray.push(`${" ".repeat(spaceLength)}${repeatableStr.repeat(i)}`);
    }
    if (randomBool === true) {
        mainArray.reverse();
    }
    return "\n" + mainArray.join("\n") + "\n";
}

console.log(pyramid("o", 10, false));

// More beautiful code... ↓

/*function pyramid(repeatableStr, rowsNum, randomBool) {
    const mainArray = new Array();
    let maxStrNumber = (2 * rowsNum)- 1;
    for (let i = 1; i <= maxStrNumber;i+=2) {
        let spaceLength = Number(maxStrNumber - i)/2;
        mainArray.push(`${" ".repeat(spaceLength)}${repeatableStr.repeat(i)}${" ".repeat(spaceLength)}`);
    };
    mainArray.push("\n");
    mainArray.unshift("\n");
    if (randomBool === true) {
        mainArray.reverse();
    }
    let stringOfArray = mainArray.join("\n");
    return stringOfArray;
};

console.log(pyramid("o", 10, false));*/
