import { uploadImageOnCloudinary } from './../helper/cloudinaryHelper.js'
import productModel from './../model/productModel.js'

// this is for the product creation
export let createProductController = async (req, res) => {
    try {
        let { name, price, quantity, description, category, brand, shipping } = req.body
        let images = req.files
        if (!name || !price || !quantity || !description || !category || !brand || !shipping) {
            res.status(200).send({ message: "All Field are required" })
        }
        if (images.length === 0) {
            return res.status(200).send({ message: "At least Upload one images" })
        }
        let image = await uploadImageOnCloudinary(req.files)
        let product = await new productModel({ name, price, quantity, description, category, brand, shipping, images: image }).save()
        res.status(201).send({ message: "Product Created Successfully", success: true, product })

    } catch (error) {
        res.status(500).send({ message: "Something wrong while creating the product", success: false, error })

    }
}

//this is for the find the product
export let getAllProductController=async(req,res)=>{
    try {
        let product =await productModel.find({}).populate("category").sort({createdAt:-1})
        res.status(201).send({message:"All product ",product,success:true,total:product.length})
        
    } catch (error) {
        res.status(500).send({message:"Something worng while getting all product"})
        
    }

}