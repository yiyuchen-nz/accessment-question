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
function changeToCelsius(number) {
    return number - 273.15;
}
function getWindDirection(number) {
    var val = Math.floor((number / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}
exports.route.get('/api/forecast', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (postRoute_1.locationMap.get(req.ip)) {
        const data = yield (0, api_1.getWeather)(postRoute_1.locationMap.get(req.ip));
        const weather = data.body;
        const summary = {
            "location": weather.name + ", " + weather.sys.country,
            "description": weather.weather[0].main,
            "currentTemperature": changeToCelsius(weather.main.temp).toFixed(1) + "°C"
        };
        const wind = {
            "windSpeed": weather.wind.speed + " m/s",
            "windDirection": getWindDirection(weather.wind.deg)
        };
        const tempArray = ["lowest temperature: " + changeToCelsius(weather.main.temp_min).toFixed(1) + "°C", "highest temperature: " + changeToCelsius(weather.main.temp_max).toFixed(1) + "°C"];
        const forecast = { summary, wind, tempArray };
        res.send(JSON.stringify(forecast));
    }
    else
        res.send({ message: "Please use the location api to store your location." });
}));
