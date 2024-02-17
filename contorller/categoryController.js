import slugify from 'slugify'
import categoryModel from './../model/categoryModel.js'
// this for the create category controller
export let createCategoryController = async (req, res) => {
    try {
        let { name } = req.body
        if (!name) {
            res.status(200).send({ message: "Field is required" })
        }
        let result = await categoryModel.findOne({ name: name })
        if (result) {
            return res.status(200).send({ message: "Category is Already exist", success: false })
        }
        let category = await new categoryModel({ name, slug: slugify(name) }).save()
        res.status(201).send({ message: "Category creation is successfull", category, success: true })


    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Something while creating the category", success: false, error })

    }

}

//this is for the get all category controller
export let allCategoryController = async (req, res) => {
    try {
        let category = await categoryModel.find({}).sort({ createAt: -1 })
        res.status(200).send({ message: "All category", success: true, category, total: category.length })

    } catch (error) {
        res.status(500).send({ message: "Something wrong while fetching the category", success: false, error })

    }
}

// this is for the delete category 
export let deleteCategoryController = async (req, res) => {
    try {
        let { id } = req.params
        let result = await categoryModel.findByIdAndDelete({ _id: id })
        res.status(200).send({ message: "Category Delete Successful", success: true, result })

    } catch (error) {
        res.status(500).send({ message: "Something worng while deleting the category", success: false, error })

    }
}

// this is for the single category 
export let singleCategoryController = async (req, res) => {
    try {
        let { slug } = req.params
        let category = await categoryModel.findOne({ slug })
        res.status(200).send({ message: "Single category", success: true,category})
    } catch (error) {
        res.status(500).send({ message: "Somthing wrong while fetching single Category", success: false, error })

    }
}

// this is for the update the category 
export let updateCategoryController=async(req,res)=>{
    try {
        let {id}=req.params
        let {name}=req.body
        if(!name){
          res.status(200).send({message:"All Fields are required * "})
        }
        let category=await categoryModel.findByIdAndUpdate({_id:id},{name,slug:slugify(name)},{new:true})
        res.status(200).send({message:"Update category successfull",success:true,category})
        
    } catch (error) {
        res.status(500).send({message:"Somthing wrong while updating category",success:false,error})
        
    }
}