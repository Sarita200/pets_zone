import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import getHealth from "./controllers/helth.js";
import {postDoctors,getDoctors} from './controllers/petDocter.js'

dotenv.config();
const app = express()
app.use (express.json())
app.use (cors())

const dbConnection = async ()=>{
    const conn =await mongoose.connect (process.env.MONGO_URL) ;
    if(conn){
        console.log(`mongoDB is connected successfully ✔`)
    }  
}
dbConnection();

app.get("/health" , getHealth)
//APIs for Doctors
app.get("/v1/doctors" , getDoctors)
app.post("/v1/doctors",postDoctors)

const PORT = process.env.PORT || 5000

app.listen (PORT ,()=>{
    console.log (`server is running on port ${PORT}`)
})