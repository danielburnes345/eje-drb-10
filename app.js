const express = require("express");
const {readFile}= require('fs');
const app = express();
require('dotenv').config();

app.get("/", (req,res) => {
	readFile('index.html','utf8',(err,html)=>{
		res.send(html);
});

	
	
});

const port = process.env.PORT || 3000;

app.listen(port, () =>{
	console.log(`el servidor esta corriendo en el puerto:${port}`);
});