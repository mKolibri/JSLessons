const isValid = (number = 0) => {
  // Is number have 2 digits
  if (number < 10 || number > 99) return false;

  // If number is prime
  let i = ~~(number / 3);
  while (i > 1) {
    if (~~(number / i) * i === number) return false;
    --i;
  }
  return true;
};

// Get summary of digits
const getSum = (arr = []) => {
  let sum = 0;
  // For each element of array
  for (let value of arr) {
    if (isValid(value)) {
      // First digit
      const digit = ~~(value / 10);
      sum += digit + value - digit * 10;
    }
  }
  return sum;
};

// Test
console.log("Sum: ", getSum([2, 5, 7, 23, 46, 71, 101]));
