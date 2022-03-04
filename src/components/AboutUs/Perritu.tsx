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
    <Row className="py-3">
      {reverse ? (
        <Col>
          <h3 className="text-center birdlove py-3">{name}</h3>
          {children}
        </Col>
      ) : null}
      <Col sm={6}>
        <ParallaxBanner
          layers={[{ image: photo, speed: -10 }]}
          className=""
          style={{ height: "400px", borderRadius: "20px" }}
        />
      </Col>
      {!reverse ? (
        <Col>
          <h3 className="text-center birdlove py-3">{name}</h3>
          {children}
        </Col>
      ) : null}
    </Row>
  );
};

export default Perritu;