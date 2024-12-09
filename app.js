const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");

const MONGO_url="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_url);
}

app.get("/",(req,res)=>{
    res.send("Hi I am robot");
});

app.get("/testListing",async(req,res)=>{
    let sampleListing=new Listing({
        title:"My new villa",
        description:"By the beach",
        price:1200,
        location:"Calangute,Goa",
        country:"India",
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
});

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});

//daljeet singh mahal
