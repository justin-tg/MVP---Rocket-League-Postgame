import React, { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from './App.jsx';
import { Modal, Button } from 'react-bootstrap';
import CustomStats from './CustomStats.jsx';
import '../style.css';

const ModalStats = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button className="modalButton" variant="primary" onClick={handleShow}>
          Customize Stats
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Customize My Stats</Modal.Title>
            {/* <p>select or deselect stats based on your interests</p> */}
          </Modal.Header>
          <Modal.Body>
            <CustomStats/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ModalStats;