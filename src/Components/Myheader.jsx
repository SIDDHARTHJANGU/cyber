import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hero from "../assets/img/logo.png";
import { Discord, Instagram, Twiter } from "./Mysvg";
import menu from "../assets/img/MENU.png";
import heroimg from "../assets/img/hero-img.png";
const Myheader = () => {
  return (
    <div className="bg_img_hero min-vh-100 d-flex flex-column overflow-hidden">
      <Container>
        <nav className="d-flex align-items-center justify-content-between ">
          <div className="z_20">
            <a href="img">
              {" "}
              <img src={hero} alt=" #" />
            </a>
          </div>
          <div className=" d-xl-none">
            <Twiter />
            <Instagram />
            <Discord />
          </div>
          <label for="iconbox">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <input type="checkbox" id="iconbox" hidden></input>

          <ul className=" d-flex align-items-center nav-lg-screen ">
            <li className="  ms-3 union union1">
              <a
                href="about"
                className="fw_400 fs_16 text-white ff-Audiowide  bg_img_nav  position-relative  "
              >
                About
              </a>
            </li>
            <li className=" ms-3 mt-5 mt-xl-0 union3 union4  ">
              <a
                href="CryptoStraps"
                className="fw_400 fs_16 text-white ff-Audiowide bg_img_nav position-relative"
              >
                CryptoStraps
              </a>
            </li>
            <li className="  ms-3 mt-5 mt-xl-0 union union1">
              {" "}
              <a
                href="Team"
                className="fw_400 fs_16 text-white ff-Audiowide bg_img_nav position-relative"
              >
                Team
              </a>
            </li>
            <li className="  ms-3 mt-5 mt-xl-0 union union1">
              <a
                href="Faq"
                className="fw_400 fs_16 text-white ff-Audiowide bg_img_nav position-relative"
              >
                Faq
              </a>
            </li>
            <li className="  ms-3 mt-5 mt-xl-0  union3 union4">
              {" "}
              <a
                href="Light  "
                className="fw_400 fs_16 text-white ff-Audiowide bg_img_nav position-relative"
              >
                Light Paper
              </a>
            </li>
          </ul>
          <div className=" d-none d-xl-block">
            <Twiter />
            <Instagram />
            <Discord />
          </div>
        </nav>
      </Container>
      <div className=" flex-grow-1 d-lg-flex">
        <Container>
          <Row className=" align-items-center h-100 ">
            <Col
              lg={6}
              className=" h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start "
            >
              <img src={menu} alt="" />
              <h2 className="fs_28 fw_400 text-white ff-Audiowide">
                Web3 Gaming Reimagined
              </h2>
              <div className="mt-md-5 pt-4 ">
                <button className="Get_buton text-black fs_16 fw_400 ff-Audiowide">
                  Get Started
                </button>
                <button className="learn_buton  text-white fs_16 fw_400 ff-Audiowide ms-sm-5">
                  Learn More
                </button>
              </div>
            </Col>
            <Col lg={6} className=" h-100 d-flex align-items-end">
              <img className="img w-100" src={heroimg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Myheader;
