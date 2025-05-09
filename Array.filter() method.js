const exampleArray = new Array();
for (let i = 0; i < 1000; i+=1) {
    exampleArray.push(Math.round(Math.random() * 100));
};

console.log(`Made an Array with ${exampleArray.length} elements in it.`);

const noOfEvenNumber = (exampleArray.filter((number) => number % 2 === 0)).length;

console.log(`Is has,
${noOfEvenNumber} Even Numbers in it and,
${exampleArray.length - noOfEvenNumber} Odd Numbers in it...!`);
