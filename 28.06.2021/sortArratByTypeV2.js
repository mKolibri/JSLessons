// is variable type number, returns boolean value
const isNumber = value => typeof value === 'number';

// Check is Number String, not strict equal, types are different
const isNumberString = value => typeof value === 'string' && Number(value) == value;

const isLetterCountGreaterThenFive = (string = ' ') => {
  let count = 0;
  for (const char of string) {
    // This methods works only for characters
    (char.toLowerCase() !== char.toUpperCase()) && ++count
  }
  return count > 5;
}

// Check is string and letter count great then 5
const isString = value =>
  typeof value === 'string' && isLetterCountGreaterThenFive(value);

// Get type for variable
const getType = value => {
  if (isNumber(value)) return 'numbers';
  if (isNumberString(value)) return 'numbersString';
  if (isString(value)) return 'strings';
  return 'none';
};

// Returns sorted by type arrays
const sortArrayByType = arr => {
  const newObject = { numbers: [], numbersString: [], strings: [] };

  // Run for each element of array
  arr.forEach(elem => {
    const type = getType(elem);
    type !== 'none' && newObject[type].push(elem);
  })
  return newObject;
};

// Test
console.log(sortArrayByType([1, 2, "3", "abc 11de", "abc de", "abcdef"]));
