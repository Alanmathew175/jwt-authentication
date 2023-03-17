const express=require('express')
const router=express.Router()
const controller=require('../controller/controller')
router.route('/register').post(controller.postRegister)
router.route('/').post(controller.postLogin)
module.exports=router