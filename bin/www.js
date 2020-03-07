const http=require('http');
const PORT=8080;

const handleServer=require('../app');
    http.createServer(handleServer).listen(PORT);
    