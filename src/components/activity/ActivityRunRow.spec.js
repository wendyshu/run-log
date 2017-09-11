import React from 'react';
import ActivityRunRow from './ActivityRunRow.jsx';
import renderer from 'react-test-renderer';

//
// To update snaphot: $ jest --updateSnapshot
//
test('Sample event with all fields defined should match snapshot', () => {
  const event = {
    "@id": "_:n1",
    "@type": "Run",
    "date": "2017-09-10",
    "category": "casual",
    "distance": 5.00,
    "duration": "PT50M00S",
    "notes": "Just a test."
  };
  const component = renderer.create(
    <ActivityRunRow event={event} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Sample event with all fields missing should match snapshot and have correct default values', () => {
  const event = {
    "@id": "_:n1",
    "@type": "Run"
  };
  const component = renderer.create(
    <ActivityRunRow event={event} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const classes = ['data-date', 'data-category', 'data-distance', 'data-duration', 'data-notes'];

  classes.forEach(className => {

    const matches = tree.children
      .filter(e => e.props.className === className);

    expect(matches.length).toBe(1);

    const value = matches[0].children
      .filter(e => typeof e === "object")
      .filter(e => e.props.className == 'value')
      .map(e => e.children[0]);

    expect(value.length).toBe(1);
    expect(value[0]).toBe('-');
  });

});
