const http = require("http");
const fs = require("fs");
const template = require("art-template");
const url=require('url')

let list = [
    {
        name:"张三",
        message:"学习订货会打电话",
        time:"2019-11-08"
    },
    {
        name:"李四",
        message:"学习订货会打电话",
        time:"2019-11-08"
    }
]
http.createServer(function(req,res){
    let parseObj = url.parse(req.url,true);
    let pathname= parseObj.pathname
    console.log("pathname",pathname)
    if(pathname==="/"){
        fs.readFile("./template.html",function(err,data){
            if(err){
                return res.end("读取失败")
            }
            let html = template.render(data.toString(),{
                list:list
            })
            res.end(html)
    
        })
    }else if(pathname.indexOf('/public')===0){
        
        fs.readFile("."+pathname,function(err,data){
            if(err){
                return res.end(err)
            }
            res.end(data)
        })

    }else if(pathname.indexOf("/post")===0){
        fs.readFile("."+pathname,function(err,data){
            if(err){
                return res.end("读取失败")
            }
            let html = template.render(data.toString(),{
                list:list
            })
            res.end(html)
    
        })
    }else if(pathname.indexOf("/pinglun")===0){
        let obj = parseObj.query
    
    list.unshift({name:obj.name,message:obj.pinglun,time:new Date()})
    //重定向
    res.statusCode=302;
    res.setHeader('Location','/')
    res.end()

    }else{
        fs.readFile("./404.html",function(err,data){
           
           res.end(data)

        })
    }



  
   


   

}).listen(3000,function(){
    console.log("启动成功....")
})