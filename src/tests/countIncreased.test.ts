import { describe } from 'mocha';
import { expect } from 'chai';
import { countIncreased } from '../helpers/countIncreased';

describe('countIncreased', () => {
  it('should count the increased numbers when provided an array of numbers', () => {
    const testArray = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const count = countIncreased(testArray);
    expect(count === 7);
  });
});
