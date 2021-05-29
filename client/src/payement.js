import dayjs from "dayjs";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import API from "./API";
import SucessPayment from "./confirmationPayment";

function Payment(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [car, setCar] = useState(props.car)
    const [cvv, setCvv] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [dateExp, setDateExp] = useState()
    const [validated, setValidated] = useState(false)
    const [submitted, setsubmitted] = useState(false)
    const [rental, setRental] = useState(props.rental);
    console.log(`rental`, rental)
    const handleSubmit = (event) => {
        console.log(`rental`, rental)
        event.preventDefault()
        const form = event.currentTarget;
        
        console.log(`form`, form)
        if (form.checkValidity()) {
            console.log(`rental`, rental)
            let rent = {
                startDate: dayjs(rental.startDate).format('YYYY-MM-DD'), 
                endDate: dayjs(rental.endDate).format('YYYY-MM-DD'), 
                id_car:car, 
                distance: rental.distance,
                extraInsurance: rental.extraInsurance, 
                driverAge: rental.driverAge, 
                id_user: 1,
                extraDriver: rental.extraDriver,
                amount: props.amount
            }
            console.log(`renty`, rent)
            API.addRental(rent)
            handleClose()
            setsubmitted(false)
        }
        else {
           setValidated(true)
        }
    }



    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
        </Button>
            {submitted && <SucessPayment /> }
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
                    <Form validated={validated} noValidate onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Label inline='true '>Card Number: &nbsp; &nbsp;  </Form.Label>
                            <Form.Control type='text' required placeholder='Card number' value={cardNumber}
                                onChange={event =>setCardNumber(event.target.value)}
                            ></Form.Control>
                            <Form.Control.Feedback type='invalid'>Enter your card number </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label inline='true '>Expriration date: &nbsp; &nbsp;  </Form.Label>
                            <Form.Control type='date' required placeholder='Card number' value={dateExp}
                                onChange={event => setDateExp(event.target.value)}
                            ></Form.Control>
                            <Form.Control.Feedback type='invalid'>Enter expiration date </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label inline='true '>CVV: &nbsp; &nbsp;  </Form.Label>
                            <Form.Control type='text' required placeholder='Card number' value={cvv}
                                onChange={event => setCvv(event.target.value)}
                            ></Form.Control>
                            <Form.Control.Feedback type='invalid'>fill out a CVV</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label inline='true '>Amount: &nbsp; &nbsp;  </Form.Label>
                            <Form.Control type='text' value={props.amount}  disabled

                            ></Form.Control>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
            </Button>  <Button variant="primary" type='submit'> Pay</Button>

                        </Modal.Footer>
                    </Form>

                </Modal.Body>

            </Modal>
        </>
    );
}

export default Payment