function  handleUserRouter (req,res){
   const method = req.method;
   const url=req.url.split('?')[0];
   // 获取博客列表
   if(method.toLowerCase()==='get' && url==='/api/blog/list'){
      return {
          mes:'这是博客列表数据'
      } 
   }

   // 获取博客详情内容
   if(method.toLowerCase()==='get' && url==='/api/blog/detail'){
    return {
        mes:'这是博客详情内容'
    } 
 }

 // 新增一篇博客
 if(method.toLowerCase()==='post' && url==='/api/blog/new'){
    return {
        mes:'这是新增博客接口'
    } 
 }
 // 更新一篇博客
 if(method.toLowerCase()==='post' && url==='/api/blog/updata'){
    return {
        mes:'这是博客更新接口'
    } 
 }
 // 删除博客
 if(method.toLowerCase()==='post' && url==='/api/blog/del'){
    return {
        mes:'这是博客删除接口'
    } 
 }

}
module.exports=handleUserRouter;