import Image from "next/image"
import png404 from "../public/png404.png"
export default function NotFound(){

    return <>

    <h1>Sorry Not Found</h1>
    <Image src={png404} 
    width={500}
    height={500}
    
    />
    </>
}