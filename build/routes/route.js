"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const postRoute_1 = require("./postRoute");
const api_1 = require("../api");
exports.route = (0, express_1.Router)();
const forecastMap = new Map();
function temperatureFormatter(number) {
    const degree = number - 273.15;
    return degree.toFixed(1) + "°C";
}
function windDirectionFormatter(number) {
    var val = Math.floor((number / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}
exports.route.get('/api/forecast', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const key = postRoute_1.locationMap.keys().next().value;
    //else if the key not exists, call api and return the forcast
    if (!forecastMap.has(key)) {
        const data = yield (0, api_1.getWeather)(postRoute_1.locationMap.get(key));
        const weather = data.body;
        const summary = {
            "location": weather.name + ", " + weather.sys.country,
            "description": weather.weather[0].main,
            "currentTemperature": temperatureFormatter(weather.main.temp)
        };
        const wind = {
            "windSpeed": weather.wind.speed + " m/s",
            "windDirection": windDirectionFormatter(weather.wind.deg)
        };
        const tempArray = ["lowest temperature: " + temperatureFormatter(weather.main.temp_min), "highest temperature: " + temperatureFormatter(weather.main.temp_max)];
        const forecast = { summary, wind, tempArray };
        forecastMap.set(key, forecast);
        console.log("this is the key", key);
        res.send(JSON.stringify(forecast));
    }
    //if key exists in forecastMap, print the value from the map
    else if (forecastMap.has(key)) {
        res.send(forecastMap.get(key));
    }
    //else return message 'set the location'
    else {
        res.send({ message: "Please use the location api to store your location." });
    }
}));
