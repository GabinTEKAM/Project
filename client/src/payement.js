import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import SuccesPayment from './confirmationPayment'
function Payment(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
        </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title> Payment </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group >
                            <Form.Label inline='true '>Card Number: &nbsp; &nbsp;  </Form.Label>
                            <Form.Control type='text' required placeholder='Card number' value={props.distance}
                                onChange={event => props.setdistance(event.target.value)}
                            ></Form.Control>
                            <Form.Control.Feedback type='invalid'>Enter your card number </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label inline='true '>Expriration date: &nbsp; &nbsp;  </Form.Label>
                            <Form.Control type='date' required placeholder='Card number' value={props.distance}

                            ></Form.Control>
                            <Form.Control.Feedback type='invalid'>Enter expiration date </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label inline='true '>CVV: &nbsp; &nbsp;  </Form.Label>
                            <Form.Control type='text' required placeholder='Card number' value={props.distance}

                            ></Form.Control>
                            <Form.Control.Feedback type='invalid'>fill out a CVV</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label inline='true '>Amount: &nbsp; &nbsp;  </Form.Label>
                            <Form.Control type='text'  value={props.amount}

                            ></Form.Control>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button> <Button onClick={handleClose}> <SuccesPayment /></Button>
           
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Payment