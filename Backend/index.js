// ทำการ import โมดูล http
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่า server
const reqestListener = function(req, res) {
    res.writeHead(200);
    res.end('Hello, World! This is my first sever.');

}
// run sever
const server = http.createServer(reqestListener);
server.listen(port, host, () => {
    console.log('Server is running on http://${host}:${port}');
});
//ค้นหาใน แถบ google url ว่า localhost:8000