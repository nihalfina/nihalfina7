//    Creating http server....

const express = require ('express');
const dotenv = require ('dotenv');
const morgan = require ('morgan');
const app = express();
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require('./assets/database/connection')


dotenv.config({path:'config.env'})

const PORT = process.env.PORT || 3000 
const USER_PORT =  process.env.LOGIN_PORT || 3001
const SELLER_PORT = process.env.SELLER_PORT || 3002                            

// log request
app.use(morgan("tiny"));

// mongodb connection
connectDB();

app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));

// Load router
app.use('/', require('./server/contents/router'))
app.listen(PORT,()=>{
    // console.log(`Server is running on http://localhost:${PORT}`)
})

// for user login

app.use('/', require('./server/login_Users/router'))
app.listen(USER_PORT,()=>{
    // console.log(`Server is running on http://localhost:${USER_PORT}`)
})


// for seller login

app.use('/', require('./server/seller_Users/router'))
app.listen(SELLER_PORT,()=>{
    // console.log(`Server is running on http://localhost:${USER_PORT}`)
})