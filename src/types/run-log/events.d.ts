/**
 * Valid values for event's json-ld '@type' property
 */
declare namespace EventTypes {

  export const Run = 'Run',
    CrossTrain = 'CrossTrain',
    RunCrossTrain = 'Run+CrossTrain',
    ChangeShoes = 'ChangeShoes';
    
  export type Any = EventTypes.Run | EventTypes.CrossTrain | EventTypes.RunCrossTrain | EventTypes.ChangeShoes;
}

declare namespace Events {

  interface IBaseEvent {
    '@id': string;
    '@type': EventTypes.Any;
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
