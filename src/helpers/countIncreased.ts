export const countIncreased = (array: number[]) =>
  array.filter((value, index, array) => (index !== 0 ? value > array[index - 1] : false)).length;
