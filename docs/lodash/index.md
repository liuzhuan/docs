---
title: Lodash
---

<script>
  import _ from "lodash"
  import fp from "lodash/fp"

  if (typeof window !== 'undefined') {
    window._ = _
    window.fp = fp
  }
</script>

# Lodash

[Lodash](https://lodash.com/) 是一个 JS 工具库。它提供了两种使用风格，一种是普通风格，一种是函数式风格。

```js
// 普通风格
import _ from 'lodash'
_.map([{ name: 'Tony' }, { name: 'Peter' }], 'name')
// => ['Tony', 'Peter']

// 函数式风格
import fp from 'lodash/fp'
fp.map('name', [{ name: 'Tony' }, { name: 'Peter' }])
// => ['Tony', 'Peter']
```
