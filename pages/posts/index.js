import PostItems from "@/components/PostItems";
import domain from "@/utils/config"
import axios from "axios"

export default function Post({postData}) {
    return (
      <>
      <h1 style={{textAlign:"center"}}>Index Post Page</h1>

     <PostItems posts={postData} />

      
          </>
    )
  }


  export async function getStaticProps() {
 try{
   const res= await axios.get(`${domain}/posts`);
    return (
    {
      props: {
        postData:res.data
      }
    }
    );
  }
  catch(err){
    console.log("ERROR in Request");
return { props: {}  }

  }
}