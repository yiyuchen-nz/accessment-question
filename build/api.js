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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
const superagent_1 = __importDefault(require("superagent"));
require("dotenv").config();
const key = process.env.API_KEY;
function getWeather(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield superagent_1.default.get(`http://api.openweathermap.org/data/2.5/weather?lat=&${data.lat}&lon=${data.lon}&appid=${key}`);
    });
}
exports.getWeather = getWeather;
