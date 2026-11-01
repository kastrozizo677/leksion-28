// Array with strings of different lengths
const words = ["hi", "apple", "sunshine", "code", "developer"];

// 1. Generate a random index within the range of the array's length
const randomIndex = Math.floor(Math.random() * words.length);

// 2. Extract using destructuring at the random index (with a default fallback)
const { [randomIndex]: selectedWord = "No word found" } = words;

// 3. Display the result
console.log(selectedWord);