import request from "superagent"

require("dotenv").config();

const key:string|undefined = process.env.API_KEY || undefined

export function getWeather(input: { lat: string; lon: string }){

    return request
    .get(
    `http://api.openweathermap.org/data/2.5/weather?lat=&${input.lat}&lon=${input.lon}&appid=${key}`
    )
    .then(
        response => {
            return response.body
        }
    )
    .catch(
        err => {
            console.error(err)
        });
    
}