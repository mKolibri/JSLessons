// Will be a callback for filter
const isValid = (number = 0) => {
  // If is not in range - [10, 99]
  if (number < 10 || number > 99) return false;

  // If number is not prime
  let i = Math.floor(Math.sqrt(number));
  while (i > 1) {
    if (Math.floor(number / i) * i === number) return false;
    --i;
  }
  return true;
};

// Get summary of digits
const getSum = (arr = []) =>
  arr
    .filter(isValid)
    .map((value) => {
      const digit = value % 10;
      return digit + Math.floor((value - digit) / 10);
    })
    .reduce((prev, next) => prev + next);

// Test
console.log("Sum: ", getSum([2, 5, 7, 23, 46, 71, 101]));
