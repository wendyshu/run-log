import { get } from './utils';

test('get when obj is null with default value', () => {
  expect(get(null, 'foo', 'bar')).toBe('bar');
});

test('get when obj is null without default value', () => {
  expect(get(null, 'foo')).toBe(undefined);
});

test('get when prop is undefined with default value', () => {
  expect(get({}, 'foo', 'bar')).toBe('bar');
});

test('get when prop is undefined without default value', () => {
  expect(get({}, 'foo')).toBe(undefined);
});

test('get when prop is defined with default value', () => {
  expect(get({ foo: '123' }, 'foo', 'bar')).toBe('123');
});

test('get when prop is defined without default value', () => {
  expect(get({ foo: '123' }, 'foo')).toBe('123');
});
