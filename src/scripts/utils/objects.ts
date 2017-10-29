/**
 * Type-safe and type-opinionated version of Object.assign.
 */
export function objAssign<O, T>(base: O, obj1: T, obj2: T): T {
  return Object.assign(base, obj1, obj2);
}
