import React from 'react';
import RecapCours from './edt/Recap-Cours.jsx';
import IndicRecapCours from './edt/Indic-Recap-Cours.jsx';
import Calendrier from './edt/Calendrier.jsx';
import IndicCalendrier from './edt/Indic-Calendrier.jsx';
import { Grid } from '@material-ui/core';

const Cours = () => (

<div className="App">
      <header className="App-header">

          <Grid container spacing={3} alignItems="flex-start">
                <Grid item xs={12} sm={12} md={3}  justify="flex-start" alignItems="stretch" direction="row" >
                      <Grid item direction="column"  >
                      <IndicRecapCours/>
                      <RecapCours/>
                      </Grid>
                </Grid>



                <Grid item xs={12} sm={12} md={9} >
                    <Grid item direction="column" >
                       <IndicCalendrier/>
                       <Calendrier/>
                    </Grid>
                </Grid>
          </Grid>

      </header>
    </div>



);



export default Cours;
