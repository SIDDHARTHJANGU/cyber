import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sec3 from "../assets/img/sec-3.png";

const Cyberfps = () => {
  return (
    <div className="bg_img_sec3  pb-lg-5 overflow-hidden ">
      <Container className=" pt-lg-5 pb-5">
        <Row className=" align-items-center mt-lg-5 pt-5 pb-lg-5">
          <Col lg={6}>
            <h2 className="fw_400 fs_64 ff-Audiowide text-black">
              What is <span className=" d-block gameplat-text">CyberFPS</span>
            </h2>
            <div className="line"></div>
            <p className="fs_16 fw_400 ff-Montserrat text_black mt-4">
              CyberFPS is centered around 5v5 Search & Destroy style combat with
              <span className=" d-xl-block">
                {"  "}
                P2E mechanics featuring the $AMMO Token and deep integrations
              </span>
              within the CryptoStraps ecosystem.
            </p>
            <p className="fs_16 fw_400 ff-Montserrat text_black">
              CyberFPS pits 2 teams of 5 players against each other with the
              <span className=" d-xl-block">
                objective being to attack or defend depending on which side you
              </span>
              <span className=" d-xl-block">
                {" "}
                start on. This "Search & Destroy" style combat has been
                implemented{" "}
              </span>{" "}
              in many popular FPS titles and is a high-skill cap game mode.
            </p>
          </Col>
          <Col lg={6}>
            <img className="w-100" src={sec3} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cyberfps;
