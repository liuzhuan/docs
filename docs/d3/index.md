---
title: D3.js 使用指南
---

# D3.js 使用指南

[D3.js](https://d3js.org) 表示 Data-Driven Documents，即“数据驱动的文档”。它的参考文档在[这里](https://github.com/d3/d3/wiki)。

## 安装

可以直接在 HTML 页面中引入 `d3.js` 库

```html
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
```

```js
const dataset = [5, 10, 15, 20, 25]

d3.select('body')
  .selectAll('div') // 选择待绑定数据的元素
  .data(dataset) // 绑定数据
  .enter() // 魔法方法
  .append('div')
  .attr('class', 'bar')
  .style('height', (d) => d * 5 + 'px')
```

也可以使用 npm/pnpm 安装包：

```sh
$ pnpm add d3
```

```js
import * as d3 from 'd3'
d3.select('body').append('p').text('Hello D3!')
```

## 加载数据

d3 提供了 `csv()` 和 `json()` 函数，分别加载 CSV 和 JSON 数据文件。可以传入转换函数，对原始数据进行转换处理。

```js
const result = await d3.csv('./data/foods.csv', (d) => ({
  food: d.FOOD,
  price: parseFloat(d.PRICE),
}))

const json = await d3.json('./package.json')
```

::: details 在线转换工具
可以使用在线转换工具 [Mr. Data Converter](https://shancarter.github.io/mr-data-converter/) 把 CSV 等各种数据格式，转换为 JSON 等其他类型。
:::

## 修改元素属性

使用 `attr()` 修改元素属性，使用 `style()` 修改元素样式。

```js
d3.select('div').attr('class', 'bar').style('color', 'white')
```

可以使用 `classed(clsName, bool)` 增加和删除类名

```js
d3.select('body').append('div').classed('bar', true)
```

## SVG

```js
// 生成 SVG 容器
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', 500)
  .attr('height', 50)

// 创建圆形并绑定数据
const circles = svg.selectAll('circle').data(dataset).enter().append('circle')
// 设定圆形横坐标
circles.attr('cx', (d, i) => i * 50 + 25)
```

## 映射函数 scale

D3 的 scale 是一类映射函数，把输入值域的数值（_input domain_）映射到输出范围（_output range_）。输出范围通常以屏幕像素为单位。

```js
// 创建线性 scale
const scale = d3.scaleLinear().domain([100, 500]).range([10, 350])
// 使用线性 scale
scale(100) // => 10
```

为了获得最大值和最小值，可以使用 `d3.max(dataset, accessor)` 和 `d3.min(dataset, accessor)`。

```js
const max = d3.max(dataset, (d) => d[0])
const min = d3.min(dataset, (d) => d[0])
```

除线性 scale 函数外，还有其他类型：

- `scaleSqrt` 平方根性
- `scalePow` 指数性
- `scaleLog` 对数性
- `scaleTime` 时间日期类

### 时间类 scale

d3 使用原生的 `Date` 类，表示日期和时间。要解析时间字符串，可以使用 `d3.timeParse()`：

```js
// 如果解析的字符串为 2022/09/11，即 year/month/date
// 通过指定日期字符串模板，创建日期解析函数
// %Y 表示四位年份 %m 表示月份 %d 表示日期
const parseTime = d3.timeParse('%Y/%m/%d')
parseTime('2022/09/11') // => 返回对应的 Date 实例
```

创建时间类 scale

```js
const xScale = d3
  .scaleTime()
  .domain([d3.min(dataset, (d) => d.Date), d3.max(dataset, (d) => d.Date)])
  .range([padding, w - padding])
```

如果要格式化字符串的现实，使用 `d3.timeFormat()`:

```js
const formatTime = d3.timeFormat('%b %e')
```

## 坐标轴 Axis

坐标轴分为上下左右四种，分别是 `d3.axisTop`, `d3.axisBottom`, `d3.axisLeft`, `d3.axisRight`，区别是刻度线和文字的方向。

使用坐标轴分为两步：

```js
// 第一步，设置坐标轴的缩放参数
const xAxis = d3.axisBottom().scale(xScale)

// 第二步，在 DOM 中绘制 SVG 元素
svg.append('g').call(xAxis)
```

之所以要放在 `g` 群组中，是为了方便统一调整坐标轴的样式。一般建议给坐标轴加上类名：

```js
svg.append('g').attr('class', 'axis').call(xAxis)
```

坐标轴位置如果不够理想，可以使用 CSS 平移：

```js
svg
  .append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(0, ' + (h - padding) + ')')
  .call(xAxis)
```

使用 `ticks(n)` 设定刻度个数，这里的 `n` 会被 d3 看作一种建议，和最终的实际结果也许有出入。

```js
d3.axisBottom().scale(xScale).ticks(5)
```

也可以使用 `tickValues()` 强制设定刻度数值：

```js
d3.axisBottom().scale(xScale).tickValues([0, 100, 250, 600])
```

## 参考资料

1. [Interactive Data Visualization for the Web, 2nd Ed.](https://alignedleft.com/work/d3-book-2e), by _Scott Murray_ 。注意，本书 2017 年 8 月出版，基于 D3 4.x。与当前 D3 版本相比，语法上有些许不同，但不影响理解 D3 核心概念，值得阅读。
