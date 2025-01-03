import domain from "@/utils/config";
import axios from "axios";
import { useRouter } from "next/router";

export default function PostItems({posts})
{

  const router=useRouter()

async function deletePost(id){


  
    try
    {
      const res = await axios.delete(`${domain}/posts/${id}`)
      console.log(id,"deleted");
      alert("Deleted")  
      router.push('/posts')

    }

    catch(err){

    }



}


 return posts.map(e => {
        return(
            <div className="container text-center">
            <div className="row">
              <div className="col">
                
              </div>
              <div className="col">
                
                
        <div className="card" style={{width: "18rem"}}>
  <img src={e.url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{e.title}</h5>
    <p className="card-text">{e.details}</p>
  </div>
  <button type="button" className="btn btn-success" onClick={()=>{router.push(`/posts/${e._id}`)}}>Edit</button>
  <br />
  <button type="button" className="btn btn-danger" onClick={()=>{ deletePost(e._id)}}>Delete</button>

</div>
        <br />      </div>
              <div className="col">
                
              </div>
            </div>
          </div>
          
       
        );
}
 );   
 
}