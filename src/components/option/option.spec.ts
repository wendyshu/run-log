import {Option, None, Some} from './option';

//
// Constructor tests
//

test('Option(undefined) === None', () => {
  expect(Option()).toEqual(None());
});

test('Option(undefined).empty', () => {
  expect(Option().empty).toEqual(true);
});

test('Option(null) === None', () => {
  expect(Option(null)).toEqual(None());
});

//
// None tests
//

test('None.empty', () => {
  expect(None().empty).toEqual(true);
});

test('None.get', () => {
  expect(() => None().get()).toThrowError('Cannot call None.get');
});

test('None.orElse', () => {
  expect(None().orElse('bar')).toEqual('bar');
});

test('None.map', () => {
  expect(None().map((a) => 'foo')).toEqual(None());
});

test('Some.flatMap(...) == None', () => {
  expect(None().flatMap((a) => Some('foo'))).toEqual(None());
});

//
// Some tests
//

test('Some.empty', () => {
  expect(Some('a').empty).toEqual(false);
});

test('Some.get', () => {
  expect(Some('foo').get()).toEqual('foo');
});

test('Some.orElse', () => {
  expect(Some('foo').orElse('bar')).toEqual('foo');
});

test('Some.map', () => {
  expect(Some('foo').map((a) => a + 'bar')).toEqual(Some('foobar'));
});

test('Some.flatMap(None) == None', () => {
  expect(Some('foo').flatMap((a) => None())).toEqual(None());
});

test('Some(a).flatMap(Some(b)) == Some(b)', () => {
  expect(Some('foo').flatMap((a) => Some('bar'))).toEqual(Some('bar'));
});
