const express = require("express");
const app = express();
const port = 8000;
const path = require("path");


console.log(path.join(__dirname,"../public"));
const staticPath = path.join(__dirname,"../public");

app.set("view engine","hbs");

// app.use(express.static(staticPath));

app.get("" , (req , res) =>{
    res.render("index");
})

app.get("/",(req,res)=> {
    console.log("hello my name is zohaib");
});

app.listen(port , () =>{
    console.log(`listinging ${port}`);
});