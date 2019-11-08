const http = require('http');
const fs = require('fs')


let server = http.createServer();

server.on('request', function(req, res) {
	let url = req.url;
	let demo = "/data"
	if (url === "/") {
		fs.readFile('D:/Test/Study/StudyNode/study-nodejs/httpdemo/data/index.html', function(error, data) {
			if (error) {
				return res.end(error)
			} else {
				res.end(data)
			}
		})
	}else if(url === "/kt1") {
		fs.readFile('D:/Test/Study/StudyNode/study-nodejs/httpdemo/data/kt1.jpg', function(error, data) {
			if (error) {
				return res.end(error)
			} else {
				res.end(data)
			}
		})
	}else if(url === "/main.css") {
		fs.readFile('D:/Test/Study/StudyNode/study-nodejs/httpdemo/data/main.css', function(error, data) {
			if (error) {
				return res.end(error)
			} else {
				res.end(data)
			}
		})
	}


})





server.listen(3000, function() {
	console.log("启动成功")

})
