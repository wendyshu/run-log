import { loadEvents, LOAD_EVENTS, RECEIVE_EVENTS } from './actions';

test('loadEvents should fire two actions', (done) => {
  expect.assertions(2);

  const dispatch = (event) => {
    switch (event.type) {
    case LOAD_EVENTS:
      return;
    case RECEIVE_EVENTS:
      expect(event.payload).toBeDefined();
      expect(event.receivedAt).toBeDefined();
      done();
      return;
    default:
      // Jest doesn't have fail...
      expect([LOAD_EVENTS, RECEIVE_EVENTS]).toContain(event.type);
    }
  };

  loadEvents()(dispatch);
});
