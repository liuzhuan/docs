---
title: Lodash
outline: deep
---

<script>
  import _ from "lodash"
  import fp from "lodash/fp"

  if (typeof window !== 'undefined') {
    window._ = _
    window.fp = fp
    window.users = [
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
      { user: 'pebbles', age: 1, active: true },
    ]
  }
</script>

# Lodash

[Lodash](https://lodash.com/) 是一个 JS 工具库。它提供了两种使用风格，一种是普通风格，一种是函数式风格。两者的文档如下：

1. [普通风格文档](https://lodash.com/docs/)
2. [函数式风格文档](https://github.com/lodash/lodash/wiki/FP-Guide)

每个函数的用法详解如下。

## Collection

### find

`_.find(collection, predicate=_.identity, fromIndex = 0)`

遍历 `collection` 元素，返回第一个令 `predicate` 返回真的元素。`predicate` 有三个入参：`(value, index|key, collection)`。

```js
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

_.find(users, (u) => u.age < 40)
// { user: 'barney', ... }

fp.find((u) => u.age < 40, users)
```

### map

`_.map(collection, iteratee = _.identity)`

创建一个新数组，新数组的每个元素，是 `collection` 对应元素经过 `iteratee` 处理后的结果。`iteratee` 有三个入参：`(value, index | key, collection)`

```js
_.map([4, 8], (n) => n * n)
// => [16, 64]

fp.map((n) => n * n, [4, 8])
```

## Function

### once

`_.once(func)` 生成一个新函数，无论调用新函数多少次，`func` 只会被调用一次。

```js
var initialize = _.once(createApplication)
initialize()
initialize()
// => createApplication 仅执行一次
```

## Lang

### cloneDeep

深度克隆对象。

```js
const obj = [{ a: 1 }, { b: 2 }]
const deep = _.cloneDeep(obj)
console.log(deep[0] === obj[0])
// => false
```

## Object

### get & getOr

`_.get(object, path, defaultValue?)`

获取 `object` 的属性 `path` 对应的值。如果解析的值为 `undefined`，则返回 `defaultValue`。

```js
const obj = { a: [{ b: { c: 3 } }] }
_.get(obj, 'a.b.c', 'default')
// => 'default'

fp.get('a.b.c', obj)
// => undefined
```

`fp.getOr(defaultValue, path, object)` 参数固定是三个。它是 `_.get()` 的函数式风格的化身。

```js
fp.getOr('default', 'a.b.c', obj)
// => 'default'
```

### pick

`_.pick(object, paths)`

生成一个新对象，它的属性按照 `paths` 挑选。

```js
const obj = { a: 1, b: 2, c: 3 }
_.pick(obj, ['a', 'c'])
// => { a: 1, c: 3 }

fp.pick(['a', 'c'], obj)
```

## FP

### pipe

将多个函数通过管道串联起来。

```js
fp.pipe(fp.add(2), fp.multiply(3))(4)
// => 18
```
