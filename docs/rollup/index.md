
# Rollup

[Rollup](https://rollupjs.org/guide/en/) 是一个 JavaScript 模块打包器。

## 快速开始

下载安装

``` shell
# 创建 package.json 文件
npm init -y

# 本地安装 Rollup
npm install rollup --save-dev
```

分别编写两个 `.js` 文件，其中 `main.js` 是入口文件，`foo.js` 提供工具函数。

``` js
// main.js
import { greet } from './foo'

console.log(greet('Rollup'))

// foo.js
export function greet(msg) {
    return `Hello ${msg}!`
}

export function max(a, b) {
	return a > b ? a : b
}
```

在命令行执行 `npx rollup main.js --file bundle.js`，打包产生一个新的文件 `bundle.js`。

``` javascript
// bundle.js
function greet(msg) {
    return `Hello ${msg}`
}

console.log(greet('Rollup'))
```

打包文件 `bundle.js` 中只包含入口文件使用的函数，代码干净整洁。

## 兼容性

利用 [`@rollup/plugin-commonjs`](https://github.com/rollup/plugins/tree/master/packages/commonjs) 插件，Rollup 可以把 CommonJS 模块转化为 ES 模块，这样就能参与打包。

```js
// rollup.config.js
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs',
  },
  plugins: [commonjs()],
}
```

## 命令行接口

### 配置文件

默认的配置文件名为 `rollup.config.js`。

```js
// 可以导出数组（对应多个输入）
export default {
  // 核心输入选项
  external,
  input: 'src/main.js',
  plugins,

  // 高级输入选项
  cache,
  onwarn,
  preserveEntrySignatures,
  strictDeprecations,

  // 危险区
  acorn,
  acornInjectPlugins,
  context,
  moduleContext,
  preserveSymlinks,
  shimMissingExports,
  treeshake,

  // 实验特性
  experimentalCacheExpiry,
  perf,

  // 必选项（可以是数组，对应多个输出）
  output: {
    // 核心输出选项
    dir,
    file: 'bundle.js',
    format: 'cjs',
    globals,
    name,
    plugins,
  },
}
```
