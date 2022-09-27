import { FC } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

const Faq: FC = () => {
    return (
      <Container>
        <Row className="letters mb-5">
          <Col sm={12}>
            <h2 className="shadow-charcoal text-center py-4 fs-1">Preguntas Frecuentes</h2>
            <h5>Código de vestimenta</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="p-1">
                Formal de boda PERO no estamos peleados con la comodidad.
              </ListGroup.Item>
              <ListGroup.Item className="p-1">
                Por ser una hacienda hay espacios con suelo irregular. El uso de
                tenis es opción.
              </ListGroup.Item>
              <ListGroup.Item className="p-1">
                En Querétaro por las noches la temperatura puede bajar,
                considera llevar algo con lo que abrigarte (No es frío extremo,
                en estos primeros días de octubre vamos a tener máximas de 25 y
                mínimas de 8 grados para que se den una idea)
              </ListGroup.Item>
              <ListGroup.Item className="p-1">
                Si usas un vestido blanco puedes ser disparado con una pistola
                de agua llena de agua de jamaica.
              </ListGroup.Item>
              <h5 className="pt-4">Hospedaje en la hacienda</h5>
              <ListGroup.Item className="p-1">
                Al momento solo hay habitaciones disponibles en Zona Adventure
                (Hostal fancy)
              </ListGroup.Item>
              <ListGroup.Item className="p-1">
                Para reservar tiene que ser directo en el hotel ya que la fecha
                está bloqueada para la boda
              </ListGroup.Item>
              <ListGroup.Item className="p-1">
                solo recibirán reservaciones directas a este teléfono.{" "}
                <a href="tel:4421091218">442 109 1218</a> o en su{" "}
                <a
                  href="http://wa.me/524421091218"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="p-1">Las habitaciones cuentan con 5 camas individuales,el costo es POR HABITACIÓN, no por persona.</ListGroup.Item>
              <ListGroup.Item className="p-1">Al reservar una habitación tu eliges con quién la vas a compartir o bien puedes reservar la habitación solo para ti y no compartir. 
</ListGroup.Item>
              <ListGroup.Item className="p-1">La zona Adventure está ubicada justo arriba del salón donde será la fiesta por lo que al terminar no tienes que caminar casi nada para ya estar en tu cuarto.
</ListGroup.Item>
              <h5 className="pt-4">Ubicación de la hacienda</h5>
              <ListGroup.Item className="p-1">Cadereyta, Querétaro es el pueblo donde se encuentra la hacienda y está aproximadamente a 1:15 en auto de la ciudad de Querétaro, por ser un pueblo pequeño hay algunas limitaciones.</ListGroup.Item>
              <ListGroup.Item className="p-1">No hay servicio de Uber, sí hay taxis. 
</ListGroup.Item>
              <ListGroup.Item className="p-1">La hacienda tiene un amplio estacionamiento.</ListGroup.Item>
              <ListGroup.Item className="p-1">La hacienda tiene restaurante pero puedes llevar snacks ya que las tiendas de conveniencia no están a una distancia recomendada para ir caminando</ListGroup.Item>
              <ListGroup.Item className="p-1">Trata de empacar todo lo necesario para tu higiene personal, como todo hotel tiene los elementos básicos solamente.
</ListGroup.Item>
              <h5 className="pt-4">Otros</h5>
              <ListGroup.Item className="p-1">El día viernes 21 en la noche la hacienda nos reserva un lugar al aire libre con fogata para los asistentes a la boda, ellos proporcionan bombones para asarlos en la fogata pero la cena corre por cuenta de cada quien. La asistencia es opcional.
</ListGroup.Item>
              <ListGroup.Item className="p-1">Si tu dieta es vegetariana / vegana o tienes alguna restricción alimenticia por alergia, háznoslo saber para considerarlo.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
}

export default Faq;