/*
 * The option type.
 */
export interface Option<A> extends Fp.Monad<A> {
  readonly empty: boolean;

  // Option
  get(): A;
  orElse(b: A): A;

  // Functor
  map<B>(fn: Fp.Transform<A,B>): Option<B>;

  // Monad
  flatMap<B>(fn: Fp.Transform<A, Option<B>>): Option<B>;
}

/*
 * Convenient constructors for Option, None, Some.
 */
export function Option<A>(a?: A): Option<A> {
  if (a === undefined || a === null) {
    return None();
  } else {
    return Some(a);
  }
}

export function None<A>(): None<A> {
  return new NoneImpl<A>();
}

export function Some<A>(a: A): Some<A> {
  return new SomeImpl(a);
}

/*
 * None impl.
 */
export interface None<A> extends Option<A> {};

export class NoneImpl<A> implements None<A> {
  readonly empty: boolean;

  constructor() {
    this.empty = true;
  }

  get(): A {
    throw "Cannot call None.get";
  }

  orElse(b: A): A {
    return b;
  }

  map<B>(fn: Fp.Transform<A,B>): Option<B> {
    return None();
  }

  flatMap<B>(fn: Fp.Transform<A, Option<B>>): Option<B> {
    return None();
  }
}

/*
 * Some impl.
 */
export interface Some<A> extends Option<A> {};

export class SomeImpl<A> implements Some<A> {
  a:A;
  readonly empty: boolean;

  constructor(a:A) {
    this.a = a;
    this.empty = false;
  }

  get(): A {
    return this.a;
  }

  orElse(b: A): A {
    return this.a;
  }

  map<B>(fn: Fp.Transform<A,B>): Option<B> {
    return Option(fn(this.a));
  }

  flatMap<B>(fn: Fp.Transform<A, Option<B>>): Option<B> {
    return fn(this.a);
  }
}
