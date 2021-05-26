import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';


function StartDate(props) {
    return (
        <Col >
            <Form.Group as={Row} controlId="startingDate">
                <Form.Label column >Start date</Form.Label>
                <Col >
                    <Form.Control
                        required
                        type="date"
                        value={props.startDate}
                        onChange={(event) => props.setStartdate(event.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>Please select one date</Form.Control.Feedback>
                </Col>
            </Form.Group>
        </Col>
    );
}

function EndDate(props) {
    return (
        <Col >
            <Form.Group as={Row} controlId="endingDate">
                <Form.Label column >End date</Form.Label>
                <Col >
                    <Form.Control
                        required
                        type="date"
                        value={props.endDate}
                        onChange={(event) => props.setEnddate(event.target.value)}

                    />
                    <Form.Control.Feedback  type='invalid'>Please select one date</Form.Control.Feedback>
                </Col>
            </Form.Group>
        </Col>
    );
}


const DATE = { StartDate, EndDate }
export default DATE;