import React from 'react';
import '../../styles/Cours.css';

const RecapCours = () => (

    <div className="card_recap_cour">

        <div className="jour">
            <h2>Jour</h2>
            <p>Mardi 07 avril 2020</p>
        </div>

        <div className="matin">
            <h2>Matin</h2>
            <h5>Nom du cour</h5>
            <p>Nom de l'intervenant</p>
        </div>

        <div className="apresmidi">
            <h2>Après-midi</h2>
            <h5>Nom du cour</h5>
            <p>Nom de l'intervenant</p>
        </div>

        <div className="evenement">
            <h2>Evenements</h2>
            <ul>
                <li>Journée rotonde</li>
            </ul>
        </div>


    </div>

);

export default RecapCours;
