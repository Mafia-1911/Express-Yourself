import express from "express"
import bodyParser from "body-parser"

const app=express();
const PORT=3000;

app.use(bodyParser.urlencoded({extended:false}));

app.listen(PORT,()=>{
    console.log(`listening on Port:${PORT} `);
})

app.get("/",(req,res)=>{
    console.log("endpoint is hit");
    res.send("SENT string");
    
})
