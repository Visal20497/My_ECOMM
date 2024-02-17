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