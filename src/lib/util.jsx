function getTotalSteps(max, min, step) {
	return (max - min) / step;
}

function getPixPerStep(width, max, min, step) {
	let pixPerStep = width / getTotalSteps(max, min, step);
	return pixPerStep;
}

function getOffsetByValue(value, width, max, min, step) {
	let curStep = Math.round((value - min) / (max - min) * getTotalSteps(max, min, step));
	let pixPerStep = getPixPerStep(width, max, min, step);
	return curStep * pixPerStep;
}

function getValueByOffset(offset, width, max, min, step) {
	let pixPerStep = getPixPerStep(width, max, min, step);
	let steps = Math.round(offset / pixPerStep);
	let value = steps * step + min;
  return (value > max) ? value - step : value;
}

function getSteppedValue(value, max, min, step) {
  if((value - min) % step !== 0)
    value = Math.floor((value - min) / step) * step;
  return value;
}

function merge(dist, ...src) {
  src.forEach(s => {
    for(let key in s)
      dist[key] = s[key];
  });
  return dist;
}

function getDefault(...value) {
  for (let i = 0, m = value.length; i < m; i++)
    if(typeof value[i] === 'number')
      return value[i];
  return null;
}

export default {
  getTotalSteps,
  getPixPerStep,
  getOffsetByValue,
  getValueByOffset,
  getSteppedValue,
	getDefault,
  merge
};
