# 安装
```bash
npm i webpack-dev-server
```

# 使用方法

package.json
```json
"scripts": { 
 ...
 "dev":"webpack dev-server --config webpack.config.js"
}
```

# 使用环境

专门用在开发环境

# 修改webpack配置
1. 在webpack.config.js新增语句：
```js
 module.exports = {
 
   target: 'web',
 
   ...
 }
```

2. 
同时因为要用在不同的环境，所以要根据不同开发环境去判断。cross-env就能够在window/mac等不同平台下运行package.json的同一个命令
   
安装方法：
```bash
 npm i cross-env
```

在package.json中build和dev前新增：
```json
"scripts":{
 
  ”build“："cross-env NODE_ENV=production ....",
 
  "dev": "cross-env NODE_ENV=development ..."
 
}
```

上面的production/development都是可以自己设置的。都存在于process.env里面

然后在**webpack.config.js**里面可以做一些判断。
```js
 const isDev= process.env.NODE_DEV ==='development'
```

如果是开发者模式，则进行一些设置：
```js
if (isDev) {

    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true,
        }
    }
}
```

# 安装入口
要有html才能使用，html-webpack-plugin是一个很好的插件，直接包含index.js文件
```bash
npm i html-webpack-plugin
```