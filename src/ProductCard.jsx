



const ProductCard=(props)=>{
    

    return(
       <div style={{width:"200px",backgroundColor:"lightgreen",margin:"20px auto"}}>
          <p>Nom : {props.nom}</p>
          <p>prix : {props.prix}</p>
          <p>Categorie : {props.categorie}</p>
          <p>Disponibilité : {props.disponible?"Disponible":"non disponible"}</p>
       </div>

    )


}

export default ProductCard;