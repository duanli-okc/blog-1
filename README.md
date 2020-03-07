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
## 接口设计
|  描述   | 接口   |  方法  | url参数  | 备注  |
|  ----  | ----  |  ----  | ----    | ----  |
| 获取博客列表 | /api/blog/list |get   | author作者，keyword搜索关键字   |参数为空，则不进行查询过滤 |
| 获取一篇博客的内容  | /api/blog/detail |get   | id   | |
| 新增一篇博客 | /api/blog/new |post  |    |post中有新增的信息 |
| 更新一篇博客  | /api/blog/updata |post   | id   |postData中有更新内容 |
| 删除一篇博客  | /api/blog/del |post   | id   | |
| 登陆 | /api/user/login | post   |    |postData中有用户和密码  |

---
处理请求的接口函数封装  handleBlogRouter
```
function handleBlogRouter(req,res){
    const method=req.method;
    const url=req.url.split('?')[0];

    // 登陆接口
    if(method==="POST" && url==='/api/user/login'){
        return {
            mes:'这是登陆的接口数据'
        }
    }
}
module.exports=handleBlogRouter;
```
接口返回对象的数据模型
```
class BaseModle {
    constructor(data,message){
        if(typeof data ==='string'){
            this.message=data;
            data = null;
            message =null;
        }
        if(data){
            this.data=data;
        }
        if (message){
            this.message= message;
        }
    }
}

class SuccessModel extends BaseModle {
    constructor (data , message) {
        super(data, message);
        this.error = 0;
    }
}

class ErrorModel extends BaseModle {
    constructor (data , message) {
        super(data, message);
        this.error = -1;
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}

```
获取数据Controller 模块
```
function getList (author , keyword) {
   // 通过参数向数据库获取数据
   return [
    {
        id:1,
        title:'标题1',
        content:'内容1',
        time:'32904u23094',
    },
    {
        id:2,
        title:'标题32',
        content:'内容12',
        time:'32904u230942',
    }
   ]
}

module.exports={
    getList
}
```

