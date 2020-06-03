> * Babel preset，Babel 7 版本

## 安装
使用npm：
```
npm install --save-dev @lljj/babel-preset
```

使用 yarn
```
yarn add @lljj/babel-preset --dev
```

babel 配置 .babelrc，当然你也可以继续添加你的配置
```
{
  "presets": ["@lljj/package"],
  "plugins": [
    ... plugins // 爱配不配
  ]
}
```

## 包含以下内容

插件：

> * @babel/plugin-proposal-class-properties
> * @babel/plugin-proposal-decorators
> * @babel/plugin-proposal-object-rest-spread
> * @babel/plugin-syntax-dynamic-import

preset-env:

> * "browsers": ["last 2 versions", "ie >=9"]
