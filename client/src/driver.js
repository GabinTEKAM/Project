import React from 'react';
import { Form } from 'react-bootstrap';

function DriverAge(props) {
    return (
        <Form.Group >
            <Form.Label inline='true '>Driver age: &nbsp; &nbsp;  </Form.Label>
            <Form.Control type='number' min={18} required placeholder='Entrer First Driver age'
                value={props.driverAge} onChange={(event) => props.setDriverAge(event.target.value)} />
            <Form.Control.Feedback type='invalid'>Please driver age</Form.Control.Feedback>
        </Form.Group>
    );
}


function ExtraDriver(props) {
    return (
        <div>
            <Form.Group >
                <Form.Label inline='true '>Extra driver: &nbsp; &nbsp;  </Form.Label>
                <Form.Control type='number' required placeholder='Enter the number of extra driver' min='0' value={props.ExtraDriver}
                    onChange={event => props.setExtraDriver(event.target.value)}
                ></Form.Control>
                <Form.Control.Feedback type='invalid'>Specoify the number of extra driver</Form.Control.Feedback>
            </Form.Group>

        </div>
    );
}



const Driver = { DriverAge, ExtraDriver }
export default Driver;