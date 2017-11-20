/*
 * The option type.
 */
export interface Option<A> extends Fp.Monad<A> {
  readonly empty: boolean;

  // Option
  get(): A;
  orElse(b: A): A;

  // Functor
  map<B>(fn: Fp.Transform<A, B>): Option<B>;

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
export interface None<A> extends Option<A> {}

class NoneImpl<A> implements None<A> {
  public readonly empty: boolean;

  constructor() {
    this.empty = true;
  }

  public get(): A {
    throw new Error('Cannot call None.get');
  }

  public orElse(b: A): A {
    return b;
  }

  public map<B>(fn: Fp.Transform<A, B>): Option<B> {
    return None();
  }

  public flatMap<B>(fn: Fp.Transform<A, Option<B>>): Option<B> {
    return None();
  }
}

/*
 * Some impl.
 */
export interface Some<A> extends Option<A> {}

class SomeImpl<A> implements Some<A> {

  public readonly empty: boolean;
  private a: A;

  constructor(a: A) {
    this.a = a;
    this.empty = false;
  }

  public get(): A {
    return this.a;
  }

  public orElse(b: A): A {
    return this.a;
  }

  public map<B>(fn: Fp.Transform<A, B>): Option<B> {
    return Option(fn(this.a));
  }

  public flatMap<B>(fn: Fp.Transform<A, Option<B>>): Option<B> {
    return fn(this.a);
  }
}
