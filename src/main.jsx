import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Identification  from './Identification.jsx';
import Compteur from './Compteur.jsx';
import Salutation from  './Salutation.jsx';
import Form from './Form.jsx';
import ProductCard from "./ProductCard.jsx";
import Produits from './Produits.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Compteur/>
   
  </StrictMode>,
)
