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
