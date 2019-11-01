const http = require('http');
const fs = require('fs')


let server = http.createServer();

server.on('request',function(req,res){
let url = req.url;
let demo = "./data"

    fs.readFile(demo+url,function(error,data){
        if(error){
            console.log(error)
        }else{
            res.end(data)
        }
    })

})





server.listen(3000,function () {
    console.log("启动成功")
    
})