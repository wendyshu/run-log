import React from 'react';
import ActivityRunRow from './ActivityRunRow.jsx';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

const Samples = {
  minimal: {
    "@id": "_:n1",
    "@type": "Run"
  },
  sample1: {
    "@id": "_:n1",
    "@type": "Run",
    "date": "2017-09-10",
    "category": "casual",
    "distance": 5.00,
    "duration": "PT50M00S",
    "notes": "Just a test."
  }
};

//
// To update snaphot: $ jest --updateSnapshot
//
test('Sample event with all fields defined should match snapshot', () => {

  const component = renderer.create(
    <ActivityRunRow event={Samples.sample1} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Minimal event should match snapshot.', () => {

  const component = renderer.create(
    <ActivityRunRow event={Samples.minimal} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Minimal event should contain expected default values', () => {

  const row = shallow(
    <ActivityRunRow event={Samples.minimal} />
  );

  const classes = ['data-date', 'data-category', 'data-distance', 'data-duration', 'data-notes'];

  classes.forEach(className => {
    const ele = row.find(`.${className} > .value`);
    expect(ele.length).toBe(1);
    expect(ele.text()).toBe('-');
  });
});
