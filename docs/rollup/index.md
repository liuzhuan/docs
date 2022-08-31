# Rollup

[Rollup](https://rollupjs.org/guide/en/) 是一个 JavaScript 模块打包器。

## 快速起步

```sh
# 安装
npm install --global rollup

# 假设入口文件是 main.js ，输出文件是 bundle.js
# 针对浏览器打包
rollup main.js --file bundle.js --format iife

# 针对 Node.js 打包
rollup main.js --file bundle.js --format cjs

# 针对浏览器和 Node.js 打包
rollup main.js --file bundle.js --format umd --name "myBundle"
```

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
