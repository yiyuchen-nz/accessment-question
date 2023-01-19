"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
const superagent_1 = __importDefault(require("superagent"));
require("dotenv").config();
const key = process.env.API_KEY;
function getWeather(data) {
    return superagent_1.default.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${key}`);
}
exports.getWeather = getWeather;
