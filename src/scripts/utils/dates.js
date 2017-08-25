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

export function formatDuration(duration) {
  return moment.duration(duration).format('hh[h] mm[m] ss[s]');
}

export function durationToSeconds(duration) {
  return moment.duration(duration).asSeconds();
}
