import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import accorimg from "../assets/img/Vector1.png";
import accorimg1 from "../assets/img/Vector2.png";
const Faq = () => {
  return (
    <div className=" bg-black pb-5 pt-lg-4 overflow-hidden overflow-hidden">
      <Container className=" pb-5">
        <div className="text-center pt-5 ">
          <h2 className="fw_400 fs_64 ff-Audiowide text-white">Faq</h2>
        </div>
        <div className=" d-flex justify-content-center pb-5">
          <p className="line1"></p>
        </div>

        <Accordion defaultActiveKey="0" className=" pb-lg-5 pt-lg-5 ">
          <Accordion.Item eventKey="1 " className=" position-relative ">
            {" "}
            <img className="  img_postion" src={accorimg} alt="#" />
            <img className="img_postion1" src={accorimg1} alt="#" />
            <Accordion.Header className="  ff-Montserrat text-white">
              Dui lectus auctor fermentum potenti enim. ?
            </Accordion.Header>
            <Accordion.Body className=" fw_400 fs_16 ff-Montserrat text-white">
              Dui lectus auctor fermentum potenti enim. Quam donec mauris
              phasellus at auctor. Risus maecenas commodo eget tellus nullam
              magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2 " className=" mt-4 position-relative">
            <img className="  img_postion" src={accorimg} alt="#" />
            <img className="img_postion1" src={accorimg1} alt="#" />
            <Accordion.Header className="  ff-Montserrat text-white">
              Placerat eros faucibus aliquam nunc, mattis
            </Accordion.Header>
            <Accordion.Body className=" fw_400 fs_16 ff-Montserrat text-white">
              Dui lectus auctor fermentum potenti enim. Quam donec mauris
              phasellus at auctor. Risus maecenas commodo eget tellus nullam
              magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3 " className=" mt-4 position-relative">
            <img className="  img_postion" src={accorimg} alt="#" />
            <img className="img_postion1" src={accorimg1} alt="#" />
            <Accordion.Header className="  ff-Montserrat text-white">
              Lorem nunc nunc risus viverra a
            </Accordion.Header>
            <Accordion.Body className=" fw_400 fs_16 ff-Montserrat text-white">
              Dui lectus auctor fermentum potenti enim. Quam donec mauris
              phasellus at auctor. Risus maecenas commodo eget tellus nullam
              magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4 " className=" mt-4 position-relative">
            <img className="  img_postion" src={accorimg} alt="#" />
            <img className="img_postion1" src={accorimg1} alt="#" />
            <Accordion.Header className="  ff-Montserrat text-white">
              {" "}
              In aliquet fusce id dictumst id
            </Accordion.Header>
            <Accordion.Body className=" fw_400 fs_16 ff-Montserrat text-white">
              Dui lectus auctor fermentum potenti enim. Quam donec mauris
              phasellus at auctor. Risus maecenas commodo eget tellus nullam
              magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5 " className=" mt-4 position-relative">
            <img className="  img_postion" src={accorimg} alt="#" />
            <img className="img_postion1" src={accorimg1} alt="#" />
            <Accordion.Header className="   ff-Montserrat text-white">
              Elementum pellentesque nisi, sagittis,
            </Accordion.Header>
            <Accordion.Body className=" fw_400 fs_16 ff-Montserrat text-white">
              Dui lectus auctor fermentum potenti enim. Quam donec mauris
              phasellus at auctor. Risus maecenas commodo eget tellus nullam
              magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
