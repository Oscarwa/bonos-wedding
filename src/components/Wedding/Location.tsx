import { FC } from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import haciendaLogo from "../../images/hacienda.png";
import hacienda01 from "../../images/hacienda01.jpg";
import hacienda02 from "../../images/hacienda02.jpg";
import hacienda03 from "../../images/hacienda03.jpg";
import hacienda04 from "../../images/hacienda04.jpg";
import hacienda05 from "../../images/hacienda05.jpg";
import hacienda06 from "../../images/hacienda06.jpg";
import hacienda07 from "../../images/hacienda07.jpg";
import hacienda08 from "../../images/hacienda08.jpg";

const photos = [
  { src: hacienda02 },
  { src: hacienda03 },
  { src: hacienda04 },
  { src: hacienda05 },
  { src: hacienda06 },
  { src: hacienda07 },
  { src: hacienda08 },
];

const Location: FC = () => {

    const handleCopyLink = () => {
      navigator.clipboard.writeText("https://goo.gl/maps/hRaixtRT8Zoszb2fA");
      toast.info('Enlace copiado!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        });
    };

  return (
    <section>
      <h2 className="birdlove text-center py-4">Hacienda Tovares</h2>
      <Row className="d-flex flex-row align-items-center">
        <Col sm={12} md={4} lg={3}>
          <div className="hacienda-logo">
            <img src={haciendaLogo} alt="Hacienda Tovares" className="p-1" />
          </div>
        </Col>
        <Col sm={12} md={8} lg={9} className="ps-3">
          <p>
            Fué edificada en 1640, es el lugar que vio ocurrir el acontecimiento
            civil que originó la fundación de la actual ciudad de Cadereyta de
            Montes.
          </p>
          <p>
            Restaurada y convertida en un exclusivo complejo turístico, apartado
            de la ciudad, con espacios al aire libre y lleno de naturaleza
            distribuida en sus 52 hectáreas, es el lugar perfecto donde converge
            la magia del semidesierto, 400 años de historia y un ambiente
            ecuestre inconfundible.
          </p>
        </Col>
      </Row>
      <div>
        <Carousel>
          {photos.map((photo, index) => (
            <Carousel.Item key={index}>
              <img
                className="carousel"
                style={{ maxHeight: 600 }}
                src={photo.src}
                alt="instalaciones"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Row>
        <Col
          sm={12}
          className="pt-4 d-flex justify-content-between align-items-center"
        >
          <div>
            <h4 className="goldleaf fs-1">Ubicación</h4>
          </div>
          <div className="d-flex">
            <Button
              variant="link"
              onClick={handleCopyLink}
              className="letters h3 m-0 d-flex align-items-center"
            >
              <FontAwesomeIcon icon={faLocationDot} size="xs" />
              <span className="ps-1">
                  goo.gl/maps/hRaixtRT8Zoszb2fA
                  </span>
            </Button>
            <Button variant="link">
              <a
                href="https://goo.gl/maps/hRaixtRT8Zoszb2fA"
                target="_blank"
                rel="noreferrer"
                className="color-normal"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" />
              </a>
            </Button>
          </div>
        </Col>
        <Col sm={12}>
          <iframe
            title="Hacienda Tovares on Google Maps"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOe3tCHyE04URSoy_RAVO08M&key=AIzaSyDu9xFyRzxr59aphC2L3uSA_8JlHKWq9rg"
          ></iframe>
        </Col>
        <img
          className="carousel my-5"
          style={{ maxHeight: 800 }}
          src={hacienda01}
          alt="instalaciones"
        />
      </Row>
    </section>
  );
};

export default Location;
