import express from "express";
import { postRoute } from "./postRoute";
import { route } from "./route";

export const routes = express.Router();

routes.use(route)
routes.use(postRoute)