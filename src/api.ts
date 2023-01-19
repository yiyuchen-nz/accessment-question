import request, { SuperAgentRequest } from "superagent"
require("dotenv").config();

type dataType = { lat: string; lon: string }

const key= process.env.API_KEY

export function getWeather( data:dataType):SuperAgentRequest{

   return request.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${key}`
    )
    
}