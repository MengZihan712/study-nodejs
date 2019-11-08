const http = require('http');
const fs = require('fs');


http.createServer().on('request',function(req,res){


    fs.readdir("./data",function(err,data){
        if(err){
            return res.end(err)
        }

        console.log(data)

    })

    res.end('data')

}).listen(3000)