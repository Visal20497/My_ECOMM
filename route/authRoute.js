import express from "express";
import { findAllUserContorlller, loginController, profileUpdateController, registerController, restPasswordHandler, updateContorller, userRoleContorller } from "../contorller/authController.js";
import { isAdmin, isRequire } from "../middleware/authMiddleware.js";
let route = express.Router()
//Register || POST
route.post('/register', registerController)

// Login  || POST
route.post('/login', loginController)
// auth-user || get
route.get('/auth-user', isRequire, (req, res) => {
    res.send({ ok: true })
})

//Reset the password || Post
route.post('/reset-password', restPasswordHandler)

//auth-route for admin  || get 
route.get("/admin-auth-route", isRequire, isAdmin, (req, res) => {
    res.send({ ok: true })
})

//update user || put
route.put('/profile-update',isRequire,profileUpdateController)
//find all user || get
route.get(`/all-users`,findAllUserContorlller)
// user role update || post
route.post('/user-role',userRoleContorller)
//user Data update || Put
route.put('/user-update',isRequire,updateContorller)


export default route;
