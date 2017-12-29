import moment from 'moment';

//  https://stackoverflow.com/a/41412055
declare module 'moment' {
  interface Duration {
    format: (template?: string) => string;
  }
}
