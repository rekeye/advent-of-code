import { getInputs } from '../helpers/getInputs';
import { countIncreased } from '../helpers/countIncreased';

const inputs = getInputs('./_inputs/dayOne.txt');
console.log('array of inputs: ', inputs);

// PART ONE
const partOne = countIncreased(inputs);
console.log('number of increases: ', partOne);

// PART TWO
const arrayOfThrees = inputs
  .filter((value, index, array) => index < array.length - 2)
  .map((current, index) => current + inputs[index + 1] + inputs[index + 2]);
console.log('array of threes: ', arrayOfThrees);

const partTwo = countIncreased(arrayOfThrees);
console.log('number of increases based on three measurement windows: ', partTwo);
