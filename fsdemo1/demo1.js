const fs = require("fs");

fs.readFile("./demo.md",function(error,data){
    if(error){
        console.log("读取失败")
    }else{
        console.log("读取成功")
        //读取文件都是
        console.log(data.toString())

    }
})

fs.writeFile("./demoWrite.txt","测试fs写文件的能力",function(error){
    if(error){
        console.log(error)
    }else{
        console.log("写入成功")
    }
})
