import React from 'react';
import '../styles/cardSalles.css';


const Amphis = ({amphis, dispoAmphis})=>( 
    <div className="infoSalles">
        <h4>{amphis}</h4>
        <p>{dispoAmphis}</p>
    </div>
);

export default Amphis;