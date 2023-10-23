import React from "react";
import { Container } from "react-bootstrap";
import sec2img from "../assets/img/gameplay.png";

const Gameplay = () => {
  return (
    <div className="overflow-hidden">
      <Container>
        <div className="text-center mt-lg-5 pt-4  ">
          <h2 className="fw_400 fs_64 ff-Audiowide text-black ">
            CyberFPS <span className="gameplat-text"> Gameplay</span>
          </h2>
        </div>
        <div className=" d-flex justify-content-center mt-5 pt-lg-4">
          {" "}
          <img className="w-75" src={sec2img} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Gameplay;
