/**
 * free stuff for monads.
 */
export namespace Monads {
  export function flatten<T>(m: Fp.Monad<Fp.Monad<T>>): Fp.Monad<T> {
    return m.flatMap(n => n);
  }
}
