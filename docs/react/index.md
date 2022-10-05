---
title: React
outline: deep
---

[React](https://reactjs.org/) 是 Facebook 出品的一个 JavaScript UI 框架。

## 组件

在 React 中，用户界面由组件构成。组件是返回标签的普通函数。

```jsx
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

组件可以嵌套其他组件。

```jsx
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

React 使用 `JSX` 语法简化组件的编写。在 JSX 中，类名使用 `className` 指定。

```jsx
<img className="avatar" />
```

与此对应的 css 文件如下所示：

```css
.avatar {
  border-radius: 50%;
}
```

要在组件中展示动态数据，需要使用大括号 `{}` 包裹。

```jsx
return (
  <h1>{user.name}</h1>
);
```

属性中也可以使用动态数据。

```jsx
const user = {
  name: 'Hedy Lemarr',
  imageUrl: 'https://xxx/xxx.png',
  imageSize: 90
}

return (
  <>
    <h1>{user.name}</h1>
    <img
      className="avatar"
      src={user.imageUrl}
      alt={'Photo of ' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
    />
  </>
);
```

### 事件处理

在组件内部声明事件处理函数。

```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!')
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

### 记录状态

如果组件需要记录状态，可以从 React 导入 `useState` Hook

```jsx
import { useState } from 'react'

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

### 共享状态

如果想在不同组件之间共享状态数据，需要把状态变量提升到组件共同父组件中，然后通过属性传递给各组件。在 React 中，数据是单向流动的。

```jsx
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Counters that share state</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
```
