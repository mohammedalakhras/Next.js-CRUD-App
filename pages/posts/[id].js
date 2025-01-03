import domain from "@/utils/config";
import axios from "axios";
import { useRouter } from "next/router"
import { useState } from "react"

export default function PostID({postdata}) {
  const router=useRouter();

const [title,setTitle]=useState(postdata.title);    
const [url,setUrl]=useState(postdata.url);    
const [details,setDetails]=useState(postdata.details);    


async function updatePost(){

  const post ={title,url,details}
  console.log(post);

  try{
    await axios.put(`${domain}/posts/${postdata._id}`,post)
    alert('Post Updated')

  }
  catch(err){

  }
}


    return (
      <>
     
      
      <h1 style={{textAlign:"center"}}>Update Post :{router.query.id} </h1>
      <div className="container">

        <div className="mb-3 row">
                <div className="col-8">
                    <input type="text" className="form-control" name="title" placeholder="Tiltle"
                    value={title}
                    onChange={e=>{setTitle(e.target.value)}}
                    />
                </div>
            </div>
          <br/>

            <div className="mb-3 row">
                <div className="col-8">
                    <input type="text" className="form-control" name="url"  placeholder="Image URL" 
                      value={url}
                      onChange={e=>{setUrl(e.target.value)}}/>
                </div>
            </div>
          <br/>
        
          <div className="mb-3 row">
            <div className="col-8">
            <textarea className="form-control" name="details" rows="3" placeholder="Details"
              value={details}
              onChange={e=>{setDetails(e.target.value)}}
            ></textarea>
          </div>
          </div>


            <div className="mb-3 row">
                <div className="offset-sm-4 col-sm-8">
                    <button  className="btn btn-primary" onClick={updatePost}>Update Post  </button>
                </div>
            </div>
      </div>
          
          </>
    )
  }

  export async function getServerSideProps(context) {
    const res = await axios.get(`${domain}/posts/${context.query.id}`)
    return { props: {  
      postdata: res.data
    } }
  }
  