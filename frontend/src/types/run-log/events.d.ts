/**
 * Valid values for event's json-ld '@type' property
 */
declare namespace EventTypes {
  export type Any = 'Run' | 'CrossTrain' | 'Run+CrossTrain' | 'ChangeShoes';
}

declare namespace Events {
  interface IBaseEvent {
    '@id': string;
    '@type': EventTypes.Any;
    date: string;
    notes: string;
    favorite: boolean;
    run?: SteadyStateRun; // TODO: move to BaseWithRun
  }

  export interface ChangeShoes extends IBaseEvent {}

  export interface CrossTrain extends IBaseEvent {}

  interface BaseWithRun extends IBaseEvent {

  }

  export interface SteadyStateRun {
    category: string;
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
