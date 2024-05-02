require('dotenv').config();
const express = require('express');

const app = express();

app.get("/", (req,res,next)=>{
  res.status(200).json({
    message: "Hello World"
  })
})

app.listen(8080, ()=>{
  console.log("Server is listening on PORT 8080");
})