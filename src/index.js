import { app } from "./app.js";
import { connectDB } from "./Database/index.js";
import dotenv from "dotenv"
dotenv.config({path:"./.env"})

connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log("Error connecting to database",error);
})