const serverHandle =function(req,res){
  res.setHeader('Content-type','application/json');

  var resDate={
         name:'测试数据名字',
         value:'值'
      }
  res.end( JSON.stringify(resDate)  );
}

module.exports=serverHandle;