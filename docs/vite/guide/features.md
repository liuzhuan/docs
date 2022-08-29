# 特性

使用 Vite 和普通静态文件服务器的体验差不多。只是 Vite 提供了更多的增强功能。

## TypeScript

Vite 开箱支持 `.ts` 文件。

## Vue

Vite 提供的 Vue 支持如下：

- Vue 3 SFC via [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- Vue 3 JSX via [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)
- Vue 2.7 via [@vitejs/plugin-vue2](https://github.com/vitejs/vite-plugin-vue2)
- Vue 2.7- via [underfin/vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)

## CSS

导入 `.css` 文件，会把它的内容注入页面的 `<style>` 标签。也可以通过模块的默认导出，获取处理后的 CSS 字符串。

### @import 内联和变基

Vite 通过 `postcss-import` 支持 CSS `@import` 内联。

## REF

- [Features](https://vitejs.dev/guide/features.html)
