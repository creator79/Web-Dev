const express = require ("express");

const  app = express ();

app.get("/" , function (req , res){
    console.log("Hello From HomePage")
    res.send ("<h1>Hello from Backend</h1>");
})

let obj {
    name : "Vivek"
}


app .get("/user" , function (req , res){
    console.log("Users")
    res.json (obj);
})

app.listen (8080, function() {
    console.log("server Strated");
    
})