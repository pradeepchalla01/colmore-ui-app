import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { setApiKey } from '../../constants/index';

const Landing = () => {
  const [key, setKey] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setApiKey(key);
    history.push("/search");
  }

  return (
    <>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <h2>Landing Page</h2>
            <Form.Control type="text" placeholder="API Key" required onInput={e => setKey(e.target.value)} />
            <Button className="mt-2" variant="primary" type="submit">Next</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Landing;
