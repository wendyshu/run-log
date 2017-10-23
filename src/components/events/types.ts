export namespace Events {

  interface IBaseEvent {
    readonly '@id': string;
    readonly '@type': string;
    date: string;
    notes: string;
    favorite: boolean;
  }

  abstract class BaseWithoutRun implements IBaseEvent {

    public '@id': string;
    public '@type': string;
    public date: string;
    public favorite: boolean;
    public notes: string;

    constructor(id: string, type: string, date: string,  notes: string) {
      this['@id'] = id;
      this['@type'] = type;
      this.date = date;
      this.notes = notes;
      this.favorite = false;
    }
  }

  export class ChangeShoes extends BaseWithoutRun {
    constructor(id: string, date: string, notes: string) {
      super(id, date, notes, 'ChangeShoes');
    }
  }

  export class CrossTrain extends BaseWithoutRun {
    constructor(id: string, date: string, notes: string) {
      super(date, id, notes, 'CrossTrain');
    }
  }

  abstract class BaseWithRun implements IBaseEvent {

    public '@id': string;
    public '@type': string;
    public category: string; // TODO: enum
    public date: string;
    public favorite: boolean;
    public notes: string;
    public distance?: number;
    public duration?: string;

    constructor(id: string, type: string, category: string, date: string, notes: string, distance?: number, duration?: string) {
      this['@id'] = id;
      this['@type'] = type;
      this.category = category;
      this.date = date;
      this.favorite = false;
      this.notes = notes;
      this.distance = distance;
      this.duration = duration;
    }
  }

  export class Run extends BaseWithRun {
    constructor(id: string, category: string, date: string, notes: string, distance?: number, duration?: string) {
      super(id, 'Run', category, date, notes, distance, duration);
    }
  }

  export class RunCrossTrain extends BaseWithRun {
    constructor(id: string, category: string, date: string, notes: string, distance?: number, duration?: string) {
      super(id, 'Run+CrossTrain', category, date, notes, distance, duration);
    }
  }

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
