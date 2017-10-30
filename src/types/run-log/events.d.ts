declare namespace Events {

  interface IBaseEvent {
    '@id': string;
    '@type': string;
    date: string;
    notes: string;
    favorite: boolean;
  }

  export interface ChangeShoes extends IBaseEvent {}

  export interface CrossTrain extends IBaseEvent {}

  interface BaseWithRun extends IBaseEvent {
    category: string; // TODO: enum
    distance?: number;
    duration?: string;
  }

  export interface Run extends BaseWithRun {}

  export interface RunCrossTrain extends BaseWithRun {}

  /**
   * Subset of events only dealing with running.
   */
  export type WithRunning = Run | RunCrossTrain;

  /**
   * Subset of events not dealing with running.
   */
  export type WithoutRunning = ChangeShoes | CrossTrain;

  /**
   * All events.
   */
  export type Any = ChangeShoes | CrossTrain | Run | RunCrossTrain;
}
