import connectDB from "@/utils/connectDB";
import nc from 'next-connect'
import Post from '@/models/post'
import post from "@/models/post";

connectDB()

const handler =nc().
get(
    

    async (req,res)=>{
        try
        {
            const posts=await post.findOne({_id:req.query.id})

           
            res.status(200).send(posts)
        }
        catch(err){

        }
    }
).put(
    

    async (req,res)=>{
        try
        {
            const posts=await post.findOne({_id:req.query.id})

            posts.title = req.body.title
            posts.url=req.body.url
            posts.details=req.body.details
            await posts.save();   
            res.status(200).send("Post Updated")
        }
        catch(err){

        }
    }
).delete(
    

    async (req,res)=>{
        try
        {
            const posts=await post.findOneAndDelete({_id:req.query.id})

            res.status(200).send("Post Deleted")
        }
        catch(err){
console.log(err);
        }
    }
)

export default handler