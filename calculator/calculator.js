const express=require("express")
const app=express();
app.get("/",function(req,res){
    res.sendfile(__dirname+"/index.html")
})
app.listen(4000,function(req,res){
    console.log("server at 4000 port");
})