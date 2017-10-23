/**
 * Type-safe wrapper for Object.assign.
 */
export function objAssign<O, T>(base: O, obj1: T, obj2: T): T {
  return Object.assign(base, obj1, obj2);
}

/**
 * Function that transforms from one value to another.
 */
export type Transformer<T, U> = (e: T) => U;
