import { durationToSeconds } from './dates';

test('durationToSeconds handles empty durations', () => {
  expect(durationToSeconds('PT')).toBe(0);
});

test('durationToSeconds handles 0s durations', () => {
  expect(durationToSeconds('PT0S')).toBe(0);
});

test('durationToSeconds handles seconds durations', () => {
  expect(durationToSeconds('PT7S')).toBe(7);
});

test('durationToSeconds handles minutes durations', () => {
  expect(durationToSeconds('PT1M')).toBe(60);
});

test('durationToSeconds handles minutes and seconds durations', () => {
  expect(durationToSeconds('PT1M2S')).toBe(62);
});
