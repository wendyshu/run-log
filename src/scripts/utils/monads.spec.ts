import { Monads } from './monads';
import { Option, Some, None } from '../../components/option/option'; // TODO: no relative paths

test('Monads.flatten(Some(Some(...)))', () => {
  const res = Monads.flatten(Option(Option('foo')));
  expect(res).toEqual(Some('foo'));
});

test('Monads.flatten(Some(None()))', () => {
  const res = Monads.flatten(Option(None()));
  expect(res).toEqual(None());
});
