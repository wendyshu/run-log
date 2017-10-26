import moment from 'moment';
import 'moment-duration-format';

//
// TODO: can I change this to type declaration instead?
//

//
// Encapsulation a moment-duration-format workaround:
//  https://stackoverflow.com/a/41412055
//
interface IDuration extends moment.Duration {
  format: (template?: string) => string;
}

export function durationFormat(durationOpts: any[], format: string) {
  const d = moment.duration(...durationOpts) as IDuration;
  return d.format(format);
}
