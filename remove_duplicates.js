const lodash = require("lodash");

// Initial array containing both unique and duplicate integer values
const numbers = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10];

// Application of lodash's `uniq` function to remove duplicates and store the result
const uniqueNumbers = lodash.uniq(numbers);

// Output the array of unique numbers to the console
console.log(uniqueNumbers);
