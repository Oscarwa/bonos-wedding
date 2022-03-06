import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

import haciendaLogo from "../../images/hacienda.png";
import Hotel from "./Hotel";


const Lodging: FC = () => {
    return (
      <>
        <Row className="d-flex flex-row align-items-top pb-3">
          <Col sm={12}>
            <h2 className="birdlove text-center py-4">Hospedaje</h2>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <div className="hacienda-logo">
              <img src={haciendaLogo} alt="Hacienda Tovares" className="p-1" />
            </div>
          </Col>
          <Col sm={12} md={8} lg={9} className="ps-3">
            <p>
              Hacienda Tovares cuenta con 3 areas para hospedaje: Hotel
              Boutique, Area Serenity y Area Adventure.
            </p>
            <p>
              Nosotros creemos que es la mejor opción ya que las habitaciones se
              encuentran dentro de la misma hacienda. Sin embargo la capacidad
              es algo limitada por eso les brindamos mas opciones.
            </p>
          </Col>
        </Row>

        <Row className="letters">
          <Col sm={12} lg={6}>
            <h5 className="goldleaf fs-5">Reservaciones</h5>
            <p>
              Recuerda brindar el código del evento para tener una mejor
              atención y una mejor tarifa!
            </p>
            <p>
              Código: <b>BODA ILSE {"&"} OSCAR</b>
            </p>
            <Hotel
              name={""}
              phone={"442 109 1218"}
              email={"contacto@haciendatovares.org"}
              disableToggle={true}
            />
            <hr />
            <p>
              Te facilitamos también informacion de hoteles cercanos a la
              hacienda
            </p>
            <Hotel
              name={"Hotel Viña del Cielo"}
              phone={"4411157762"}
              email={"contacto@vinadelcielo.com.mx"}
              place={"https://g.page/vinadelcielo?share"}
              secondary
            />
            <hr />
            <Hotel name={"Hotel Villa Montes"} phone={""} email={""} secondary />
            <hr />
            <Hotel name={"Hotel patito 2"} phone={""} email={""} secondary />
          </Col>

          <Col sm={12} lg={6}>
            <h5 className="goldleaf fs-5">Viaja seguro durante el COVID</h5>
            <span>
              Qué puedes esperar durante tu estadía por parte del personal
            </span>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Todas las sábanas desinfectadas con lavado de alta temperatura
              </ListGroup.Item>
              <ListGroup.Item>
                Se requiere el uso de máscaras, barbijos o tapabocas para los
                huéspedes en zonas públicas
              </ListGroup.Item>
              <ListGroup.Item>
                Se requieren máscaras, barbijos o tapabocas para el personal en
                zonas públicas
              </ListGroup.Item>
              <ListGroup.Item>
                Pisos marcados para el distanciamiento social
              </ListGroup.Item>
              <ListGroup.Item>
                Alcohol en gel disponible para los huéspedes y el personal
              </ListGroup.Item>
              <ListGroup.Item>
                Política de licencia para quedarse en casa para miembros del
                personal que muestren síntomas
              </ListGroup.Item>
              <ListGroup.Item>
                Las zonas de mucho tráfico se desinfectan con frecuencia
              </ListGroup.Item>
              <ListGroup.Item>
                El personal debe lavarse las manos con frecuencia
              </ListGroup.Item>
              <ListGroup.Item>
                Control diario de temperatura y de síntomas para el personal
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </>
    );
}

export default Lodging;