import express, {Router, Request, Response} from "express";
import { getWeather } from "../api";


export const postRoute:Router = express.Router()

postRoute.post('/api/location', async (req: Request, res: Response) => {
  
  try{
    const location = req.body
    const data = await getWeather(location)
    const weather = data.body
    res.send(JSON.stringify(weather))

    
  }
  // Question: better way than using type 'any'?
  catch(error:any){
    console.log(JSON.stringify(error))
  }
  
});
