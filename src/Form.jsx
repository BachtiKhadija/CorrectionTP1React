import {useState} from "react";

const Form=()=>{

  //let nom="RADI";
  const[nom,setNom]=useState("");
  const[prenom,setPrenom]=useState("");
  const handelSubmit=()=>{

  }
  const handelChangeNom=(e)=>{
   setNom(e.target.value);
  }
  const handelChangePrenom=(e)=>{
   setPrenom(e.target.value);
  }


    return(

        <>
       <form onSubmit={handelSubmit}>

         <label htmlFor="nom">Nom : </label><input  id="nom" value={nom} onChange={handelChangeNom}/><br/>

           <label htmlFor="prenom">Prenom : </label><input  id="prenom" value={prenom} onChange={handelChangePrenom}/><br/>






        <button>Envoyer</button>
       </form>
    <ul>
     <li>Nom : {nom}</li>

      <li>Prenom : {prenom}</li>
    </ul>

       </>
    )}
    export default Form;