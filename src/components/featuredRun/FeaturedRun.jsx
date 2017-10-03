/*eslint-disable no-unused-vars*/
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
/*eslint-enable no-unused-vars*/

function die(sides) {
  return Math.floor(Math.random() * sides) + 1 ;
}

function randomType(selected) {
  switch (selected) {
  case 1:
    return 'Featured Distance Run';
  case 2:
    return 'Featured Speed Run';
  case 3:
    return 'Featured Casual Run';
  case 4:
    return 'Featured Race';
  }
}

export default (props) => {
  console.log('Featured run events...', props.events); // TODO:
  return (
    <Jumbotron>
      <h1>{randomType(die(4))}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ex, imperdiet non pulvinar sit amet, finibus non justo. Ut et rutrum quam. Sed dignissim arcu bibendum tortor lobortis ultrices.</p>
    </Jumbotron>
  );
};
