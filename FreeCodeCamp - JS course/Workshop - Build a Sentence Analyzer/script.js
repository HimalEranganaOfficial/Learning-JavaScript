// WorkShop Link - https://www.freecodecamp.org/learn/full-stack-developer/workshop-sentence-analyzer/

function getVowelCount(sentence) {
    let letterCombination = "aeiou";
    letterCombination = `${letterCombination}${letterCombination.toUpperCase()}`
    let sentenceArray = sentence.split("");
    let vowelCount = 0;
    for (let i of sentenceArray) {
        if (letterCombination.includes(i)) {
            vowelCount++;
        };
    };
    return vowelCount;
};

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
    let letterCombination = "bcdfghjklmnpqrstvwxyz";
    letterCombination = `${letterCombination}${letterCombination.toUpperCase()}`
    let sentenceArray = sentence.split("");
    let consonantCount = 0;
    for (let i of sentenceArray) {
        if (letterCombination.includes(i)) {
            consonantCount++;
        };
    };
    return consonantCount;
};

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
    let letterCombination = "aeioubcdfghjklmnpqrstvwxyz";
    letterCombination = ` ${letterCombination}${letterCombination.toUpperCase()}`
    let sentenceArray = sentence.split("");
    let punctuationCount = 0;
    for (let i of sentenceArray) {
        if (letterCombination.includes(i)) {
            continue;
        } else {
            punctuationCount++;
        };
    };
    return punctuationCount;
};

let punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
    sentence = sentence.replaceAll("_", " ");
    sentence = sentence.replaceAll("-", " ");
    //let sentenceArray = sentence.split(" ").filter(word => word !== "");
    let sentenceArray = sentence.split(" ");
    let wordCount = 0;
    for (let i of sentenceArray) {
        if (i !== "") {
            wordCount++;
        };
    };
    return wordCount;
};

let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
