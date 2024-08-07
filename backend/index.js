const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");  //for image storage system
const path = require("path");
const cors = require("cors");  //to provide access to react.js project
const axios= require("axios");  //for the aqi-api

app.use(express.json());
app.use(cors());  //connects react frontend to backend

// Database Connection with mongodb
const config = require('./config.json');
const API_KEY = config.apikey;

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }); //Remember to encode passk with uri in case of special chars (%40 for @)

//API Connection
app.get("/",(req,res)=>{
    res.send("Express App is running");
})

// Route to fetch AQI data
// Route to fetch AQI data
// app.get('/api/aqi', async (req, res) => {
//     const { lat, lon } = req.query;
//     console.log("Fetching AQI data for lat:", lat, "lon:", lon); // Add this line
//     try {
//         const response = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
//         const aqiComponents = response.data.list[0].components;
//         console.log("AQI data:", aqiComponents); // Add this line
//         res.json(aqiComponents);
//     } catch (error) {
//         console.error("Error fetching AQI data:", error.message);
//         res.status(500).json({ error: 'Error fetching AQI data' });
//     }
// });


// Image Storage Engine

const storage  = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})

//creating upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload", upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for Creating Products

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    inst:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})
//req indicates request, and res indicates response
app.post('/addproduct',async (req,res) =>{
    let products = await Product.find({});
    let  id;
    if(products.length>0) 
    {
        let last_product_array=products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else { id=1;}
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,  
        desc:req.body.desc,
        inst:req.body.inst,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating API for deleting Products

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating API for getting all products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

// Schema creation for user model
const Users = mongoose.model('Users', {
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
}) 

//Creating Endpoint for Registration of user
app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email adress"})
    }
    let cart = {};
    for(let i=0; i<300; i++)
    {
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    //using jwt auth.

    const data={
        user:{
            id:user.id
        }
    }
    const token=jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//Creating Endpoint for user-login
app.post('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare)
        {
            const data={
                user: {
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"});
    }
})

//Creating Middleware to fetch user
const fetchUser = async(req,res,next) =>{
    const token = req.header('auth-token');
    if(!token)
    {
        res.status(401).send({errors:"Please authenticate using valid token"});
    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        }
        catch(error){
            res.status(401).send({errors:"please authenticate using a valid token"})
        }
    }
}

//Creating endpoint for adding products in cart
app.post('/addtocart',fetchUser,async(req,res)=>{
    console.log("Added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]++;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData}); //finds and updates modified data for user.
    res.send("Added");
})

//Creating endpoint to remove product from cartdata
app.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]--;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData}); //finds and updates modified data for user.
    res.send("Removed");
})

//Creating endpoint to get CartData
app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

app.listen(port,(error)=>{
    if(!error)
    {
        console.log("Server Running on Port "+port); return null;
    }
    else
    {
        console.log("Error: "+error);
    }
})
