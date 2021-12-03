import { getInputs } from '../helpers/getInputs';
import { countIncreased } from '../helpers/countIncreased';

const inputs = getInputs('./_inputs/dayOne.txt');
console.log('array of inputs: ', inputs);

// part one
const partOne = countIncreased(inputs);
console.log('number of increases: ', partOne);
