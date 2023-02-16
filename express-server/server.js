const express=require("express")
const app=express()
app.get("/", function(request,response){
  response.send("<h1>hello world <h1/>");
})
app.get("/contact", function(request,response){
    response.send("contact me via gmail: niteshsingh45825@gmail.com");
  })
  app.get("/about", function(request,response){
    response.send("<h1>I m NItesh  Singh <h1/>");
  })
app.listen(3000,function(){
    console.log("server started on port 3000")
})