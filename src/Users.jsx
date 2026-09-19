import {useState,useEffect} from 'react';
import UserCard from './UserCard.jsx';

const Users=()=>{
     //coder en js  
     //déclarer une variable  useState
     const[listu,setListu]=useState([]);
     //récupérr les données from api
     useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(data=>{setListu(data);console.log(data)});
     },[]);
     


    return (
        <div>
    {/*coder en jsx  */}
    <h3>nombre :{listu[0].username} </h3>
         {
            
            listu.map((u,pos)=>{
                 <UserCard key={u.id} u={u}/>

            })
         }
         </div>
       
    )






}
export default Users;