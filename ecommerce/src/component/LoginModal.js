import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { base_url } from '../Constants';
import { ToastContainer,Toast, toast } from"react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login({ show, setShow }) {
    //   const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const checkLogin = () => {
      if (username && password) 
      {
            axios
                .post(base_url + 'auth/login', {
                    username:username,
                    password: password,
                })
                .then((res) => {
                  if(res.status && res.status===200 ){
                    setToken(res.data.token);
                    localStorage.setItem("token",res.data.token);
                    handleClose();    
                    alert("Logged Succesfully");
                  }
                }).catch((err)=>{
                  alert("login failed");
                });
                console.log(token);
            
        } 
    };
    return (
        <>
            <Modal show={show} onHide={handleClose} bg="dark">
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Type Username"
                                autoFocus
                                name={username}
                                onChange={(e)=>{setUsername(e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name={password}
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={checkLogin}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;
