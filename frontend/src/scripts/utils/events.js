import { durationToSeconds } from './dates';
import { add } from './math';

/**
 * Returns distance for event, defaulting to zero if none specified.
 */
export function distance(event) {
  if (event.run && event.run.distance) {
    return event.run.distance;
  } else if (
    event.run && event.run.count && event.run.intervalDuration && event.run.intervalSpeed
  ) {
    const secs = durationToSeconds(event.run.intervalDuration);
    return event.run.count * secs * event.run.intervalSpeed / 3600;
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

/**
 * Returns the pace for event in seconds per mile. If pace not available, returns 0.
 */
export function pace(event) {
  if (event.run && event.run.distance && event.run.duration) {
    return durationToSeconds(event.run.duration) / event.run.distance;
  } else if (event.run && event.run.intervalSpeed) {
    return 3600 / event.run.intervalSpeed;
  } else {
    return 0;
  }
}

/**
 * Returns the seconds for an event.
 */
export function seconds(event) {
  if (event.run && event.run.duration) {
    return durationToSeconds(event.run.duration);
  } else if (event.run && event.run.count && event.run.intervalDuration) {
    const secs = durationToSeconds(event.run.intervalDuration);
    return event.run.count * secs;
  } else {
    return 0;
  }
}

/**
 * Returns the average pace for a bunch of events.
 */
export function averagePace(events) {
  return events.map(seconds).reduce(add, 0) / totalDistance(events);
}
