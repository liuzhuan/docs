---
title: D3.js 使用指南
---

# D3.js 使用指南

[D3.js](https://d3js.org) 表示 Data-Driven Documents，即“数据驱动的文档”。

可以直接在代码中引入 d3.js 库

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
