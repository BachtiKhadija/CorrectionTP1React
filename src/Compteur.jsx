
import {useState} from 'react';
function Compteur() {

   //ici, on doit écrire en javascript 
     //let compteur = 0; =>n'est pas recommandée , parce que compteur impacte le UI du composant 
        const[compteur,setCompteur] = useState(0);
        const [msg,setMsg]=useState('null');
     const incrementer = () => {

      
        setCompteur(compteur + 1);//setCompteur(prev=>prev+1)
         console.log(compteur);
         
        setMsg(compteur>0?"positif":(compteur<0)?"negatif":"null");

     }
     const decrementer = () => {
        
        setCompteur(compteur - 1);
           setMsg(compteur>0?"positif":(compteur<0)?"negatif":"null");
        }

        const reset = () => {  
            setCompteur(0);
               setMsg(compteur>0?"positif":(compteur<0)?"negatif":"null");
        }

    return(
        <>
    {/*ici on code en jsx*/}
       <div>
          <p>Compteur :{compteur} </p>
   {/*<button onClick={()=>{setCompteur(compteur + 1);console.log(compteur);}}>incrementer</button><button onClick={()=>{setCompteur(compteur - 1);}}>decrementer </button><button onClick={()=>{setCompteur(0);}}>reset </button>*/}
<button onClick={incrementer}>incrementer</button><button onClick={decrementer}>decrementer </button><button onClick={reset}>reset </button>

<p> {msg}</p>
    </div>
         </>


    )


}

export default Compteur;