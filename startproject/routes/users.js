var express = require('express');
const mongoose = require('mongoose');
const Users = require('../model/user');
var router = express.Router();

/* GET users listing. */
router.get('/getdetails',async function(req, res, next) {
 try{
     // Code to get all the details from user schema
     let getalldetail = await Users.find();

     // Checking if data is available display it else show no record found
     if(getalldetail){
         return res.send({status:true, message:"Sucessfull",data:getalldetail});
     }
     else{
         return res.send({status:true, message:"No Records Found"});
     }

 }
  catch (error) {
      return res.send({status:false, message:"Error Occured in Server"});
  }
});


router.get('/getoneobject/:id',async function(req, res, next){
    try{

        let mydata = await Users.findById((req.params.id));
        if(mydata){
           //console.log(mydata.Assets['id']=='5c7a96bb382cfc511057921e');
          // console.log(mydata)
          return res.send({status:true, message:"Sucessfull",data:mydata});

        }
        else {
            return res.send({status:false, message:"No Data Found"});
        }


    }
    catch (error) {
        return res.send({status:false, message:"Error Occured in Server"});
    }
})

router.post('/postdetails',async function(req,res,next){
  try{
      let assetdetails = new Users({
          First_name:req.body.first_name,
          Last_name:req.body.last_name,
          Assets:req.body.assets
      });
    console.log(assetdetails);
      let mydetails = await assetdetails.save();
      return res.send({status:true, message:"Sucessfull",data:mydetails});

  }
  catch (error) {
      return res.send({status:false, message:"Error Occured in Server"});
  }

});

router.delete('/deleteone/:objectid', async function(req,res,next) {
  try {
     objectdetail = req.query.objectid;
     console.log(objectdetail);
     let check = Users.findOne({id:objectdetail});
     if(check){
       let assetdelete = await Users.delete(check);
       return res.send({status:true, message:"Asset Delete Sucessfull",data:assetdelete});
     }
     else {
         return res.send({status:false, message:"No Asset Found"});
     }
  }
  catch (error) {
      return res.send({status:false, message:"Error Occured in Server"});
  }


})

module.exports = router;
