
import {useState} from 'react';
function Compteur() {

   //ici, on doit écrire en javascript 
     //let compteur = 0; =>n'est pas recommandée , parce que compteur impacte le UI du composant 
        const[compteur,setCompteur] = useState(0);
     const incrementer = () => {

      
        setCompteur(compteur + 1);//setCompteur(prev=>prev+1)
         console.log(compteur);


     }
     const decrementer = () => {
        
        setCompteur(compteur - 1);
        }

        const reset = () => {  
            setCompteur(0);
        }

    return(
        <>
    {/*ici on code en jsx*/}
       <div>
          <p>Compteur :{compteur} </p>
   {/*<button onClick={()=>{setCompteur(compteur + 1);console.log(compteur);}}>incrementer</button><button onClick={()=>{setCompteur(compteur - 1);}}>decrementer </button><button onClick={()=>{setCompteur(0);}}>reset </button>*/}
<button onClick={incrementer}>incrementer</button><button onClick={decrementer}>decrementer </button><button onClick={reset}>reset </button>


    </div>
         </>


    )


}

export default Compteur;