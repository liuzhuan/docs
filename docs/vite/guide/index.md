# 起步

## 第一个 Vite 项目

::: tip 兼容性
Vite 依赖 Node v14.18+, 16+。
:::

```sh
$ pnpm create vite
```

也可以直接指定项目名称和模板。

```sh
$ pnpm create vite my-vue-app --template vue
```

## 命令行接口

当安装 Vite 后，就可以在 npm 脚本中使用 `vite`。

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## REF

1. [Getting Started](https://vitejs.dev/guide/)
