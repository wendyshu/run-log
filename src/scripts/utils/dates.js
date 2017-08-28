import moment from 'moment';
import 'moment-duration-format';

export function formatDate(date) {
  return moment(date, 'YYYYMMDD').calendar(null, {
    lastDay : '[Yesterday]',
    sameDay : '[Today]',
    nextDay : '[Tomorrow]',
    lastWeek : '[Last] dddd',
    nextWeek : 'dddd',
    sameElse : 'L'
  });
}

/**
 * E.g., "PT2M35S" -> "2m 35s"
 */
export function formatDuration(duration) {
  return moment.duration(duration).format('h[h] m[m] s[s]');
}

/**
 * E.g., "PT2M35S" -> 155
 */
export function durationToSeconds(duration) {
  return moment.duration(duration).asSeconds();
}

/**
 * E.g, 155 -> "2:35"
 */
export function secondsToMinuteMiles(secs) {
  // return moment.duration(secs, 'seconds').format('m:s');
  return moment.duration(secs, 'seconds').format('m[m] s[s]');
}
