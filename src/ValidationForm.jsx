


import { useState } from "react";

const ValidationForm=()=>{

   const villes=["Agadir",'Rabat','Casablanca','Safi'];
   //déclarer les variables d'état
 
     const[nom,setNom]=useState("");
     const[prenom,setPrenom]=useState("");

     const[email,setEmail]=useState("");
     const[gender,setGender]=useState("");
     const[ville,setVille]=useState("");
     const[display,setDisplay]=useState(false);
      const[errors,setErrors]=useState({});


   const validate=()=>{
       let res={};
          if(nom==="")res["nom"]="le nom est obligatoire !!!!";
          else if(!/^[a-zA-Z]{2}/.test(nom))res["nom"]="le nom est invalide !!!!";

           if(gender==="")res["gender"]="le gender est obligatoire !!!!";
           if(ville==="")res["ville"]="la ville est obligatoire !!!!";
            if(email==="")res["email"]="l email est obligatoire !!!!";
            else if(!email.includes("@"))res["email"]="l email est invalide !!!!";
          return res;

   }








const handelSubmit=(e)=>{
    e.preventDefault();
   setErrors(validate());
   console.log(errors);

    if(Object.keys(errors).length===0)
         setDisplay(true);
}






    return(

        <div className="container my-5 p-3 text-start">
              <form onSubmit={handelSubmit}>
                  <div className="mb-3 text-start">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" name="nom" className="form-control" value={nom} onChange={(e)=>setNom(e.target.value)} />
                    <span className="text-danger">{errors.nom}</span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" id="prenom" name="prenom" className="form-control" value={prenom}  onChange={(e)=>setPrenom(e.target.value)}  />
                          <span className="text-danger">{errors.prenom}</span>
                  </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />

                          <span className="text-danger">{errors.email}</span>
                </div>
              <div className="mb-3 text-start ">
                   
                    <input type="radio" name="gender" value="male" onClick={(e)=>setGender(e.target.value)}  /> {/*gender==="male"?"checked":""*/}Male &nbsp;&nbsp;
                 <input type="radio" name="gender" value="female"  onClick={(e)=>setGender(e.target.value)} /> {/*gender==="male"?"checked":""*/} Female 
                  <br/>      <span className="text-danger">{errors.gender}</span>

                </div>

               <div className="mb-3">
        
                 <label htmlFor="ville">Ville</label>
                    <select  id="ville" name="ville" value={ville} className="form-select" onChange={(e)=>setVille(e.target.value)}>
                          <option>Choisir une ville ...</option>)
                       {

                        villes.map((v,pos)=> 
                             <option key={pos} value={v}>{v}</option>)
                       }

                    </select>
                          <span className="text-danger">{errors.ville}</span>


                </div>
              
           <div className="mb-3">
            <button type="submit" className="btn btn-primary">Envoyer</button>
           </div>



              </form>


              {

               display &&(
                   <div className="my-3 mx-5">

                     <ul>
                         <li>Nom : {nom}</li>
                         <li>Prenom : {prenom}</li>
                         <li>Gender : {gender}</li>
                         <li>Ville : {ville}</li>
                     </ul>



                    </div>
               )


              }







        </div>






    )
}

export default ValidationForm;