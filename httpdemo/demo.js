const http = require("http")
var server = http.createServer()
server.on('request',function(request,response){
   let url = request.url;

   console.log("请求我的客户端的地址",request.socket.remoteAddress,request.socket.remotePort)
   if(url==="/"){
       response.end("index page")
   }else if(url==="/login"){
       response.end("login page")
   }else if(url==="/products"){
       let products=[
           {name:"菠萝",price:10},
           {name:"苹果",price:3},
           {name:"栗子",price:7},
           {name:"哈密瓜",price:33},]
    response.setHeader('Content-Type','text/plain;charset=utf-8')
    response.end(JSON.stringify(products))
}else{
    response.end('not found')
   }
    
})
server.listen(3000,function(){
    console.log("服务器启动成功,可以通过http://127.0.0.1:3000/ 来进行访问")
})