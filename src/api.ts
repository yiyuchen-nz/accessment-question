import request from "superagent"
require("dotenv").config();

const key= process.env.API_KEY

export async function getWeather( data:{ lat: string; lon: string }){

    return await request.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=&${data.lat}&lon=${data.lon}&appid=${key}`
    )

    
}