const { error } = require('console');
const { result } = require('lodash');
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://anupriyamishra8423:c5j5Y8PcouBjRMsM@cluster0.g2eaebd.mongodb.net/meteryard',{ useNewUrlParser: true,useUnifiedTopology: true  })
.then(result=>{
    console.log("Database connected successfully.");
}).catch(error=>{})
