
import ProductCard from "./ProductCard";

const Produits=()=>{

const listP=[{nom:"prod1",prix:"100",categorie:"cat1",disponible:true},{nom:"prod2",prix:"200",categorie:"cat1",disponible:false},{nom:"prod3",prix:"300",categorie:"cat2",disponible:true}];




return(

     <>
      {
        listP.map((item,pos)=>(
               <ProductCard nom={item.nom} prix={item.prix} categorie={item.categorie} disponible={item.disponible}/>

        ))
      }
       
     </>

)}

export default Produits;





