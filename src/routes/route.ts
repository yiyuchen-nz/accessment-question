import { Router, Request, Response } from "express";
import { locationMap } from "./postRoute";
import { getWeather } from "../api";


export const route:Router = Router();

const forecastMap = new Map();

type Summary = {
    location:string,
    description:string,
    currentTemperature:string
}

type Wind ={
    windSpeed: string,
    windDirection:string
}

type TempArray = string[];

type WeatherType = {
    summary:Summary,
    wind:Wind,
    tempArray:TempArray
}

function temperatureFormatter(number:number):string{
    const degree = number - 273.15;
    return degree.toFixed(1)+ "°C";
}

function windDirectionFormatter(number:number):string{
    var val = Math.floor((number / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

route.get('/api/forecast', async(req:Request, res:Response) =>{


   const key = locationMap.keys().next().value

   //else if the key not exists, call api and return the forcast
   if(!forecastMap.has(key)){
    const data = await getWeather(locationMap.get(key));

    const weather = data.body;
    const summary = {
        "location": weather.name + ", " + weather.sys.country,
        "description": weather.weather[0].main,
        "currentTemperature": temperatureFormatter(weather.main.temp) 
    };
    const wind = {
        "windSpeed": weather.wind.speed +" m/s",
        "windDirection": windDirectionFormatter( weather.wind.deg )
    };
    const tempArray=["lowest temperature: " + temperatureFormatter(weather.main.temp_min), "highest temperature: " + temperatureFormatter(weather.main.temp_max)];
    const forecast:WeatherType = {summary, wind, tempArray};
    forecastMap.set(key, forecast)
    console.log("this is the key", key)
    res.send(JSON.stringify(forecast));
   }
   //if key exists in forecastMap, print the value from the map
   else if(forecastMap.has(key)){
    res.send(forecastMap.get(key))
   }
   //else return message 'set the location'
   else{
    res.send({message:"Please use the location api to store your location."});
   }
   
});