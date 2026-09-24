import {useState,useRef} from 'react';

export const HandelVar=()=>{
    let countLet=0;
    const countRef=useRef(0);
    const[countState,setCountState]=useState(0);

   const handelClick=()=>{
          countLet++;
          countRef.current++;
         console.log(`countRef =>${countRef.current}`);
      console.log(`countLet =>${countLet}`);
         setCountState(prev=>prev+1);
       //let => perd sa valeur aprés un render 
             //=>cas d'utilisation : variable temporaire
        //useRef => garde sa valeur aprés  un render , mais sa modif ne déclenche 
                 //un render
                 //les vars qui doivent garder leurs valeurs entre deux render,
                 //mais ne s'affichent dans le UI du composant
        //useState => garde sa valeur aprés  un render , ET déclenche 
                 //un render aprés sa modification
                 //les vars qui doivent garder leurs valeurs entre deux render,
                 //et qui s'affiche dans le UI du composant => impact le UI de l'app





   }








    return(
       <div className="container mx-5 my-5">

          <p>countLet : {countLet}</p>
        <p>countRef : {countRef.current}</p>
       
        <button onClick={handelClick}>Incrementer</button>
       
       
       
       
       </div>


    )

}