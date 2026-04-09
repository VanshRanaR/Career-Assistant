const mongoose =  require("mongoose")

async function connectTodb() {
 try{
   await mongoose.connect(process.env.MONGO_URI)
   console.log("Connected to database")
 }
 catch(err){
     console.log(err);
 }
    
}
module.exports = connectTodb