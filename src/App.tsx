import React, { useEffect, useState } from 'react';
import './App.css';
import { Titre } from './components/titre';
import { Table } from './components/table';
import { BtnAdd } from './components/btnAdd';

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
      return data.json()})
    .then(produits => {
      console.log(produits);
      setListProduit(produits.data);
    })
    .catch(error => console.error(error));
  },[])
  return (
    <div className="App">
      <Titre></Titre>
      <header className="App-header">
      {page === "accueil" && <BtnAdd></BtnAdd>}
      <Table produits={listProduit}></Table>
      </header>
    </div>
  );
}

export default App;
