import { Router, Request, Response } from "express";
import { locationMap } from "./postRoute";
import { getWeather } from "../api";


export const route:Router = Router()

type Summary = {
    location:string,
    description:string,
    currentTemperature:string
}

type Wind ={
    windSpeed: string,
    windDirection:string
}

type TempArray = string[]

type WeatherType = {
    summary:Summary,
    wind:Wind,
    tempArray:TempArray
}

function temperatureFormatter(number:number):string{
    const degree = number - 273.15
    return degree.toFixed(1)+ "°C"
}

function windDirectionFormatter(number:number):string{
    var val = Math.floor((number / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)]
}

route.get('/api/forecast', async(req:Request, res:Response) =>{
   if(locationMap.get(req.ip)){
    const data = await getWeather(locationMap.get(req.ip))
    const weather = data.body
    const summary = {
        "location": weather.name + ", " + weather.sys.country,
        "description": weather.weather[0].main,
        "currentTemperature": temperatureFormatter(weather.main.temp) 
    }

    const wind = {
        "windSpeed": weather.wind.speed +" m/s",
        "windDirection": windDirectionFormatter( weather.wind.deg )
    }

    const tempArray=["lowest temperature: " + temperatureFormatter(weather.main.temp_min), "highest temperature: " + temperatureFormatter(weather.main.temp_max)]

    const forecast:WeatherType = {summary, wind, tempArray}
    res.send(JSON.stringify(forecast))
   }
   else res.send({message:"Please use the location api to store your location."})
   
});