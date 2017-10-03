import React from 'react';
import RunRow from './RunRow.jsx';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import moment from 'moment';

const Samples = {
  minimal: {
    "@id": "_:n1",
    "@type": "Run"
  },
  sample1: {
    "@id": "_:n1",
    "@type": "Run",
    "date": moment().format(),
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
    <RunRow event={Samples.sample1} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Minimal event should match snapshot.', () => {

  const component = renderer.create(
    <RunRow event={Samples.minimal} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Minimal event should contain expected default values', () => {

  const row = shallow(
    <RunRow event={Samples.minimal} />
  );

  const classes = ['data-date', 'data-category', 'data-distance', 'data-duration', 'data-notes'];

  classes.forEach(className => {
    const ele = row.find(`.${className} > .value`);
    expect(ele.length).toBe(1);
    expect(ele.text()).toBe('-');
  });
});
