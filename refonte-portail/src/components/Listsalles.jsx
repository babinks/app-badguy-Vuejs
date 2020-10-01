import React from 'react';
import Salles from './Salles.jsx';
import '../styles/cardSalles.css';

import { Container, Row } from 'react-bootstrap';


const Listsalles = ({list})=>( 
        <Container className="listCardAmphis">
            <Row>
            {list.map((salles, index) => (
                <Salles
                    key={`salles${index}`}
                    {...salles}
                />
            ))}
            </Row>
        </Container>
);

export default Listsalles;