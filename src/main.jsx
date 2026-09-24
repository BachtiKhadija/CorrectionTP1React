import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Identification  from './Identification.jsx';
import {HandelVar} from "./HandelVar.jsx";
import Compteur from './Compteur.jsx';
import Salutation from  './Salutation.jsx';
import Form from './Form.jsx';
import ProductCard from "./ProductCard.jsx";
import Produits from './Produits.jsx';
import Exercice6 from './Exercice6.jsx';
import Users from "./Users.jsx";
import TodoList from './TodoList.jsx';
import Books from "./Books.jsx";
import ValidationForm from './ValidationForm.jsx';
import HandelForm from './HandelForm.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
< HandelForm/>
   
  </StrictMode>
)
