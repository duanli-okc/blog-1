let handleBlogRouter=require('./src/router/blog');
let handleUserRouter=require('./src/router/user');
const handleServer =function(req,res){
  // 设置返回数据类型，向客户端发送json数据
  res.setHeader('Content-type','application/json');

  // 处理blog路由
  const blogData=handleBlogRouter(req,res);
  if(blogData){
      res.end(JSON.stringify(blogData));
  }

  // 处理用户路由
  const userData=handleUserRouter(req,res);
  if(userData){
    res.end(JSON.stringify(userData));
  }
}

module.exports=handleServer;