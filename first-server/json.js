const http = require("http");
const host = 'localhost'
const requestListener = function (req, res){
    res.setHeader("Content-Type", "application/json")
 
    res.end(`{"message": "This is Json response}`)
}
const port = 8000;
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})