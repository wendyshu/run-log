import { loadEvents } from './actions';

test('loadEvents should fire two actions', (done) => {
  expect.assertions(2);

  const dispatch = (event) => {
    switch (event.type) {
    case 'SEND_GET_EVENTS':
      return;
    case 'RECEIVE_GET_EVENTS':
      expect(event.payload).toBeDefined();
      expect(event.receivedAt).toBeDefined();
      done();
      return;
    default:
      // Jest doesn't have fail
      expect(['SEND_GET_EVENTS', 'RECEIVE_GET_EVENTS']).toContain(event.type);
    }
  };

  loadEvents()(dispatch);
});
