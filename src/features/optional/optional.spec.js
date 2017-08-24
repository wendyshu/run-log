import Optional from './optional';

test('some.orElse returns initial value', () => {
  expect( Optional(42).orElse(13) ).toBe(42);
});

test('optional(null).orElse returns other value', () => {
  expect( Optional(null).orElse(7) ).toBe(7);
});

test('optional(undefined).orElse returns other value', () => {
  expect( Optional().orElse(7) ).toBe(7);
});

test('some.map transforms value', () => {
  expect( Optional(3).map(n => n ** 2).get() ).toBe(9);
});

test('none.map does not explode', () => {
  expect( Optional(null).map(n => n ** 2).get() ).toBeNull();
});
