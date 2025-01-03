const mongoose=require('mongoose')

async function connectDB(){

    try {await mongoose.connect(process.env.mongodb,
    {useUnifiedTopology:true,useNewUrlParser:true}
    )
    console.log("Connected Successfully !");
}
catch(err){
    console.log("DB Connection Error",err);

}
}
export default connectDB;