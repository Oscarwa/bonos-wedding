import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { ParallaxBanner } from "react-scroll-parallax";

interface PerrituProps {
    name: string;
    photo: string;
    reverse?: boolean;
}

const Perritu: FC<PerrituProps> = ({ name, photo, reverse = false, children }) => {
  return (
    <Row className="pt-md-3">
      {reverse ? (
        <Col>
          <h3 className="text-center shadow-charcoal fs-2 pt-md-3 m-0">{name}</h3>
          {children}
        </Col>
      ) : null}
      <Col md={6}>
        <ParallaxBanner
          layers={[{ image: photo, speed: -5 }]}
          className=""
          style={{ height: "400px", borderRadius: "20px", filter: 'grayscale(0.7)' }}
        />
      </Col>
      {!reverse ? (
        <Col>
          <h3 className="text-center shadow-charcoal fs-2 pt-3 m-0">{name}</h3>
          {children}
        </Col>
      ) : null}
      <hr className="mt-3"/>
    </Row>
  );
};

export default Perritu;