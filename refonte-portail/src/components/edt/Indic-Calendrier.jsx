import React from 'react';
import '../../styles/Cours.css';
import Button from '@material-ui/core/Button';


const IndicCalendrier = () => (

    <div className="card_indic_calendrier">
        <Button  onClick={() => { alert('clicked') }} variant="contained" color="black" disableElevation>
            +   Ajouter un évenement
        </Button>
        <p>  Avril 2020  </p>
    </div>

);



export default IndicCalendrier;
