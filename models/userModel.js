const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    countryCode:{
        type:String
    },
    phoneNumber: {
        type: String,
        unique: true,
        required:true
    },
    notification: {
        type: Boolean,
        default:false
    },
    deviceToken:{
        type:String
    },
    deviceType:{
        type:String
    },
    userType:{
        type:String,
        enum:["BUYER","SELLER","ADMIN"]
    },
    profilePicture:{
        type:String
    },
    otp: {
        type: String
    },
    otpTimeExpire:{
        type:Number,
        default: Date.now()
    },
    accountVerify:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        enum:["ACTIVE","BLOCK","DELETE"],
        default:"ACTIVE"
    }
},{timestamps:true})
module.exports=mongoose.model("user",userSchema);
mongoose.model("user",userSchema).findOne({userType:"ADMIN"},(err,result)=>{
    if(err){
        console.log("Deafault Admin error :",err);
    }
    else if (result) {
        console.log("Default Admin");
    } else {
       let object={
           userType:"ADMIN",
           status:"ACTIVE",
           name:"Anupriya",
           countryCode:"+91",
           phoneNumber:"7084989669",
           accountVerify:true,
           email:"anupriyamishra8423@gmail.com",
           password:bcrypt.hashSync("admin1234"),
       };
       mongoose.model("user",userSchema).create(object,(err1,result1)=>{
           if (err1) {
               console.log("Default admin creation error :",err1)
           } else {
               console.log("Default admin created",result1);
           }
       });     
    }
})