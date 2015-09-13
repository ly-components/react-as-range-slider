import React from 'react';
import {
  NumberSlider, RangeSlider
} from '../src/index';

React.render(<NumberSlider onChange={val => document.querySelector('#normal-result').textContent = val}/>, document.querySelector('#normal'));

React.render(<NumberSlider max={200} min={100} onChange={val => document.querySelector('#normal-limit-result').textContent = val}/>, document.querySelector('#normal-limit'));

React.render(<NumberSlider max={200} min={100} onChange={val => document.querySelector('#normal-step-result').textContent = val} step={10}/>, document.querySelector('#normal-step'));

React.render(<NumberSlider max={200} min={100} onChange={val => document.querySelector('#normal-width-result').textContent = val} step={10} width={600}/>, document.querySelector('#normal-width'));

React.render(<NumberSlider max={200} min={100} onChange={val => document.querySelector('#normal-value-result').textContent = val} step={10} value={150} width={600}/>, document.querySelector('#normal-value'));

React.render(<RangeSlider onChange={val => document.querySelector('#range-result').textContent = `${val[0]}, ${val[1]}`}/>, document.querySelector('#range'));

React.render(<RangeSlider max={200} min={100} onChange={val => document.querySelector('#range-limit-result').textContent = `${val[0]}, ${val[1]}`}/>, document.querySelector('#range-limit'));

React.render(<RangeSlider max={200} min={100} onChange={val => document.querySelector('#range-step-result').textContent = `${val[0]}, ${val[1]}`} step={10}/>, document.querySelector('#range-step'));

React.render(<RangeSlider max={200} min={100} onChange={val => document.querySelector('#range-width-result').textContent = `${val[0]}, ${val[1]}`} step={10} width={600}/>, document.querySelector('#range-width'));

React.render(<RangeSlider value={[120, 180]} max={200} min={100} onChange={val => document.querySelector('#range-value-result').textContent = `${val[0]}, ${val[1]}`} right={180} step={10} width={600}/>, document.querySelector('#range-value'));

function showFormData(e) {
  e.stopPropagation();
  e.preventDefault();
  let target = e.target;
  alert(`
    Number value: ${target.number.value}
    Range value: ${target.range.value}
  `);
}

React.render((
  <form onSubmit={showFormData}>
    <p>
      Number Slider: <NumberSlider name="number" min={100} max={200} value={150}/>
    </p>
    <p>
      Range Slider: <RangeSlider name="range" min={100} max={200} value={[120, 180]}/>
    </p>
    <p>
      <button type="submit">Submit</button>
    </p>
  </form>
), document.querySelector('#form'));
