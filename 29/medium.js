// Initial array containing five numbers
let numbers = [10, 20, 30, 40, 50];

// 1. Add a number to the end of the array
numbers.push(60);

// 2. Remove the first number from the beginning of the array
numbers.shift();

// 3. Add a new number at the second position (index 1)
// splice(startIndex, deleteCount, itemToAdd)
numbers.splice(1, 0, 25);

// 4. Display the modified array in the console
console.log(numbers);