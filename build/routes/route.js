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
exports.route.get('/api/forecast', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (postRoute_1.locationMap.get(req.ip)) {
        const data = yield (0, api_1.getWeather)(postRoute_1.locationMap.get(req.ip));
        const weather = data.body;
        res.send(JSON.stringify(weather));
    }
    else {
        res.send({ message: "Please use your location api to store your lon and lat." });
    }
}));
