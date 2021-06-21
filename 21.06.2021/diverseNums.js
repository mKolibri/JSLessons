// Be sure the number is valid integer
const getValidNumber = (num) => {
  // Get number if it is string
  num = parseInt(num, 10);
  // Make it greater than or equal to 0
  return Math.abs(num);
};

const numberDiverse = (num) => {
  num = getValidNumber(num);
  const diverseArray = [];
  // Maximum diverse number can be
  let i = Math.floor(Math.sqrt(num));

  while (i > 1) {
    const balance = Math.floor(num / i);

    // check is diverse for number
    if (balance * i === num) {
      diverseArray.push(balance);
      diverseArray.unshift(i);
    }
    --i;
  }

  return diverseArray;
};

// test
const testNumber = 30;
console.log(
  `${testNumber}'s sorted diverse array: `,
  numberDiverse(testNumber)
);
