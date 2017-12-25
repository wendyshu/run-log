import { randomUuid } from './uuid';

test('generate valid uuid', () => {
  const uuid = randomUuid();
  const match = uuid.match(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
  );
  expect(match.length).toBe(1);
});
