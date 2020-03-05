const http=require('http');
const PORT=8080;
const serverHandle=require('../app');
    http.createServer(serverHandle).listen(PORT);
    