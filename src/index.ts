import express, {Application }  from "express";
import dotenv from "dotenv";

import { routes } from "./routes";


const app:Application = express();
const port:number =  3000;

app.use(express.json())

app.use('/', routes)

dotenv.config();


app.listen(port, ()=>{
    console.log("server running at http://localhost:3000")
})




