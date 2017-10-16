export function get(obj, prop, defaultVal) {
  return obj && obj[prop] ? obj[prop] : defaultVal;
}
