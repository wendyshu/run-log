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

    public '@id': string;
    public '@type': string;
    public date: string;
    public favorite: boolean;
    public notes: string;

    constructor(id: string, date: string, notes: string) {
      super(id, date, notes, 'ChangeShoes');
    }
  }

  export class CrossTrain extends BaseWithoutRun {

    public '@id': string;
    public '@type': string;
    public date: string;
    public favorite: boolean;
    public notes: string;

    constructor(id: string, date: string, notes: string) {
      super(date, id, notes, 'CrossTrain');
    }
  }

  abstract class BaseWithRun implements IBaseEvent {

    public '@id': string;
    public '@type': string;
    public category: string;
    public date: string;
    public distance: number;
    public duration: string;
    public favorite: boolean;
    public notes: string;

    constructor(id: string, type: string, category: string, date: string, distance: number, duration: string, notes: string) {
      this['@id'] = id;
      this['@type'] = type;
      this.category = category;
      this.date = date;
      this.distance = distance;
      this.duration = duration;
      this.favorite = false;
      this.notes = notes;
    }
  }

  export class Run extends BaseWithRun {

    public '@id': string;
    public '@type': string;
    public category: string;
    public date: string;
    public distance: number;
    public duration: string;
    public favorite: boolean;
    public notes: string;

    constructor(id: string, category: string, date: string, distance: number, duration: string, notes: string) {
      super(id, 'Run', category, date, distance, duration, notes);
    }
  }

  export class RunCrossTrain extends BaseWithRun {

    public '@id': string;
    public '@type': string;
    public category: string;
    public date: string;
    public distance: number;
    public duration: string;
    public favorite: boolean;
    public type: string;

    constructor(id: string, category: string, date: string, distance: number, duration: string, notes: string) {
      super(id, 'Run+CrossTrain', category, date, distance, duration, notes);
    }
  }

  export type Any = ChangeShoes | CrossTrain | Run | RunCrossTrain;
}
