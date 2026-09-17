import { useState } from "react"
const Exercice5=(props)=>{

  const[likes,setLikes]=useState(0);
 const handelDeslike=()=>{

    setLikes(likes-1);
    if(likes<=0) setLikes(0);
     }

  return(
   <div>
          <h3>Titre : {props.titre}</h3>
          <p>Description : {props.description}</p>
          <span style={{color:"red"}}>{likes} likes</span><br/>

          <button onClick={()=>setLikes(likes+1)}>Like</button>
             <button onClick={handelDeslike}>DesLike</button>





   </div>


  )



}
export default Exercice5;