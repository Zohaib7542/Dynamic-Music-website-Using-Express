const path = require("path");
const express  = require("express");
const app = express();

// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));
const staticPath = path.join(__dirname,"../public");


app.use(express.static(staticPath));

app.get("/" , (req , res) =>{
    res.send("Hey My name is Zohaib");
});

app.get("/about",(req ,res) =>{
    res.send("Hy from about page");
});

app.listen (8000 , () =>{
    console.log("Listining to port 8000");
});
