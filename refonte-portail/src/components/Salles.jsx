import React from 'react';
import '../styles/cardSalles.css';


const Salles = ({salles, dispoSalles})=>( 
    <div className="infoSalles">
        <h4>{salles}</h4>
        <p>{dispoSalles}</p>
    </div>
);

export default Salles;