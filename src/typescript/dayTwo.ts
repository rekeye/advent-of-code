import { getInputs } from '../helpers/getInputs';
import { Command } from '../interfaces/dayTwo';
import { FORWARD, DOWN, UP } from '../constants/dayTwo';

const inputs: string[] = getInputs('./_inputs/dayTwo.txt');

const commandsArray: Command[] = inputs.map((input: string) => {
  const [type, number] = input.split(' ');
  if (type === FORWARD || type === DOWN || type === UP) return [type, parseInt(number)];
  return [FORWARD, 0];
});
console.log('array of commands: ', commandsArray);

// PART ONE
const horizontalArray: number[] = [];
const depthArray: number[] = [];

commandsArray.forEach(([type, number]: Command) => {
  if (type === FORWARD) horizontalArray.push(number);
  if (type === DOWN) depthArray.push(number);
  if (type === UP) depthArray.push(number * -1);
});

const finalHorizontalPosition: number = horizontalArray.reduce(
  (position, current) => position + current
);
const finalDepth: number = depthArray.reduce((position, current) => position + current);

const position: number = finalHorizontalPosition * finalDepth;
console.log('final position without aim: ', position);

// PART TWO
let currentAim = 0;
let horizontalPositionWithAim = 0;
let depthWithAim = 0;

commandsArray.forEach(([type, number]: Command) => {
  if (type === FORWARD) {
    horizontalPositionWithAim += number;
    depthWithAim += number * currentAim;
  }
  if (type === DOWN) return (currentAim += number);
  if (type === UP) return (currentAim -= number);
});

const positionWithAim = horizontalPositionWithAim * depthWithAim;
console.log('final position with aim: ', positionWithAim);
