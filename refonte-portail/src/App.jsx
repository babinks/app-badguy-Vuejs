import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.jsx';
import Listamphis from './components/Listamphis.jsx';
import Listsalles from './components/Listsalles.jsx';

import dataAmphis from './dataAmphis.json';
import dataSalles from './dataSalles.json';


function App() {
  return (
    <div className="App">
      <body>
        
        <h2>occupations des salles</h2><br></br>
        <Header />

        <div className="pulvAmphis">
          <h3>PULV-Amphis</h3><br/>
          <Listamphis list={dataAmphis} />
        </div>

        <div className="pulvAmphis">
          <h3>ILV-IIM-Salles </h3><br/>
          <Listsalles list={dataSalles} />
        </div>

      </body>
    </div>
  );
}

export default App;

