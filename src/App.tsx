import React, { useState } from 'react';

import './App.css';
import { Titre } from './components/titre';

function App() {
  const [page, setPage] = useState("accueil");
  return (
    <div className="App">
      <Titre></Titre>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
