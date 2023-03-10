const express = require("express");
const fs = require('fs');

const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});


app.get("/", (req, res) => {
  //res.send("<html> <head><title>server Response</title></head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
});

app.get("/signup",(req,res)=>{
    fs.readFile('signup.html', 'utf8', (err,data)=>{
        if (err){
            console.error(err);
            return;
        }
        res.send(data);
    });
});


app.get("/home",(req,res)=>{
    fs.readFile('homepage.html', 'utf8', (err,data)=>{
        if (err){
            console.error(err);
            return;
        }
        res.send(data);
    });
});