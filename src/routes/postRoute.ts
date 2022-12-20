import express, {Router, Request, Response} from "express";

export const postRoute:Router = express.Router()


postRoute.post('/location', (req: Request, res: Response) => {
  console.log(req.body)
  return res.sendStatus(200)
  
});