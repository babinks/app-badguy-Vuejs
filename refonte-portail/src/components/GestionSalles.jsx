import React from 'react';

import Header from './gestionSalles/Header.jsx';
import Listamphis from './gestionSalles/Listamphis.jsx';
import Listsalles from './gestionSalles/Listsalles.jsx';

import dataAmphis from '../dataAmphis.json';
import dataSalles from '../dataSalles.json';



function GestionSalles() {
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

export default GestionSalles;