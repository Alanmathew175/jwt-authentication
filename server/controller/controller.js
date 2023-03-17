const User=require('../model/userModel')
const jwt=require('jsonwebtoken')
exports.postRegister=async(req,res)=>{
try {

    const {email,password}=req.body
    
    const user=new User({
        email,
        password
    })

    const userData=await user.save()
    if (userData) {
        res.status(200).json({message:'Registeration Successfull'})
    }else{
        res.status(500).json({error:'Something went wrong'})
    }
    
} catch (error) {
    console.log(error);
    res.status(500).json({error:'Something went wrong'})
}
}
exports.postLogin=async(req,res)=>{
    try {
        
        const {email,password}=req.body
        const userData=await User.findOne({email})
        console.log(userData);
        if (userData) {
            if (password===userData.password) {
                const token= jwt.sign({
                    email
                },'ssfer4hrte')
                res.status(200).json({token})
            }else {
                res.status(401).json({error:'Invalid email or password'})
            }
          
        }else {
            res.status(401).json({error:'Invalid email or password'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Something went wrong'})
    }

}