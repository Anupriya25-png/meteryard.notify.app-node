const express = require('express')
const app = express()
const config=require('./config/config'); 
require('./dbConnectivity/dbConnection');

app.use(express.json({limit:'1000mb'}));
app.use(express.urlencoded({extended:true,limit:'100mb'}));
// app.use('/api/v1/user',require('./routers/userRouter'));
app.listen(global.gConfig.node_port,()=>{
    console.log("server is running on port :",global.gConfig.node_port);
})