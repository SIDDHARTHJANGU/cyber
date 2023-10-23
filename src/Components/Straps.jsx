import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sec4 from "../assets/img/sec-4.png";
const Straps = () => {
  return (
    <div className="bg-black pt-lg-5 pb-lg-5 overflow-hidden">
      <Container className="pt-lg-5 pb-5">
        <Row className="pt-5 pb-lg-5 align-items-center justify-content-between">
          <Col lg={5}>
            <img className=" w-100" src={sec4} alt="" />
          </Col>
          <Col lg={6} className=" pt-4 pt-lg-0">
            <div>
              {" "}
              <h2 className="fw_400 fs_64 ff-Audiowide text-white">
                CryptoStraps{" "}
              </h2>
            </div>
            <div className="line1"></div>
            <p className="fw_400 fs_16 txt-white ff-Montserrat pt-2">
              CryptoStraps are firearms pushing the boundaries of 3D animated
              art.{" "}
              <span className=" d-xl-block">
                {" "}
                CyberFPS will be powered by CryptoStraps $AMMO and is directly
              </span>{" "}
              <span className=" d-xl-block">
                {" "}
                integrated with the existing CryptoStraps NFTs. You will be able
                to use
              </span>{" "}
              <span className=" d-xl-block">
                {" "}
                CryptoStraps NFTs in-game and the visuals/graphics of CyberFPS
                are
              </span>
              designed by the CryptoStraps 3D Studio.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Straps;
