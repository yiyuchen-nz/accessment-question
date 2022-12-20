import { Router, Request, Response } from "express";

export const route:Router = Router()


route.get('/', (req:Request, res:Response) =>{
   return res.send("Hello world!");
});