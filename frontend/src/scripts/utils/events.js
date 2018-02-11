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
