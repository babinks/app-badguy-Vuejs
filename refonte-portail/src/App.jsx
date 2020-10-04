import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GestionSalles from './components/GestionSalles.jsx';
import EmploiDuTemps from './components/EmploiDuTemps.jsx';
import Navbarlink from './components/Navbarlink.jsx';

import {BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (

    <div className="App">
      <Router>
        <Navbarlink />
        <Route path="/salles" exact component={GestionSalles} />
        <Route path="/edt" exact component={EmploiDuTemps} />
      </Router>
    </div>
  );
}

export default App;

