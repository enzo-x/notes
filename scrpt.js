// arrayMethods.js

// concat()
// Combines two or more arrays into a new array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// every()
// Checks if all elements in an array pass a test (provided as a function).
let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true

// fill()
// Fills all elements of an array from a start index to an end index with a static value.
let filledArray = new Array(5).fill(0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]

// find()
// Returns the value of the first element that passes a test.
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2

// findIndex()
// Returns the index of the first element that passes a test.
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1

// flat()
// Flattens a nested array into a new array.
let nestedArray = [1, [2, [3, 4], 5], 6];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

// includes()
// Checks if an array contains a certain element.
let hasThree = numbers.includes(3);
console.log(hasThree); // Output: true

// indexOf()
// Returns the first index at which a given element can be found.
let indexOfFour = numbers.indexOf(4);
console.log(indexOfFour); // Output: 3

// join()
// Joins all elements of an array into a string.
let joinedString = numbers.join('-');
console.log(joinedString); // Output: "1-2-3-4-5"

// lastIndexOf()
// Returns the last index at which a given element can be found.
let numbersWithDuplicates = [1, 2, 3, 2, 1];
let lastIndexOfTwo = numbersWithDuplicates.lastIndexOf(2);
console.log(lastIndexOfTwo); // Output: 3

// pop()
// Removes the last element from an array and returns it.
let lastElement = numbers.pop();
console.log(lastElement); // Output: 5
console.log(numbers); // Output: [1, 2, 3, 4]

// push()
// Adds one or more elements to the end of an array and returns the new length.
let newLength = numbers.push(5);
console.log(newLength); // Output: 5
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// reverse()
// Reverses the order of the elements in an array.
let reversedArray = numbers.reverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

// unshift()
// Adds one or more elements to the beginning of an array and returns the new length.
newLength = numbers.unshift(0);
console.log(newLength); // Output: 6
console.log(numbers); // Output: [0, 5, 4, 3, 2, 1]

// shift()
// Removes the first element from an array and returns it.
let firstElement = numbers.shift();
console.log(firstElement); // Output: 0
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// slice()
// Returns a shallow copy of a portion of an array into a new array object.
let slicedArray = numbers.slice(1, 3);
console.log(slicedArray); // Output: [4, 3]

// some()
// Checks if at least one element in an array passes a test.
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true

// sort()
// Sorts the elements of an array in place and returns the sorted array.
let unsortedArray = [3, 1, 4, 1, 5, 9];
let sortedArray = unsortedArray.sort((a, b) => a - b);
console.log(sortedArray); // Output: [1, 1, 3, 4, 5, 9]

// splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
let splicedArray = numbers.splice(2, 1, 'a', 'b');
console.log(splicedArray); // Output: [3]
console.log(numbers); // Output: [5, 4, 'a', 'b', 2, 1]

// toString()
// Returns a string representing the specified array and its elements.
let arrayString = numbers.toString();
console.log(arrayString); // Output: "5,4,a,b,2,1"

// filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter(num => typeof num === 'number' && num % 2 === 0);
console.log(evenNumbers); // Output: [4, 2]

// reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.
let sum = numbers.reduce((acc, num) => typeof num === 'number' ? acc + num : acc, 0);
console.log(sum); // Output: 12

// map()
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
let doubledNumbers = numbers.map(num => typeof num === 'number' ? num * 2 : num);
console.log(doubledNumbers); // Output: [10, 8, 'aa', 'bb', 4, 2]

// forEach()
// Executes a provided function once for each array element.
numbers.forEach(num => console.log(num)); // Output: 5 4 a b 2 1


// stringMethods.js

// concat()
// Combines two or more strings into a new string.
let str1 = "Hello";
let str2 = "World";
let combinedString = str1.concat(" ", str2);
console.log(combinedString); // Output: "Hello World"

// includes()
// Checks if a string contains a specified value.
let mainString = "JavaScript is fun";
let hasFun = mainString.includes("fun");
console.log(hasFun); // Output: true

// indexOf()
// Returns the first index at which a specified value occurs.
let indexOfScript = mainString.indexOf("Script");
console.log(indexOfScript); // Output: 4

// lastIndexOf()
// Returns the last index at which a specified value occurs.
let lastIndexOfA = mainString.lastIndexOf("a");
console.log(lastIndexOfA); // Output: 3

// padEnd()
// Pads the current string with another string (multiple times, if needed) until it reaches the given length.
let paddedEnd = str1.padEnd(10, "!");
console.log(paddedEnd); // Output: "Hello!!!!!"

// padStart()
// Pads the current string with another string (multiple times, if needed) until it reaches the given length.
let paddedStart = str2.padStart(10, "!");
console.log(paddedStart); // Output: "!!!!!World"

// repeat()
// Constructs and returns a new string which contains the specified number of copies of the string on which it was called.
let repeatedString = str1.repeat(3);
console.log(repeatedString); // Output: "HelloHelloHello"

// replace()
// Returns a new string with some or all matches of a pattern replaced by a replacement.
let newString = mainString.replace("fun", "awesome");
console.log(newString); // Output: "JavaScript is awesome"

// search()
// Executes a search for a match between a regular expression and the calling string and returns the index of the first match.
let searchIndex = mainString.search("is");
console.log(searchIndex); // Output: 11

// slice()
// Extracts a section of a string and returns it as a new string.
let slicedString = mainString.slice(0, 10);
console.log(slicedString); // Output: "JavaScript"

// split()
// Splits a string into an array of substrings using a specified separator string.
let splitArray = mainString.split(" ");
console.log(splitArray); // Output: ["JavaScript", "is", "fun"]

// startsWith()
// Determines whether a string begins with the characters of a specified string.
let startsWithJava = mainString.startsWith("Java");
console.log(startsWithJava); // Output: true

// substr()
// Returns a portion of the string, starting at the specified index and extending for a given number of characters.
let substrString = mainString.substr(4, 6);
console.log(substrString); // Output: "Script"

// substring()
// Returns the part of the string between the start and end indexes, or to the end of the string.
let substringString = mainString.substring(4, 10);
console.log(substringString); // Output: "Script"

// toLowerCase()
// Converts the entire string to lower case.
let lowerCaseString = mainString.toLowerCase();
console.log(lowerCaseString); // Output: "javascript is fun"

// toUpperCase()
// Converts the entire string to upper case.
let upperCaseString = mainString.toUpperCase();
console.log(upperCaseString); // Output: "JAVASCRIPT IS FUN"

// trim()
// Removes whitespace from both ends of a string.
let stringWithWhitespace = "  Hello World  ";
let trimmedString = stringWithWhitespace.trim();
console.log(trimmedString); // Output: "Hello World"

// trimEnd (or trimRight)
// Removes whitespace from the end of a string.
let trimmedEndString = stringWithWhitespace.trimEnd();
console.log(trimmedEndString); // Output: "  Hello World"

// trimStart (or trimLeft)
// Removes whitespace from the beginning of a string.
let trimmedStartString = stringWithWhitespace.trimStart();
console.log(trimmedStartString); // Output: "Hello World  "

// charAt()
// Returns the character at the specified index.
let charAtIndex = mainString.charAt(0);
console.log(charAtIndex); // Output: "J"

// charCodeAt()
// Returns the Unicode value of the character at the specified index.
let charCodeAtIndex = mainString.charCodeAt(0);
console.log(charCodeAtIndex); // Output: 74
