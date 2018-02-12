import { averagePace, distance, pace, seconds, totalDistance } from './events';

const nonRun = {};
const steadyRun = {run: {distance: 6, duration: "PT1H"}};
const intervals = {run: {count: 6, intervalDuration: "PT1M", intervalSpeed: 10.0}};

test('distance for non-running event', () => {
  expect(distance(nonRun)).toBe(0);
});

test('distance for steady-state run', () => {
  expect(distance(steadyRun)).toBe(6);
});

test('distance for intervals', () => {
  expect(distance(intervals)).toBe(1);
});

test('totalDistance for 0 events', () => {
  expect(totalDistance([])).toBe(0);
});

test('totalDistance for several types of events', () => {
  const events = [
    nonRun,
    steadyRun,
    intervals
  ];
  expect(totalDistance(events)).toBe(7);
});

test('pace for non-running event', () => {
  expect(pace(nonRun)).toBe(0);
});

test('pace for steady-state run', () => {
  expect(pace(steadyRun)).toBe(600);
});

test('pace for intervals', () => {
  expect(pace(intervals)).toBe(360);
});

test('seconds for non-running event', () => {
  expect(seconds(nonRun)).toBe(0);
});

test('seconds for steady-state run', () => {
  expect(seconds(steadyRun)).toBe(3600);
});

test('seconds for intervals', () => {
  expect(seconds(intervals)).toBe(360);
});

test('averagePace for several types of events', () => {
  const events = [
    nonRun,
    steadyRun,
    intervals
  ];
  expect(averagePace(events)).toBe(565.7142857142857);
});
