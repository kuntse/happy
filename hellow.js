var http = require('http').createServer(handler);
function handler(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('hellow');
	res.end();
}
http.listen(1000);