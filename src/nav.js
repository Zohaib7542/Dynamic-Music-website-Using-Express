const express = require ("express");
const app = express();
app.get("/",(req , res) =>{
    console.log("hello world");
});
app.get("/about",(req , res) =>{
    console.log("about page");
})
app.get("/home",(req,res) =>{
    res.send({
        id : 1,
        name : "Zohaib",
    })
});
app.listen(8000,()=>{
    console.log("listiningß")
})