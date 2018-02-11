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
  }

  export interface ChangeShoes extends IBaseEvent {}

  export interface CrossTrain extends IBaseEvent {}

  export interface SteadyStateRun {
    '@type': 'SteadyStateRun';
    category: string;
    distance?: number;
    duration?: string;
  }

  export interface IntervalsRun {
    '@type': 'Intervals'
    category: string;
    count: number;
    intervalDuration?: string;
    intervalSpeed?: number;
    restDuration?: string;
    totalDistance?: number;
    [key: string]: string | number | undefined;
  }

  /**
   * Subset of events dealing with steady state running.
   */
  export interface WithSteadyStateRunning extends IBaseEvent {
    run: SteadyStateRun;
  }

  /**
   * Subset of events dealing with interval running.
   */
  export interface WithIntervals extends IBaseEvent {
    run: IntervalsRun;
  }

  /**
   * Subset of events not dealing with running.
   */
  export type WithoutRunning = ChangeShoes | CrossTrain;

  /**
   * All events.
   */
  export type Any =  Run | RunCrossTrain | ChangeShoes | CrossTrain;
}
