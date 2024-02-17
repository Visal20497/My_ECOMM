import express from "express";
import { isAdmin, isRequire } from './../middleware/authMiddleware.js'
import { allCategoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../contorller/CategoryController.js";
let route = express.Router()
//create-category || POST
route.post('/create-category',isRequire,isAdmin, createCategoryController)
//get-all-category || GET
route.get('/all-category',allCategoryController)
//delete-category || DELETE
route.delete('/delete-category/:id',isRequire,isAdmin,deleteCategoryController)
//single-category || GET
route.get('/single-category/:slug',singleCategoryController)
//update-category  || PUT
route.put('/update-category/:id',isRequire,isAdmin,updateCategoryController)
export default route