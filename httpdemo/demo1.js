const http = require('http');
const fs = require('fs')


let server = http.createServer();
let demo = "D:/study-test/study-nodejs/httpdemo/data"

server.on('request', function(req, res) {
	let url = req.url;
	var filePath="/index.html";

	if (url !== "/") {
		filePath=url
	}
console.log("ppp   ",demo+filePath)

	fs.readFile(demo+filePath, function(error, data) {
		if (error) {
			return res.end(error)
		} 
		console.log("地址",url)
	    res.end(data)
		
	})

})





server.listen(3000, function() {
	console.log("启动成功")

})
