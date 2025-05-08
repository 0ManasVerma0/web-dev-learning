const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.statusCode = 200;
        res.setHeader("Content-Type","text/plain")
        res.end("Hello this is a node server")
    } else if(req.url === "/another-node"){
        res.statusCode = 200;
        res.setHeader("Content-Type","text/plain")
        res.end("Hello this is another node server")
    } else{
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain")
        res.end("SED its a 404 error file not found :(")
    }
})

server.listen(port, hostname, () => {
    console.log(`server is listening at http://${hostname}:${port}`)
})