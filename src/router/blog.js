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