import { FC } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Counter from "./Counter";
import cover from "../../images/cover.jpg";

import "./style.scss";
import CommentBox from "../Comments/CommentBox";
import CommentsSection from "../Comments/CommentsSection";
import { Link } from "react-router-dom";

const Splash: FC = () => {
  const eventDate = new Date(2022, 9, 22);
  const today = new Date();
  const diff = eventDate.getTime() - today.getTime();
  const days = Math.ceil(diff / (1000 * 3600 * 24));

  return (
    <section style={{ minHeight: "90vh" }}>
      <Container fluid className="p-0 position-relative pt-3">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
        <div className="line line4"></div>
        <div className="line line5"></div>
        <div className="line line6"></div>
        <Container>
          <Row>
            <Col lg={6} className="position-relative">
              <div
                className="d-block d-lg-none color-white shadow-charcoal position-absolute text-center pt-4 splash-bg-gradient-1"
                style={{ zIndex: 1200 }}
              >
                <h1 className="fs-1 pt-1">Ilse & Oscar</h1>
                <h2 className="fs-1 pt-1">Wedding fest</h2>
                <h3 className="fs-3 pt-4">22 • 10 • 2022</h3>
                <h3 className="fs-3 pt-1">Queretaro</h3>
                <h4 className="fs-5 pt-4">{days} days to go!</h4>
              </div>
              <div className="d-none d-lg-block splash-bg-gradient-1 position-absolute"></div>
              <img
                src={cover}
                alt="us"
                className="w-100 position-relative splash-image"
              />
            </Col>
            <Col
              lg={6}
              className="splash-text position-relative color-ivory shadow-ivory"
            >
              <div className="d-none d-lg-block text-center mt-5 pt-4">
                <h1 className="fs-1 pt-4">Ilse & Oscar</h1>
                <h2 className="fs-1 pt-2">Wedding fest</h2>
                <h3 className="fs-2 pt-5">22 • 10 • 2022</h3>
                <h3 className="fs-2 pt-1">Querétaro</h3>
                <h4 className="fs-4 pt-4">{days} days to go!</h4>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="text-center m-3 mt-5">
            <div className="letters fs-5 bold">Agregamos una sección donde te resolvemos la mayoría de las preguntas que puedas tener!</div>
            <br />
            <Link to="/faq">
              <Button variant="dark">Ver Preguntas Frecuentes</Button>
            </Link>
          </div>
        </Container>
        <Counter />
        <Container>
          <div className="fs-4 goldleaf pb-1">Comentanos algo bonito!</div>
          <CommentBox />
          <CommentsSection />
        </Container>
      </Container>
    </section>
  );
};

export default Splash;
