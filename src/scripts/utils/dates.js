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
  return moment.duration(duration).format('hh[h] mm[m] ss[s]');
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
export function secondsToStopwatch(secs) {
  return moment.duration(secs, 'seconds').format('m:s');
}
