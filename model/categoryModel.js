import mongoose from "mongoose";
let categorySchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        require:true
    },
    slug:{
        type:String,
        lowercase:true,
        require:true
    }
},{timestaps:true})
export default mongoose.model('category',categorySchema)