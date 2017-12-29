import { durationToSeconds, durationToComponents, toDuration } from './dates';

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

test('durationToComponents with every component', () => {
  expect(durationToComponents('PT1H2M35S')).toEqual({
    hours: 1,
    minutes: 2,
    seconds: 35,
  });
});

test('durationToComponents without hours', () => {
  expect(durationToComponents('PT2M35S')).toEqual({
    hours: 0,
    minutes: 2,
    seconds: 35,
  });
});

test('durationToComponents without hours, minutes', () => {
  expect(durationToComponents('PT35S')).toEqual({
    hours: 0,
    minutes: 0,
    seconds: 35,
  });
});

test('durationToComponents without minutes', () => {
  expect(durationToComponents('PT1H35S')).toEqual({
    hours: 1,
    minutes: 0,
    seconds: 35,
  });
});

test('durationToComponents without seconds', () => {
  expect(durationToComponents('PT1H2M')).toEqual({
    hours: 1,
    minutes: 2,
    seconds: 0,
  });
});

test('toDuration without components', () => {
  expect(toDuration(undefined, undefined, undefined)).toBe(undefined);
});

test('toDuration all components', () => {
  expect(toDuration(1, 2, 3)).toBe('PT1H2M3S');
});

test('toDuration missing hours', () => {
  expect(toDuration(undefined, 2, 3)).toBe('PT0H2M3S');
});

test('toDuration missing minutes', () => {
  expect(toDuration(1, undefined, 3)).toBe('PT1H0M3S');
});

test('toDuration missing seconds', () => {
  expect(toDuration(1, 2, undefined)).toBe('PT1H2M0S');
});
