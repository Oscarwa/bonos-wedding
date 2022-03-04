import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import Family from "./Family";
import Her from "./Her";
import Him from "./Him";

const AboutUs: FC = () => {
  return (
    <>
      <Row>
        <Col sm={6}>
          <Him />
        </Col>
        <Col sm={6}>
          <Her />
        </Col>
      </Row>
      <Row>
        <Col>
          <Family />
        </Col>
      </Row>
    </>
  );
};

export default AboutUs;
