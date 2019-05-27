const MongoClient = require('mongodb').MongoClient
ObjectID = require("mongodb").ObjectID;
const DB_NAME = "bank";
const HOST = "mongodb://localhost:27017";

class MongoHelper {
  static create(coll, payload) {
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.insertOne(payload);
    });
  }

  static getOne(coll,id){
    return MongoClient.connect(
      HOST,
      {useNewUrlParser:true}
    ).then(client=>{
      const collection= client.db(DB_NAME).collection(coll);
      return collection.findOne({ _id: ObjectID(id)});
    })
  }

  static getall(coll){
    return MongoClient.connect(
      HOST,
      {useNewUrlParser:true}
    ).then(client=>{
      const collection= client.db(DB_NAME).collection(coll);
      return collection.find().toArray();
    })
  }

  static deleteOne(coll,id){
    return MongoClient.connect(
      HOST,
      {useNewUrlParser:true}
    ).then(client=>{
      const collection= client.db(DB_NAME).collection(coll);
      return collection.deleteOne({ _id: ObjectID(id)});
    })
  }

  static update(coll,id,payload){
    return MongoClient.connect(
      HOST,
      {useNewUrlParser:true}
    ).then(client=>{
      const collection= client.db(DB_NAME).collection(coll);
      const details={[payload.key]:payload.value}
      return collection.updateOne({ _id: ObjectID(id)},{$set:details});
    })
  }

  static addAccount(coll,id,payload){
    return MongoClient.connect(
      HOST,
      {useNewUrlParser:true}
    ).then(client=>{
      const collection= client.db(DB_NAME).collection(coll);
      return collection.updateOne({ _id: ObjectID(id)},{$push:{accounts:payload}});
    })
  }

}

module.exports = MongoHelper;
