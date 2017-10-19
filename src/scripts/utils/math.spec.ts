import { add, min } from './math.ts';

test('add can add two valid numbers', () => {
  expect(add(1, 1)).toBe(2);
});

test('min returns first value', () => {
  expect(min(1, 2)).toBe(1);
});

test('min returns second value', () => {
  expect(min(5, 2)).toBe(2);
});
