---
title: Vite 使用说明
---

# Vite 使用说明

[Vite](https://vitejs.dev/) 是一个速度很快的前端构建工具。它主要由两部分构成：

1. **开发服务器**。在原生 ES 模块基础上，增加丰富特性，比如模块热更新。
2. **构建命令**。使用 Rollup 构建静态资源，为生产环境做了高度优化。

如果要扩展或整合 Vite，可以使用**插件 API** 和 **JavaScript API**。

## 版本

从 3.0 开始，Vite 团队计划每年至少发布一个主版本，以便和 [Node.js 的版本计划](https://nodejs.org/en/about/releases/)同步。

1. 2020/04/21 Vite 0.1.0，第一个版本
1. 2021/02/17 [Vite 2.0](https://vitejs.dev/blog/announcing-vite2.html) 发布，事实上的第一个稳定版本
1. 2022/07/13 [Vite 3.0](https://vitejs.dev/blog/announcing-vite3.html) 发布

## 浏览器支持

默认的构建目标浏览器，需要支持原生 ES 模块、原生 ES 动态导入和 `import.meta`。旧浏览器可以通过官方的 [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) 插件支持。

## 创建 Vite 项目

注意，Vite 3.x 依赖 Node v14.18+, 16+。

输入如下命令，选择对应的模板，就可以快速搭建项目：

```sh
$ pnpm create vite
```

也可以直接指定项目名称和模板类型。

```sh
$ pnpm create vite my-vue-app --template vue
```

[create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) 是创建 Vite 项目的官方命令行工具。此外，社区也维护了[很多模板资源](https://github.com/vitejs/awesome-vite#templates)，可以借助 degit 之类的工具快速搭建：

```sh
$ npx degit user/project my-project
```

在 Vite 中，`index.html` 扮演着入口文件的角色。默认情况下，Vite 的根目录 `<root>` 就是项目的根目录。如果要在其他目录启动开发服务器，需要执行：

```sh
$ vite serve some/sub/dir
```

## 命令行接口

安装 Vite 后，可以在 npm 脚本中使用 `vite`。Vite 脚手架默认的脚本如下：

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 特性

### NPM 依赖解析和预打包

原生 ES 模块不支持如下形式的裸模块（bare module）导入：

```js
import { someMethod } from 'my-dep'
```

以上语句在浏览器会报错。Vite 在源文件发现裸模块导入语句，会进行如下转化：

1. 把它们预打包，提高页面加载速度。把 CommonJS 和 UMD 模块转换成 ES 模块。预打包阶段使用 esbuild，冷启动速度极快。
2. 重写导入语句，改成合法 URL，比如 `/node_modules/.vite/deps/my-dep.js?v=f3sf2ebd`，这样浏览器就能正常导入这些模块。

### 模块热更新

Vite 在原生 ES 模块基础上提供了 HMR API，用于模块热更新。Vite 为 Vue 单文件组件和 React 提供了开箱即用的 HMR 整合。

### TypeScript

Vite 开箱支持 `.ts` 文件。Vite 不对 `.ts` 做类型检查，只做转译。类型检查应该由 IDE 和构建流程完成。

::: details 如何执行类型检查？
可以在构建脚本中使用 `tsc --noEmit` 执行类型检查，或者安装 `vue-tsc`，执行 `vue-tsc --noEmit` 对 `.vue` 文件做类型检查。
:::

使用[仅类型导入导出](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export)语法，防止类型导入被打包等问题。比如：

```ts
import type { T } from 'only/types'
export type { T }
```

`tsconfig.json` 中的一些编译器配置 `compilerOptions` 需要重点关注。

1. [`isolatedModules`](https://www.typescriptlang.org/tsconfig#isolatedModules) 需要设为 `true`。因为 esbuild 不支持某些特性，设定 `isolatedModules: true` 后，TS 会提醒你哪些语法不支持。但是一些库（如 [vue](https://github.com/vuejs/core/issues/1228)）和 `isolatedModules: true` 不合，不得不设定 [`skipLibCheck: true`](https://www.typescriptlang.org/tsconfig#skipLibCheck) 临时跳过类型检查。
1. [`useDefineForClassFields`](https://www.typescriptlang.org/tsconfig#useDefineForClassFields) 从 Vite 2.5.0 开始，如果 TypeScript 的目标是 `ESNext`，则默认值为 `true`。
1. 其他影响构建结果的编译参数：[`extends`](https://www.typescriptlang.org/tsconfig#extends), [`importsNotUsedAsValues`](https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues), [`preserveValueImports`](https://www.typescriptlang.org/tsconfig#preserveValueImports), [`jsxFactory`](https://www.typescriptlang.org/tsconfig#jsxFactory), [`jsxFragmentFactory`](https://www.typescriptlang.org/tsconfig#jsxFragmentFactory)

### Vue

Vite 提供了一流的 Vue 支持：

- Vue 3 SFC via [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- Vue 3 JSX via [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)
- Vue 2.7 via [@vitejs/plugin-vue2](https://github.com/vitejs/vite-plugin-vue2)
- Vue 2.7 前的版本需要使用 [underfin/vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)

### JSX

`.jsx` 和 `.tsx` 文件开箱可用，JSX 转译的幕后功臣依然是 `esbuild`。

Vue 用户需使用官方的 `@vitejs/plugin-vue-jsx` 插件，它提供了 Vue 3 专有特性，比如 HMR，全局组件解析，指令和插槽等。

如果在 React 和 Vue 之外使用 JSX，需要配置 `esbuild` 选项的 `jsxFactory` 和 `jsxFragment`。以 Preact 为例：

```js
// vite.config.js
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
})
```

更多详情需查阅 esbuild 的[文档](https://esbuild.github.io/content-types/#jsx)。

可以使用 Vite 专有的选项 `jsxInject` 防止手动导入：

```js
export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
```

### CSS

导入 `.css` 文件，会把它的内容注入页面的 `<style>` 标签。也可以通过模块的默认导出，获取处理后的 CSS 字符串。

@import 内联和变基

Vite 通过 `postcss-import` 支持 CSS `@import` 内联。
