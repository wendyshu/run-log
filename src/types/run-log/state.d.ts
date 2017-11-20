/**
 * All type information for application state.
 */
declare namespace State {

  export interface Modals {
    public editEvent?: Events.Any;
    public ui: { showModal?: ModalTypes.Any };
  }
}
