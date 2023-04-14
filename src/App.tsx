import React, { useEffect, useState } from 'react';
// import './App.css';
import { Titre } from './components/titre';
import { Tableau } from './components/table';
import { BtnAdd } from './components/btnAdd';
import { AppService } from './app.service';

export interface Produit {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

function App() {
  const [listProduit, setListProduit] = useState<Produit[]>([]);
  const [page, setPage] = useState("accueil");

  useEffect(() => {
    fetch('http://localhost:8000/produits')
      .then(data => {
        return data.json()
      })
      .then(produits => {
        console.log(produits);
        setListProduit(produits.data);
      })
      .catch(error => console.error(error));
  }, [])
  return (
    <div className="App">
      <Titre></Titre>
      <header className="App-header">
        {page === "accueil" && <BtnAdd></BtnAdd>}
        <Tableau produits={listProduit}></Tableau>
      </header>
    </div>
  );
}

export default App;
