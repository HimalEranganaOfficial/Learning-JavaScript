// We can simpy sort a JS Array, using below "sort()" method.

const testArray = [1,2,5043,5,39,39,-100];
testArray.sort();
console.log(testArray);

// The result: [-100, 1, 2, 39, 39, 5, 5043]

// This happens because, "sort()" method, sorts the Array elements by the UTF-16 order.

// So, we can use below code to actually sort numbers in an array.

console.log(testArray.sort((a,b) => a-b))

// If (a-b) > 0 then, [b,a]
// If (a-b) < 0 then, [a,b]

//The console log of above line: [-100, 1, 2, 5, 39, 39, 5043]
