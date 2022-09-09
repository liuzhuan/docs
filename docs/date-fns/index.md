# date-fns

[date-fns](https://date-fns.org/), 一个处理时间的工具库。[文档地址](https://date-fns.org/docs/Getting-Started)。

## 安装

```sh
$ pnpm add date-fns
```

## 使用

```js
import { compareAsc, format, addDays } from 'date-fns'

// 格式化输出日期
console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'))
// => '2014-02-11'

// 按日期升序排列
const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)

// 计算未来的日期，支持负数
const today = new Date()
const tomorrow = addDays(today, 1)
console.log('tomorrow:', tomorrow)
```
