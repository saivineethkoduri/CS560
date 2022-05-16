const express = require("express");
const req = require("express/lib/request");

const router = express.Router();
router.get("/listUsers", function(request , response, next){
    const payload ={
        name:"vineeth"
    }
    response.send(payload)

})
router.post("/postUsers", function(request , response, next){
    const post =request.body;
    const req = {
        name : "siva",
       password : "1234",
       profession : "student",
       id: 1
    }
console.log(post , 'my post request');
response.end(JSON.stringify (req));

})
module.exports = router

router.put("/putUsers", function(request , response, next){
    const put =request.body;
    const req = {
        name : "veera",
       password : "1234",
       profession : "student",
       id: 1
    }
console.log(put , 'my post request');
response.end(JSON.stringify (req));

})
module.exports = router
router.delete("/deleteUsers", function(request , response, next){
    response.send("Delete request executed") 
    // This is a delete 

})
