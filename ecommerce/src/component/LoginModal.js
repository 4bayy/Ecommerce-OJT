import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { base_url } from '../Constants';
import { ToastContainer, Toast, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});


function Login({ show, setShow }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      navigate("/");
  
      try {
        await loginSchema.validate({ username, password });
        axios
          .post(base_url + 'auth/login', {
            username: username,
            password: password,
          })
          .then((res) => {
            if (res.data && res.data.token) {
              setToken(res.data.token);
              localStorage.setItem('token', res.data.token);
              handleClose();
              alert('Logged Succesfully');
            }
          })
          .catch((err) => {
            alert('login failed');
          });
        console.log(token);
      } catch (error) {
        toast.error(error.message);
      }
    };
  
    return (
      <>
        <Modal show={show} onHide={handleClose} bg="dark">
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type Username"
                  autoFocus
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <ToastContainer />
      </>
    );
  }
  
  export default Login;
  