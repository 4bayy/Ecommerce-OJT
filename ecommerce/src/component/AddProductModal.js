import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../Constants';
import { error } from 'jquery';

function AddProduct({ show, setShow }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [productCategory, setProductCategory] = useState([]);

    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categoryId: ''
    });
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e);
        setValues({ ...values,[name]:value});
    };
    useEffect(() => {
        axios
            .get(base_url + `Category`)
            .then((res) => {
                console.log(res.data);
                setProductCategory(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(productCategory);
    useEffect(() => {
        axios.post(base_url + `Product/product/register`);
    });
    const onHandleSubmit = () => {
        console.log(values);
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="UserName">
                            <Form.Label>Product title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Product title"
                                autoFocus
                                name="name"
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Price">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Product Price"
                                autoFocus
                                name="price"
                                onChange={onchange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="category">
                            <Form.Select aria-label="category">
                                <option>select category</option>
                                {productCategory.map((i) => (
                                    <option key={i.id} value={i.name}>
                                        {i.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                onChange={onchange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary p-2 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary p-2 rounded"
                        onClick={onHandleSubmit}
                    >
                        Add Product
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddProduct;
