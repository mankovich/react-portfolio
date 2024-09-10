import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './style.css'

function ContactForm() {
    const [errors, setErrors] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    const validateForm = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required'
        if (!email) newErrors.email = 'Email is required';
        else if (!validateEmail(email)) newErrors.email = 'Invalid email address';
        if (!message) newErrors.message = 'message is required';
        return newErrors;
      };

      function handleSubmit(e) {
        e.preventDefault();
        const formErrors = validateForm();
        if (formErrors) setErrors(formErrors);
      }

    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nameInput">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Your name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}   
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> 
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="emailInput">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="name@example.com" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}   
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback> 
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="messageInput">
                                <Form.Label>Message</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={10} 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}   
                                    isInvalid={!!errors.message}
                                />
                                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback> 
                            </Form.Group>
                            <Button variant="primary" size="sm" type="submit" id="login-btn">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactForm;