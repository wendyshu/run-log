export namespace Events {

  interface IBaseEvent {
    readonly id: string;
    readonly type: string;
    date: string;
    notes?: string;
    favorite: boolean;
  }

  abstract class BaseWithoutRun implements IBaseEvent {
    public id: string;
    public type: string;
    public date: string;
    public notes?: string;
    public favorite: boolean;
    constructor(id: string, type: string, date: string, notes?: string) {
      this.id = id;
      this.type = type;
      this.date = date;
      this.notes = notes;
    }
  }

  export class ChangeShoes extends BaseWithoutRun {
    public id: string;
    public type: string;
    public date: string;
    public notes?: string;
    public favorite: boolean;
    constructor(id: string, date: string, notes?: string) {
      super(id, 'ChangeShoes', date, notes);
    }
  }

  export class CrossTrain extends BaseWithoutRun {
    public id: string;
    public type: string;
    public date: string;
    public notes?: string;
    public favorite: boolean;
    constructor(id: string, date: string, notes?: string) {
      super(id, 'CrossTrain', date, notes);
    }
  }
}
