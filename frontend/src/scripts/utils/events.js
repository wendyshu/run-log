import { add } from './math';

/**
 * Returns distance for event, defaulting to zero if none specified.
 */
export function distance(event) {
  if (event.run && event.run.distance) {
    return event.run.distance;
  } else if (event.run && event.run.totalDistance) {
    return event.run.totalDistance;
  } else {
    return 0;
  }
}

/**
 * Returns combined distance for events, defaulting to zero for events without
 *   distances specified.
 */
export function totalDistance(events) {
  return events.map(distance).reduce(add, 0);
}
