const express = require("express");
const app=express();
const path = require("path");

const staticPath=path.join(__dirname,"../public");

app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("welcome");
});
app.listen(8000, ()=>{
    console.log("listning the port at 8000")
});