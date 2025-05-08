const exampleArray = new Array();

exampleArray.push(1);
exampleArray.pop(1);
exampleArray.unshift(1);
exampleArray.unshift(2);
exampleArray.unshift(3);
exampleArray.unshift(4);
exampleArray.unshift(5);

console.log(exampleArray);

exampleArray.splice(0 , (exampleArray.length));

console.log(exampleArray);

for (let i = 0; i <= 1000; i++) {
    exampleArray.push(Math.round(Math.random() * 1000));
};

console.log(exampleArray);

exampleArray.forEach((number, index, array) => console.log(`${number} has ${index} as the index of ${array} array.`));
