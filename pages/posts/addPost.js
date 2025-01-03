import { useState } from "react"
import domain from "@/utils/config";
import axios from "axios";



export default function addPost() {

const [title,setTitle]=useState('');    
const [url,setUrl]=useState('');    
const [details,setDetails]=useState('');    




async function addPost(){

    const post ={title,url,details}
    console.log(post);

    try{
      await axios.post(`${domain}/posts`,post)
      alert('Post Added')

    }
    catch(err){

    }
}
    return (
      <>
      <h1 style={{textAlign:"center"}}>Add Post Page</h1>
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
                    <button  className="btn btn-primary" onClick={addPost}>Add Post  </button>
                </div>
            </div>
      </div>
          </>
    )
  }
  