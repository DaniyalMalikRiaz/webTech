
const http = require('http');
var dt = require('./myfirstmodule')
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.write('Today is' +  dt.GiveDate())
res.end('Nodejs sever');

}

).listen(8080, () => [
    console.log("The server is running")
]
);