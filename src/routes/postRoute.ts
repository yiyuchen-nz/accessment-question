import express, {Router, Request, Response} from "express";



export const postRoute:Router = express.Router()
export const locationMap = new Map();

postRoute.post('/api/location', async (req: Request, res: Response) => {
  
  try{
    
    const location = req.body
    locationMap.set(req.ip,location)
    //console.log("locationmap", JSON.stringify(locationMap.get("location1")))
    
    res.send({message: "Your location has been stored."})
    
  }
  // Question: better way than using type 'any'?
  catch(error:any){
    console.log(JSON.stringify(error))
  }
  
});
