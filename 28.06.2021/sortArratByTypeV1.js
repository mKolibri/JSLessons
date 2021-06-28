// is variable type number, returns boolean value
const isNumber = value => typeof value === 'number';

// Returns reversed array from string
const stringToArray = string => {
  const array = [];
  let count = string.length;

  while (count) {
    array.push(string[--count]);
  }

  return array;
};

// Convert stringNumber to Number
const toNumber = string => {
  let convertedNumber = 0;
  // Get reversed array from string's elements
  const array = stringToArray(string);

  // Get number from array elements
  while (array.length) {
    const length = array.length - 1;
    convertedNumber += array[length] * 10 ** length;
    // Easy way to delete array's last element :)
    array.length = length;
  }

  return convertedNumber;
};

// Check is the Sting Number
const isNumberString = value =>
  // Not strict equal, types are not the same
  typeof value === 'string' && toNumber(value) == value;

// Compare ASCII codes for characters to check is [a-z, A-Z]
const isLetter = elem =>
  (elem >= 'a' && elem <= 'z') || (elem >= 'A' && elem <= 'Z');

// Returns boolean value - is letter count great then 5
const isLetterCountGreatThenFive = (value = '') => {
  let letterCount = 0;
  for (const elem of value) {
    // if element is letter, increase letters count
    isLetter(elem) && ++letterCount;
  }

  return letterCount > 5;
};

const isString = value =>
  typeof value === 'string' && isLetterCountGreatThenFive(value);

const getType = value => {
  if (isNumber(value)) return 'numbers';
  if (isNumberString(value)) return 'numbersString';
  if (isString(value)) return 'strings';
  return 'none';
};

// Returns sorted by type arrays
const sortArrayByType = arr => {
  const newObject = { numbers: [], numbersString: [], strings: [] };

  let index = 0;
  while (index < arr.length) {
    const data = arr[index++];
    const type = getType(data);
    if (type !== "none") {
      newObject[type].push(data);
    }
  }
  return newObject;
};

// Test
console.log(sortArrayByType([1, 2, "3", "abc de", "abcdef"]));
