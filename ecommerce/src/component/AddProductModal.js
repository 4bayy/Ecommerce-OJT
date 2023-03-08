import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../Constants';

function AddProduct({show,setShow}) {
//   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [productCategory,setProductCategory] = useState([]);
  useEffect(() => {
    axios
      .get(base_url + "products/categories")
      .then((res) => {
        console.log(res);
        setProductCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose} >
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
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Price">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Price"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="category"
            >
              <Form.Select aria-label="category">
  <option>select category</option>
  {productCategory && productCategory.map((category,index) => (
    <option key={index} value={category}>{category}</option>
  ))}
</Form.Select>


            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;