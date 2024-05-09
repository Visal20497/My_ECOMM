import mongoose from "mongoose";

// MongoDb Database Connection
let DbConnection=async()=>{
    try{
        let connection=await mongoose.connect('mongodb+srv://visal20497:wpxFBHtGfSSZEhZR@cluster0.zxg4jay.mongodb.net/ecom?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Mongodb connnected!")
    }
    catch(error){
        console.log("Something wrong while connected to Mongodb")
    }
}

export default DbConnection;
