import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
import sec2img from "../assets/img/gameplay.png";
import Imgdgif from "../assets/img/33dfe5bc2b4148837cb53b311f2cc03f.gif";

const Gameplay = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="overflow-hidden ">
      <Container className=" pt-lg-3">
        <div className="text-center mt-lg-5 pt-5">
          <h2 className="fw_400 fs_64 ff-Audiowide text-black heading-line position-relative ">
            CyberFPS <span className="gameplat-text"> Gameplay</span>
          </h2>
        </div>
        <div className=" d-flex justify-content-center mt-lg-5 pt-4">
          <Button variant="primary" onClick={handleShow}>
            <span className="position-relative justify-content-center">
              <img src={sec2img} alt="#" className="w-100" />
            </span>
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <img src={Imgdgif} alt="#" className="w-100" />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Gameplay;
