import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import haciendaLogo from "../../images/hacienda.png";


const Accomodation: FC = () => (
  <section>
    <Row className="d-flex flex-row align-items-center">
      <Row sm={12}>
        <h2 className="birdlove text-center py-4">Hospedaje</h2>
      </Row>
      <Col sm={12} md={4} lg={3}>
        <div className="hacienda-logo">
          <img src={haciendaLogo} alt="Hacienda Tovares" className="p-1" />
        </div>
      </Col>
      <Col sm={12} md={8} lg={9} className="ps-3">
        <p>Hacienda Tovares cuenta con 3 areas para hospedaje: Hotel Boutique, Area Serenity y Area Adventure</p>
      </Col>
    </Row>
  </section>
);

export default Accomodation