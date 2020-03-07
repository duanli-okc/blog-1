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