react-as-range-slider
===

一个React实现的拖动数字输入组件

[DEMO](lingyucoder.github.io/react-as-range-slider/demo/demo.html)

## 安装

```bash
$ npm install --save react-as-range-slider
```

## 使用

```javascript
import React from 'react';
import {
  NumberSlider,
  RangeSlider
} from 'react-as-range-slider';

React.render(<NumberSlider/>, document.querySelector('#normal'));

React.render(<RangeSlider/>, document.querySelector('#range'));
```

更多使用示例和配置详情见[DEMO](lingyucoder.github.io/react-as-range-slider/demo/demo.html)

## 配置

### NumberSlider

| 配置       | 简介  | 类型 | 默认值 |
| :-------- | :-- | :--:| :--: | :--: |
| className | 根元素样式 | String | `'react-as-range-slider'` |
| max | 最大值 | Number | `100` |
| min | 最小值 | Number | `0` |
| name | 表单中的字段名称 | String | `null` |
| onChange | 值变化时回调 | `Function(Number value)` | `noop` |
| step | 每步变化的值 | Number | `1` |
| value | 初始值 | Number | `{min}` |
| width | 元素的宽度 | Number | `300` |

### RangeSlider

| 配置       | 简介  | 类型 | 默认值 |
| :-------- | :-- | :--:| :--: | :--: |
| className | 根元素样式 | String | `'react-as-range-slider'` |
| max | 最大值 | Number | `100` |
| min | 最小值 | Number | `0` |
| name | 表单中的字段名称 | String | `null` |
| onChange | 值变化时回调 | `Function([Number left, Number right])` | `noop` |
| step | 每步变化的值 | Number | `1` |
| value | 初始范围 | `[Number left, Number right]` | `[{min}, {max}]` |
| width | 元素的宽度 | Number | `300` |

## 开发

```bash
$ npm start
$ open http://127.0.0.1:3000/demo/demo.html
```

## 协议
The MIT License (MIT)

Copyright (c) 2015 天镶

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
