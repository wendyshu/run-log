import moment from 'moment';

export function formatDate(date: Date) {
  return moment(date, 'YYYYMMDD').calendar(undefined, {
    lastDay: '[Yesterday]',
    lastWeek: 'dddd',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    sameDay: '[Today]',
    sameElse: 'L',
  });
}

/**
 * E.g., "PT2M35S" -> "2m 35s"
 */
export function formatDuration(duration: string) {
  return moment.duration(duration).format('h[h] m[m] s[s]');
}

/**
 * "PT2M35S" -> {
 *   'hours': 0,
 *   'minutes': 2,
 *   'seconds': 35
 * }
 */
export function durationToComponents(duration: string) {
  const dur = moment.duration(duration);
  return {
    hours: dur.hours(),
    minutes: dur.minutes(),
    seconds: dur.seconds(),
  };
}

/**
 * Create ISO-8601 duration string.
 */
export function toDuration(hours?: number, minutes?: number, seconds?: number) {
  if (hours || minutes || seconds) {
    return `PT${hours ? hours : '0'}H${minutes ? minutes : '0'}M${
      seconds ? seconds : '0'
    }S`;
  } else {
    return undefined;
  }
}

/**
 * E.g., "PT2M35S" -> 155
 */
export function durationToSeconds(duration: string) {
  return moment.duration(duration).asSeconds();
}

/**
 * E.g, 155 -> "2:35"
 */
export function secondsToMinuteMiles(secs: number) {
  return moment.duration(secs, 'seconds').format('m[m] s[s]');
}

/**
 * Helper method for adding and subtracting moments.
 */
function momentMathArgs(units: number, duration: string) {
  const args: any = {};
  args[units] = duration;
  return args;
}

/*
 * Given moment, subtracts time.
 *
 * E.g., fromMoment = moment("2017-01-21"), units = 'Week', duration = 2,
 *   returns moment("2017-01-07").
 */
export function subtractMoment(fromMoment: any, units: number, duration: string) {
  const args = momentMathArgs(units, duration);
  return fromMoment.clone().subtract(args);
}

/*
 * Given moment, adds time.
 *
 * E.g., fromMoment = moment("2017-01-07"), units = 'Week', duration = 2,
 *   returns moment("2017-01-21").
 */
export function addMoment(fromMoment: any, units: number, duration: string) {
  const args = momentMathArgs(units, duration);
  return fromMoment.clone().add(args);
}
