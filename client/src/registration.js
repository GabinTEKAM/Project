import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import API from './API';

function Signup(props) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('')

    const [validated, setValidated] = useState(false)
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation();
            API.signUp({email, name, surname, password})
          console.log(  {email, name, surname, password})
        }
        else{
           event.preventDefault()
            event.stopPropagation(); 
        }
    }
    return (
        <Form validated={validated} noValidate onSubmit={handleSubmit} >
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={ev => setEmail(ev.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={ev => setPassword(ev.target.value)} />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder="Enter Your Name" onChange={ev => setName(ev.target.value)} />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Surname 2</Form.Label>
                <Form.Control type='text' placeholder="Enter your Surname" onChange={ev => setSurname(ev.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" >Confirm rental</Button>
            <Button variant="warning" type="reset">Reset</Button>
        </Form>
    );
}

export default Signup;