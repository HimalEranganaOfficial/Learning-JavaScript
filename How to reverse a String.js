// In JS, we can't simply edit inside of a string. (Strings are immutable.)
// So, for reversing, we have to make an Array from string first, and reverse the Array and join them together to make a new String...

let userString = prompt("Enter anything you want to reverse here...", "!...anagnarE lamiH yb depoleveD");

// Short form ↓
//const reverseString = (userString) => userString = (((String(userString)).split("")).reverse()).join("");

// Long form ↓
function reverseString(userString) {
    userString = String(userString);
    let splittedUserString = (userString).split("");
    let reversedArrayOfUserString = splittedUserString.reverse();
    let joinedReversedString = reversedArrayOfUserString.join("");
    return joinedReversedString;
}

console.log(reverseString(userString));
console.log(reverseString("...edoc siht gniweiv ,rof uoy knahT"));
