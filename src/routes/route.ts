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

function changeToCelsius(number:number):number{
    return number - 273.15
}

function getWindDirection(number:number):string{
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
        "currentTemperature": changeToCelsius(weather.main.temp).toFixed(1) + "°C"
    }

    const wind = {
        "windSpeed": weather.wind.speed +" m/s",
        "windDirection": getWindDirection( weather.wind.deg )
    }

    const tempArray=["lowest temperature: " + changeToCelsius(weather.main.temp_min).toFixed(1) + "°C", "highest temperature: " + changeToCelsius(weather.main.temp_max).toFixed(1) + "°C"]

    const forecast:WeatherType = {summary, wind, tempArray}
    res.send(JSON.stringify(forecast))
   }
   else res.send({message:"Please use the location api to store your location."})
   
});