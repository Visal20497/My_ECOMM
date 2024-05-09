import mongoose from "mongoose";

// MongoDb Database Connection
let DbConnection=async()=>{
    try{
<<<<<<< HEAD
        let connection=await mongoose.connect(process.env.MONGOOSEDB_URL)
       // mongodb://127.0.0.1:27017/MYEcom
=======
        let connection=await mongoose.connect('mongodb+srv://visal20497:wpxFBHtGfSSZEhZR@cluster0.zxg4jay.mongodb.net/MYEcom?retryWrites=true&w=majority&appName=Cluster0')
>>>>>>> 5b3f07ebdc2fc79783e40b15496c1d78e25875f1
        console.log("Mongodb connnected!")
    }
    catch(error){
        console.log("Something wrong while connected to Mongodb")
    }
}

export default DbConnection;
