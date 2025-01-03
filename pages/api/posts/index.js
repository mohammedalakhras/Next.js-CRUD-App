import connectDB from "@/utils/connectDB";
import nc from 'next-connect'
import Post from '@/models/post'
import post from "@/models/post";

connectDB()

const handler =nc().post(


    async (req,res)=>{
        const {title,url,details}=req.body
        try{
            const newPost=new Post({title,url,details})
            await newPost.save();
            res.status(200).send("Added to Database")
        }
        catch(err){

        }
    }
).get(
    

    async (req,res)=>{
        try{
            const posts=await post.find({})

           
            res.status(200).send(posts)
        }
        catch(err){

        }
    }
)

export default handler