import { Transformer } from '../../scripts/utils/types'; // TODO: no relative paths

// TODO: move to types, make a monad
type MonadTransformer<A,B> = Transformer<A,Option<B>>;

/*
 *
 */
export interface Option<A> {
  readonly empty: boolean;
  get(): A;
  orElse(b: A): A;
  map<B>(fn: Transformer<A,B>): Option<B>;
  flatMap<B>(fn: MonadTransformer<A,B>): Option<B>;
}

/*
 *
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
 *
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

  map<B>(fn: Transformer<A,B>): Option<B> {
    return None<B>();
  }

  flatMap<B>(fn: MonadTransformer<A,B>): Option<B> {
    return None<B>();
  }
}

/*
 *
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

  map<B>(fn: Transformer<A,B>): Option<B> {
    return Option(fn(this.a));
  }

  flatMap<B>(fn: MonadTransformer<A,B>): Option<B> {
    return fn(this.a);
  }
}
