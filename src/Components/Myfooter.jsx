import React from "react";
import { Container } from "react-bootstrap";
import logo1 from "../assets/img/logo.png";
import { Discord, Instagram, Twiter } from "./Mysvg";

const Myfooter = () => {
  return (
    <div className="bg_img_footer pt-5 overflow-hidden">
      <Container>
        <div className=" text-center">
          <img src={logo1} alt="" />
        </div>
        <div className=" d-flex justify-content-center mt-4 pb-4">
          <Twiter />
          <Instagram />
          <Discord />
        </div>
      </Container>
      <div className="footer_line"></div>
      <div className=" text-center py-4">
        {" "}
        <p className=" fs_16 fw_400  text-white ff-Montserrat">
          © Cyber FPS 2022
        </p>
      </div>
    </div>
  );
};

export default Myfooter;
