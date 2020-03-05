# 基于原生Node开发 blog博客项目

## 创建项目目录
```
mkdir blog-1
cd blog-1
git init
touch app.js 
mkdir bin  (存放项目运行文件)
cd bin
touch www.js  (项目入口文件)

```
## 安装项目依赖
> npm init -y 初始化项目

> npm install cross-env --save-dev    
> 跨平台设置环境变量，环境变量在不同操作系统设置方式不一样，cross-env可以解决跨平台配置环境变量

在package.json中设置
```
"scripts": {
    "dev": "cross-env NODE_ENV=dev nodemon bin/www.js"
  }
```


