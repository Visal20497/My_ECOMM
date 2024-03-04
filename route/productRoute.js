import express from 'express'
import { braintreePaymentController, braintreeTokenController, createProductController, deleteProductController, filterProductController, getAllProductController, getSingleProductController, productCategoryController, productListController, serchHandlerController, similarProductController, totalProductController, updateProductController } from '../contorller/productController.js';
import {isAdmin, isRequire} from './../middleware/authMiddleware.js'
import uploads from  './../config/multer.js'
let route=express.Router()
//create-product || POST
route.post('/create-product',isRequire,isAdmin,uploads.array('images',4),createProductController)
//getAllProduct ||GET
route.get('/products',getAllProductController)
//singleproduct ||GET
route.get('/single-product/:id',getSingleProductController)
//deleteProduct ||DELETE
route.delete('/delete-product/:id',isRequire,isAdmin,deleteProductController)
//updateProduct ||PUT
route.put('/update-product/:id',isRequire,isAdmin,uploads.array('images',4),updateProductController)
// FilterProduct || POST
route.post('/filter-product',filterProductController)
//TotalProductCount || GET
route.get ('/totalProduct',totalProductController)
//ProductList || GET
route.get('/product-list/:count',productListController)
//search Product ||get
route.get('/search-product/:keyword',serchHandlerController)
//similar Product || GET
route.get('/similar-product/:p_id/:c_id',similarProductController)
//product Category || get
route.get('/product-category/:slug',productCategoryController)
//braintreetoken ||get
route.get('/braintree/token',braintreeTokenController)
// payment   || Post
route.post('/braintree/payment',isRequire,braintreePaymentController)


export default route;