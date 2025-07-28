const express=require('express');
const router=express.Router();//router export
const controller=require("../controllers/controller")


// creaate router
router.post("/get-review",controller.getreview)

module.exports=router;