var express = require('express');
var router = express.Router();

const MongoHelper = require ('../db/mongo_helper');

/* CREATE a new customer */
router.post("/",function(req,res){
  MongoHelper.create("customers", req.body).then(result=>{
    res.status(201).json('New Customer Added');
  })
});

/* GET ALL customers*/
router.get("/all",function(req,res){
  MongoHelper.getall('customers').then(result=>{
    res.status(200).json(result);
  })
})

/* GET ONE customer*/
router.get("/:id",function(req,res){
  MongoHelper.getOne('customers',req.params.id).then(result=>{
    res.status(200).json(result);
  })
})

/* DELETE ONE customer*/
router.get("/:id",function(req,res){
  MongoHelper.deleteOne('customers',req.params.id).then(result=>{
    res.status(201).json('Customer Deleted');
  })
})

/* DELETE ONE customer*/
router.delete("/:id",function(req,res){
  MongoHelper.deleteOne('customers',req.params.id).then(result=>{
    res.status(204).json('Customer Deleted');
  })
})

/* UPDATE ONE customer*/
router.put("/:id",function(req,res){
  MongoHelper.update('customers',req.params.id,req.body).then(result=>{
    res.status(200).json('Customer Updated');
  })
})

/* ADD a customer account*/
router.put("/account/:id",function(req,res){
  MongoHelper.addAccount('customers',req.params.id,req.body).then(result=>{
    res.status(201).json('Account Added');
  })
})




module.exports = router;
