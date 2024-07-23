import dotenv from "dotenv"
import connectDB from "./db/index.js";
import dns from "dns"

dns.setServers(['8.8.8.8', '8.8.4.4'])


dotenv.config({
    path: './env'
})

console.log(process.env);


connectDB()





/*
import express from "express"
const app = express()

;( async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error: ", error)
        throw error
    }
})()
*/