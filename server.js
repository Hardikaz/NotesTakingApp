require('dotenv').config()
const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())

const PORT=process.env.PORT

app.get("/",function(req,res){
    res.json("Namastey World!!! This is my notes taking app");
})

app.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})

// CONNECTING TO MONGODB
//MongoDB password - wH5W2p5O7L9QXbBH
const URI=process.env.MONGODB_URL
mongoose.connect(URI,{
    useCreateIndex: true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology: true,
},err =>{
    if(err) throw err;
    console.log("Connected to MongoDB")
})