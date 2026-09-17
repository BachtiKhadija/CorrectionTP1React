import {useState} from 'react';
const Exercice6=()=>{

 const listProduits=[{nom:"ordinateur",prix:5000},{nom:"smartwatch",prix:1200},{nom:"voiture",prix:1000000}];
  const[selectedP,setSelectedP]=useState(null);
const handelSelect=(e)=>{
   setSelectedP(listProduits[e.target.id]);
console.log(selectedP.prix);


}


 return(
    <>
<table>
    {
      listProduits.map((p,pos)=>
        
      <tr key={pos}><td>{p.nom}</td><td>{p.prix}</td><td><button id={pos} onClick={handelSelect}>selectinner</button></td></tr>


           )
    }
 </table>


<ul>
   
</ul>
</>

 )}

 export default Exercice6;







