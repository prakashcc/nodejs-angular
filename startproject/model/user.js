const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
let UserModel = new mongoose.Schema({
    First_name : {type:String},
    Last_name : {type:String},
    Assets:[
        {
            Asset_type:{type:String},
            Asset_description :{type:String},
            Record_Id:{type:ObjectId},
            Asset_Purchase_date:{type:Date},
            Asset_Purchase_value:{type:Number},
            Asset_Market_value:{type:Number},
            Asset_Currency:{type:String},
            Asset_Logged_date:{type:Date,default:Date.now()}}]
    });

const Users = mongoose.model('Users', UserModel);
module.exports = Users;