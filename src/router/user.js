const {getList} = require('../controller/blog'); 
const { SuccessModel, ErrorModel} = require('../model/resModel');

function  handleUserRouter (req,res){
   const method = req.method;

   // 获取博客列表
   if(method.toLowerCase()==='get' && req.path ==='/api/blog/list'){
      const author = req.query.author || '';
      const keyword= req.query.keyword || '';
      const listData=getList(author,keyword);
      return new SuccessModel(listData);
   }

   // 获取博客详情内容
   if(method.toLowerCase()==='get' && req.path ==='/api/blog/detail'){
    return {
        mes:'这是博客详情内容'
    } 
 }

 // 新增一篇博客
 if(method.toLowerCase()==='post' && req.path ==='/api/blog/new'){
    return {
        mes:'这是新增博客接口'
    } 
 }
 // 更新一篇博客
 if(method.toLowerCase()==='post' && req.path ==='/api/blog/updata'){
    return {
        mes:'这是博客更新接口'
    } 
 }
 // 删除博客
 if(method.toLowerCase()==='post' && req.path ==='/api/blog/del'){
    return {
        mes:'这是博客删除接口'
    } 
 }

}
module.exports=handleUserRouter;