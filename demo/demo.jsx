import React from 'react';
import {
  NumberSlider, RangeSlider
} from '../src/index';

React.render(<NumberSlider/>, document.getElementById('normal'));

React.render(<RangeSlider onChange={(left,
  right) => console.log(left, right)} step={17}/>, document.getElementById('range'));
