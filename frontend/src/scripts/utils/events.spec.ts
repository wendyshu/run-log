import { distance, totalDistance } from './events';

test('distance for non-running event', () => {
  expect(distance({})).toBe(0);
});

test('distance for steady-state run', () => {
  expect(distance({run: {distance: 5}})).toBe(5);
});

test('distance for intervals', () => {
  expect(distance({run: {totalDistance: 2.2}})).toBe(2.2);
});

test('totalDistance for 0 events', () => {
  expect(distance([])).toBe(0);
});

test('totalDistance for 0 events', () => {
  const events = [
    {},
    {run: {distance: 5}},
    {run: {totalDistance: 2.2}}
  ];
  expect(distance(events)).toBe(0);
});
