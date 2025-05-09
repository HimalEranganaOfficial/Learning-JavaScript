const exampleArray = new Array();
for (let i = 1; i < 11; i+=1) {
    exampleArray.push(i);
};

console.log(`Made an Array with ${exampleArray.length} elements in it.`);

let randomNumber = Math.floor(Math.random() * 5) + 1;

const newArray = exampleArray.map((number) => number * randomNumber);

console.log(`Original Array: [${exampleArray}]
[${exampleArray}] x ${String(randomNumber)} = [${newArray}]`);
