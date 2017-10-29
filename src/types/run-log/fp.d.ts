declare namespace Fp {

  /**
   * Function that transforms from one value to another.
   */
  export type Transform<T, U> = (e: T) => U;

  /**
   * Function that return true or false for given object.
   */
  export type Predicate<T> = (e: T) => boolean;

  export interface Functor<T> {
    map<U>(fn: Transform<T, U>): Functor<U>;
  }

  /**
   * Declare something as a monad.
   */
  export interface Monad<T> extends Functor<T> {
    flatMap<U>(fn: Transform<T, Monad<U>>): Monad<U>;
  };
}
