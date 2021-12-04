import { readFileSync } from 'fs';

export const getInputs = (file: string): string[] => readFileSync(file, 'utf-8').split('\r\n');
