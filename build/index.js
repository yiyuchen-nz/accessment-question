"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/', routes_1.routes);
dotenv_1.default.config();
app.listen(port, () => {
    console.log("server running at http://localhost:3000");
});
