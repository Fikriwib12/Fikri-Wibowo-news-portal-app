import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
    const [email, setEmail] = useState(''); //gunakan : eve.holt@reqres.in
    const [password, setPassword] = useState(''); // gunakan : cityslicka
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('https://reqres.in/api/login', {
          email,
          password,
        });
  
        console.log('Login Berhasil. Token:', response.data.token);
        onLogin(); // Panggil fungsi onLogin untuk mengubah status login
        navigate('/news');
      } catch (error) {
        console.error('Login Failed:', error);
      }
    };
  return (
    <div>
         <div style={{ width: '300px', margin: '0 auto', marginTop: '50px' }}>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
    </div>
  )
}

export default Login