import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({...form, [field]: value});
  };

  const findFormErrors = () => {
    const { name, email, message } = form;
    const newErrors = {};

    if (!name || name === '') {
        newErrors.name = 'cannot be blank';
    }
    
    if (!email || email === '') {
        newErrors.email = 'cannot be blank';
    } else if (!/@/.exec(email)) {
        newErrors.email = 'bad email'
    }

    if (!message || message === '') {
        newErrors.message = 'cannot be blank';
    }

    return newErrors;
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }
  };

    const button = {
      marginTop: "20px",
    }

  return (
    <div>
      <h1>Contact</h1>
      <Form style={{ width: "500px" }}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={e => setField('name', e.target.value)}
            onBlur={e => setErrors(e.target.value === '' ? {name: 'required' } : {})}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            onChange={e => setField('email', e.target.value)}
            onBlur={e => setErrors(e.target.value === '' ? {email: 'required' } : {})}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            as="textarea"
            onChange={e => setField('message', e.target.value)}
            onBlur={e => setErrors(e.target.value === '' ? {message: 'required' } : {})}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type='invalid'>{errors.message}</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" onClick={handleFormSubmit} variant="outline-light" size="md" style={button} >
          Submit
        </Button>
      </Form>
    </div>
  );
}
