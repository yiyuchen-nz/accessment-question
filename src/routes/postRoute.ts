import express, {Router, Request, Response} from "express";
import { getWeather } from "../api";
//import request from "superagent";

export const postRoute:Router = express.Router()

postRoute.post('/api/location', async(req: Request, res: Response) => {
  
  try{
    const location = req.body
    console.log(location)
    const weather = await getWeather(location)

    console.log(weather)
    //res.send(JSON.stringify(location))



    
  }
  // Question: better way than using type 'any'?
  catch(error:any){
    console.log(JSON.stringify(error))
  }
  
});
