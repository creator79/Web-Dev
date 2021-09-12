const express = require ("express");

const  app = express ();

app.use(express.json());

app.get("/" , function (req , res){
    console.log("Hello From HomePage")
    res.send ("<h1>Hello from Backend</h1>");
})

let obj = {
    name : "Vivek"
}


app .get("/user" , function (req , res){
    console.log("Users")
    res.json (obj);
})
let user ={

}


app.post("/user",function (req,res){
    console.log("req.data",req.body);
    res.status(200).send("data recived")
})
//get
app.get("/user", function (req, res){
    console.log("users");
    // for sending a key value pair 
    res.json(user);

})


app.patch("/user", function (req, res){
    let obj = req.body;
    for(let key in obj){
        user[key] = obj[key];

    }
    res.status(200).json(user);
    
})
app.delete("/user", function (req, res){
    user ={}
    res.status(200).json(user);
    
})

app.listen (8080, function() {
    console.log("server Strated");
    
})