const http = require('http');
const host = 'localhost'
const requestListener = function (req,res){
    res.writeHead(200);
    res.end("My Firs Server!");
};
const port = 8000;
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})