import { Router, Request, Response } from "express";
import { locationMap } from "./postRoute";
import { getWeather } from "../api";


export const route:Router = Router()


route.get('/api/forecast', async(req:Request, res:Response) =>{
   if(locationMap.get(req.ip)){
    const data = await getWeather(locationMap.get(req.ip))
    const weather = data.body
    res.send(JSON.stringify(weather))
   }else{
    res.send({message:"Please use your location api to store your lon and lat."})
   }
});