import { readFileSync } from 'fs';

export const getInputs = (file: string): number[] =>
  readFileSync(file, 'utf-8')
    .split('\r\n')
    .map((value) => parseInt(value));
