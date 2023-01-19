import express, {Router, Request, Response} from "express";



export const postRoute:Router = express.Router();
export const locationMap = new Map();

type Location = {
  lat:number,
  lon:number
}

postRoute.post('/api/location', async (req: Request, res: Response) => {
  
  try{
    
    const location:Location = req.body;
    const locationMapKey = ((location.lat+'+'+location.lon).toString());
    console.log(locationMapKey);
    locationMap.set(locationMapKey,location);
    res.send({message: "Your location has been stored."});
    
  }
  // Question: better way than using type 'any'?
  catch(error:any){
    console.log(JSON.stringify(error))
  }
  
});
