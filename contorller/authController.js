import { encryptPassword, matchPassword } from "../helper/authHelper.js"
import usersModel from "../model/usersModel.js"
import jwt from 'jsonwebtoken'


//this is my controller for the registration
export let registerController = async (req, res) => {
    let { email, name, password, address, phone,answer,role } = req.body
    try {
        if (!name) {
            return res.status(500).send({ message: "Name is required *" })
        }
        if (!email) {
            return res.status(500).send({ message: "Email is required *" })
        }
        if (!password) {
            return res.status(500).send({ message: "Password is required *" })
        }
        if (!address) {
            return res.status(500).send({ message: "Address is required *" })
        }
        if (!phone) {
            return res.status(500).send({ message: "Phone is required *" })
        }
        if(!answer){
            return res.status(500).send({message:"Answer is required *"})
        }
        let findUser = await usersModel.findOne({ email: email })
        if (findUser) {
            return res.status(500).send({ message: "User is already registered" })
        }
        let hasshedPassword = await encryptPassword(password)
        let user = new usersModel({
            name,
            password: hasshedPassword,
            email,
            address,
            phone,
            answer,
            role
        }).save()
        res.status(201).send({ message: "User is registered Successfully", success: true })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Something wrong while registration",
            success: false
        })
    }
}

// This is my controller for the login 
export let loginController = async (req, res) => {
    try {
        let { email, password } = req.body
        if (!email) {
            res.status(500).send({ message: "Email field is required" })
        }
        if (!password) {
            res.status(500).send({ message: "Password field is required" })
        }
        let existingUser = await usersModel.findOne({ email: email })
        // console.log("existingUser", existingUser)
        if (!existingUser) {
            return res.status(200).send({ message: "Either Email or Password is invalid" })
        }
        let result = await matchPassword(password, existingUser.password)
        if (!result) {
            return res.status(200).send({ message: "Either Email or Password is invalid" })
        }
        // create a token.
        let token = await jwt.sign({ _id: existingUser._id },
            process.env.SECRET_KEY, { expiresIn: "7d" });
        res.status(200).send({
            message: "User Login Successfully",
            success: true,
            user: {
                name: existingUser.name,
                email: existingUser.email,
                address: existingUser.address,
                phone: existingUser.phone,
                role: existingUser.role

            }, token
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Something wrong while longin", success: false, error })

    }

}

//this is for the reset the password 
export let restPasswordHandler=async(req,res)=>{
    let {email,password,answer}=req.body;
    if(!email)
    {
     return res.status(200).send({message:"Email is required*"})
    } 
    if(!password)
    {
     return res.status(200).send({message:"Password is required*"})
    }
    if(!answer){
        return res.status(200).send({message:"Answer is required * "})
    }
      let findData= await usersModel.findOne({answer,email})
      if(!findData)
      {
        return res.status(200).send({message:"Either email or answer are incorrect *"})
      }
      let hashpassword= await  encryptPassword(password)
      let updateData= await usersModel.findByIdAndUpdate({_id:findData._id},{password:hashpassword},{new:true})
      res.status(200).send({message:"Password Update Successful",success:true})
   }

// this is for the update the profile
export let profileUpdateController=async(req,res)=>{
    try{
      let {name,address,phone,password}=req.body
      if(!name || !address || !phone)
      {
        return res.staus(200).send({message:"All fileld required *",success:false})
      }
      else{
        let findData=await usersModel.find({_id:req.user._id})
        if(findData)
        {
          let newPassword=password ? await  encryptPassword(password) :findData.password;
          let updateData= await usersModel.findByIdAndUpdate({_id:req.user._id},{...req.body,password:newPassword},{new:true})
          res.status(200).send({message:"Profile is Updated successful",success:true,user:updateData})
        }
        else{
          return res.status(500).send({success:false,message:"somthing wrong"})
        }
      }
    }
    catch(err)
    {
      console.log(err)
      res.status(500).send({message:"Somthing wrong while updating",err,success:false})
    }
  }

  // this is for the all find all users
  export let findAllUserContorlller=async(req,res)=>{
    try {
        let users=await usersModel.find({})
       return res.status(200).send({message:"All user find",success:true,users,total:users.length})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Something wrong while getting all users",success:false,error})
        
    }
  }
  // this is for update the user role
  export let  userRoleContorller=async(req,res)=>{
     try {
        let {role,id}=req.body
        let  findusers= await usersModel.findOne({_id:id})
        let updateRole=await usersModel.findByIdAndUpdate({_id:{$ne:findusers._id}},{role:role})
        res.status(200).send({message:"User role update successfully",success:true,users:updateRole,new:true})

     } catch (error) {
        console.log(error)
        res.status(500).send({message:"Something wrong while update user role",success:false,error})
     }
  }
  //update the Admin or user details
  export let updateContorller=async(req,res)=>{
    try {
        let {name,address,phone,email}=req.body
        let user=await usersModel.findOne({email})
        let updateUser=await usersModel.findByIdAndUpdate({_id:user._id},{name:name,address:address,phone:phone},{new:true})
         res.status(200).send({message:"User Update Successfully",success:true,updateUser})
    } catch (error) {
        res.status(500).send({message:"Something wrong while updating details",success:false,error})
    }
  }