import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import API from './API';


function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false)

    const login = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity) {
            event.preventDefault()
            event.stopPropagation();
            // if (password.length<8) return false
            API.login({email, password})
         }
    }

    return (
        <Form validated={validated} noValidate onSubmit={login}>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email
          </Form.Label>
                <Col sm="10">
                    <Form.Control type='email' placeholder=" like email@example.com"  onChange ={ev=> setEmail(ev.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
          </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder=" Enter your Password"   onChange ={ev=> setPassword(ev.target.value)} />
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit" >Login</Button>
            <Button variant="warning" type="reset">Reset</Button>
        </Form>
    );
}

export default Login;