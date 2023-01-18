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
exports.postRoute = void 0;
const express_1 = __importDefault(require("express"));
const api_1 = require("../api");
//import request from "superagent";
exports.postRoute = express_1.default.Router();
exports.postRoute.post('/api/location', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const location = req.body;
        console.log(location);
        const weather = yield (0, api_1.getWeather)(location);
        console.log(weather);
        //res.send(JSON.stringify(location))
    }
    // Question: better way than using type 'any'?
    catch (error) {
        console.log(JSON.stringify(error));
    }
}));
