import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Family from "./Family";
import Her from "./Her";
import Him from "./Him";

const AboutUs: FC = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Him />
        </Col>
        <Col lg={6}>
          <Her />
        </Col>
      </Row>
      <Row>
        <Col>
          <Family />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
