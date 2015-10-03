import React from 'react';
import ReactMixin from 'react-mixin';
import EventMixin from 'react-as-event-mixin';
import Draggable from 'react-as-dnd';

import {
  getPixPerStep,
  getOffsetByValue,
  getValueByOffset,
	getSteppedValue,
  getDefault
} from './util';

class NumberSlider extends React.Component {
  static displayName = 'NumberSlider'
  static propTypes = {
    className: React.PropTypes.string,
    defaultValue: React.PropTypes.number,
    max: React.PropTypes.number,
    min: React.PropTypes.number,
		name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    step: React.PropTypes.number,
    value: React.PropTypes.number,
    width: React.PropTypes.number
  }
  static defaultProps = {
    className: 'react-as-range-slider',
    min: 0,
    max: 100,
    step: 1,
    width: 300,
    onChange: () => {},
		name: null,
    value: null,
    defaultValue: null
  }
  constructor(props) {
    super();
    this.state = {
      value: getSteppedValue(getDefault(props.value, props.defaultValue, props.min), props.max, props.min, props.step),
      dragging: false
    };
    this._handleDragMove = this._handleDragMove.bind(this);
  }
  componentWillReceiveProps(props) {
    let min = getDefault(props.min, this.props.min);
    let max = getDefault(props.max, this.props.max);
    let step = getDefault(props.step, this.props.step);
    if('value' in props)
      this.setState({
        value: getSteppedValue(getDefault(props.value, this.state.value, min), max, min, step)
      });
  }
  _handleDragMove(e) {
		let {
			width,
			max,
			min,
			step
		} = this.props;
    let value = getValueByOffset(e.dragShowX, width, max, min, step);
		if(value === this.state.value) return;
    this.setState({
      value
    });
		this.fireAll('change', value);
  }
  render() {
		let {
			width,
			max,
			min,
			step
		} = this.props;
    let offset = getOffsetByValue(this.state.value, width, max, min, step);
    let config = {
      start: {
        x: offset,
        y: 4
      },
      grid: {
        x: getPixPerStep(width, max, min, step),
        y: 0
      },
			axis: 'x',
			limit: {
				x: [0, width]
			},
      onDragMove: this._handleDragMove
    };
    return (
      <div className={this.props.className} style={{width: this.props.width}}>
				{ this.props.name && <input name={this.props.name} type="hidden" value={this.state.value}></input>}
        <div className="react-as-range-slider-line">
          <div className="react-as-range-slider-line-range" style={{width: offset}}></div>
        </div>
        <Draggable axis="x" limit="parent" shadow={false} {...config}>
          <span className="react-as-range-slider-btn"></span>
        </Draggable>
      </div>
    );
  }
}

ReactMixin(NumberSlider.prototype, EventMixin);

export default NumberSlider;
