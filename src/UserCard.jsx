
const UserCard=({u})=>{



    return(

     <div className="card">
        <h3 className="card-title">Nom : {u.name}</h3>
        <p className="card-body">username : {u.username} -  city : {u.address.city}</p>

     </div>

    )

}

export default UserCard;