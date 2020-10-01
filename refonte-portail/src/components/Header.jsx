import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Grid } from '@material-ui/core';


const Header = ()=>( 
    <Grid container direction="row" justify="space-around" alignItems="baseline">
    <Form.Group controlId="formGridState">
      <Form.Control as="select" defaultValue="Mardi 14 avril 2020" style={{width: '250px'}}>
        <option>Mardi 14 avril 2020</option>
        <option>Mercredi 15 avril 2020</option>
        <option>Jeudi 16 avril 2020</option>
        <option>Vendredi 17 avril 2020</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
        <Button variant="primary">Mes réservations</Button>
    </Grid>
);

export default Header;