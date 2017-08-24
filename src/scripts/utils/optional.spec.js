import optional from './optional';

test('some.orElse returns initial value', () => {
  expect( optional(42).orElse(13) ).toBe(42);
});

test('optional(null).orElse returns other value', () => {
  expect( optional(null).orElse(7) ).toBe(7);
});

test('optional(undefined).orElse returns other value', () => {
  expect( optional().orElse(7) ).toBe(7);
});

test('some.map transforms value', () => {
  expect( optional(3).map(n => n ** 2).get() ).toBe(9);
});

test('none.map does not explode', () => {
  expect( optional(null).map(n => n ** 2).get() ).toBeNull();
});
