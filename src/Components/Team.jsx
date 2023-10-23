import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sec1 from "../assets/img/img1.png";
import sec2 from "../assets/img/img2.png";
import sec3 from "../assets/img/img3.png";
import sec4 from "../assets/img/img4.png";

const Team = () => {
  return (
    <div className="pt-lg-5 pb-lg-5 overflow-hidden">
      <Container className="pt-lg-5 pb-lg-5">
        <div className="text-center pt-5 ">
          <h2 className="fw_400 fs_64 ff-Audiowide text-black">Team</h2>
        </div>
        <div className=" d-flex justify-content-center">
          <p className="line1"></p>
        </div>
        <Row className="mt-5 pt-2 pb-5 justify-content-center">
          <Col lg={3} md={4} sm={6}>
            <div className="card1">
              <img className=" w-100" src={sec1} alt="#" />
              <p className="fw_600 fs_24 ff-Montserrat text-black mt-3">
                Collin
              </p>
              <p className="fw_400 fs_16 ff-Montserrat text-black">Founder</p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className="card1 mt-4 mt-sm-0">
              <img className=" w-100" src={sec2} alt="#" />
              <p className="fw_600 fs_24 ff-Montserrat text-black  mt-3">
                Pharaox
              </p>
              <p className="fw_400 fs_16 ff-Montserrat text-black">Founder</p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className="card1 mt-4 mt-md-0">
              <img className=" w-100" src={sec3} alt="#" />
              <p className="fw_600 fs_24 ff-Montserrat text-black  mt-3">
                Zach
              </p>
              <p className="fw_400 fs_16 ff-Montserrat text-black">CM</p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className="card1 mt-4 mt-lg-0">
              <img className=" w-100" src={sec4} alt="#" />
              <p className="fw_600 fs_24 ff-Montserrat text-black  mt-3">
                Arlen
              </p>
              <p className="fw_400 fs_16 ff-Montserrat text-black">CM</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
