var express = require('express');
var router = express.Router();

const MongoHelper = require ('../db/mongo_helper');

/* CREATE a new account for customer id:id */
router.post("/",function(req,res){
  MongoHelper.create("posts", req.body).then(result=>{
    res.status(201).json('New Customer Added');
  })
});

/* GET ALL customers*/
router.get("/",function(req,res){
  MongoHelper.getall('posts').then(result=>{
    res.status(200).json(result);
  })
})


module.exports = router;
