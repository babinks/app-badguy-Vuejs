import React from 'react';
import Amphis from './Amphis.jsx';
import '../../styles/cardSalles.css';

import { Container, Row } from 'react-bootstrap';


const Listamphis = ({list})=>( 
        <Container className="listCardAmphis">
            <Row>
            {list.map((amphis, index) => (
                <Amphis
                    key={`amphis${index}`}
                    {...amphis}
                />
            ))}
            </Row>
        </Container>
);

export default Listamphis;