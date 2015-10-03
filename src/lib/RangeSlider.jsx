import React from 'react';
import ReactMixin from 'react-mixin';
import EventMixin from 'react-as-event-mixin';
import Draggable from 'react-as-dnd';

import {
  getPixPerStep,
  getOffsetByValue,
  getValueByOffset,
  getSteppedValue,
  getDefault,
  merge
} from './util';




class NumberSlider extends React.Component {
  static displayName = 'NumberSlider'
  static propTypes = {
    className: React.PropTypes.string,
    defaultValue: React.PropTypes.arrayOf(React.PropTypes.number),
    max: React.PropTypes.number,
    min: React.PropTypes.number,
		name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    step: React.PropTypes.number,
    value: React.PropTypes.arrayOf(React.PropTypes.number),
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
    defaultValue: []
  }
  constructor(props) {
    super();
    let [left, right] = props.value || props.defaultValue;
    this.state = {
      left: getSteppedValue(getDefault(left, props.min), props.max, props.min, props.step),
      right: getSteppedValue(getDefault(right, props.max), props.max, props.min, props.step)
    };
    this._handleLeftDragMove = this._handleLeftDragMove.bind(this);
    this._handleRightDragMove = this._handleRightDragMove.bind(this);
  }
  componentWillReceiveProps(props) {
    let min = getDefault(props.min, this.props.min);
    let max = getDefault(props.max, this.props.max);
    let step = getDefault(props.step, this.props.step);
    if(Array.isArray(props.value)) {
      let [left, right] = props.value;
      this.setState({
        left: getSteppedValue(getDefault(left, this.state.left, min), max, min, step),
        right: getSteppedValue(getDefault(right, this.state.right, max), max, min, step),
      });
    }
  }
  _handleLeftDragMove(e) {
		let {
      width, max, min, step
    } = this.props;
    let left = getValueByOffset(e.dragShowX, width, max, min, step);
    if(left === this.state.left) return;
    this.setState({
      left
    });
    this.fireAll('change', [left, this.state.right]);
  }
  _handleRightDragMove(e) {
		let {
      width, max, min, step
    } = this.props;
    let right = getValueByOffset(e.dragShowX, width, max, min, step);
    if(right === this.state.right) return;
    this.setState({
      right
    });
    this.fireAll('change', [this.state.left, right]);
  }
  render() {
		let {
			width,
			max,
			min,
			step
		} = this.props;
    let {
      left,
      right
    } = this.state;
    let leftOffset = getOffsetByValue(left, width, max, min, step);
    let rightOffset = getOffsetByValue(right, width, max, min, step);
    let leftDraggable = left !== min;
    let rightDraggable = right !== getSteppedValue(right, max, min, step)
    let pixPerStep = getPixPerStep(width, max, min, step);
    let commonDragConfig = {
      axis: 'x',
      shadow: false,
      grid: {
        x: pixPerStep,
        y: 0
      }
    };
    let leftDragConfig = merge({}, commonDragConfig, {
      start: {
        x: leftOffset,
        y: 4
      },
      limit: {
        x: [0, rightOffset]
      },
      zIndex: (leftDraggable && !rightDraggable) ? 1: 0,
      onDragMove: this._handleLeftDragMove,
    });
    let rightDragConfig = merge({}, commonDragConfig, {
      start: {
        x: rightOffset,
        y: 4
      },
      limit: {
        x: [leftOffset, width]
      },
      zIndex: (!leftDraggable && rightDraggable) ? 1: 0,
      onDragMove: this._handleRightDragMove,
    });
    return (
      <div className={this.props.className} style={{width: this.props.width}}>
				{ this.props.name && <input name={this.props.name} type="hidden" value={[left, right]}></input>}
        <div className="react-as-range-slider-line">
          <div className="react-as-range-slider-line-range" style={{width: rightOffset - leftOffset, marginLeft: leftOffset}}></div>
        </div>
        <Draggable {...leftDragConfig}>
          <span className="react-as-range-slider-btn"></span>
        </Draggable>
        <Draggable {...rightDragConfig}>
          <span className="react-as-range-slider-btn" ></span>
        </Draggable>
      </div>
    );
  }
}

ReactMixin(NumberSlider.prototype, EventMixin);

export default NumberSlider;
