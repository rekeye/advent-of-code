import { getInputs } from '../helpers/getInputs';
import { countIncreased } from '../helpers/countIncreased';

const inputs: number[] = getInputs('./_inputs/dayOne.txt').map((value) => parseInt(value));
console.log('array of inputs: ', inputs);

// PART ONE
const partOne: number = countIncreased(inputs);
console.log('number of increases: ', partOne);

// PART TWO
const arrayOfThrees: number[] = inputs
  .filter((value, index, array) => index < array.length - 2)
  .map((current, index) => current + inputs[index + 1] + inputs[index + 2]);
console.log('array of threes: ', arrayOfThrees);

const partTwo: number = countIncreased(arrayOfThrees);
console.log('number of increases based on three measurement windows: ', partTwo);
