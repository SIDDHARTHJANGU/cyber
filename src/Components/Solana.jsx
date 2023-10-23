import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import solna from "../assets/img/solana.png";
import solna1 from "../assets/img/unreal.png";
const Solana = () => {
  return (
    <div className="bg_img_sec4 pb-lg-5 pt-lg-5 mt-lg-5 overflow-hidden ">
      <Container className=" pb-5 pt-lg-5 ">
        <Row className=" d-flex justify-content-center pb-lg-5 pt-5 mb-lg-5">
          <Col
            lg={4}
            className=" d-flex justify-content-lg-end justify-content-center"
          >
            <img className=" w-100" src={solna} alt="" />
          </Col>
          <Col lg={4} className=" d-flex justify-content-center mt-5 mt-lg-0">
            <img className=" w-75" src={solna1} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Solana;
