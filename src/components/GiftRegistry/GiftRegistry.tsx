import { FC } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Col, Container, ListGroup } from "react-bootstrap";
import PayPalDonate from "./PayPalDonate";
import gifts from "../../images/shoppi.jpg";
import amazonWishlist from "../../images/amazon-wishlist.jpeg";
import amazon from "../../images/amazon.webp";

const GiftRegistry: FC = () => {
  return (
    <Container>
      <div className="birdlove text-center p-4">
        <p>Bienvenidos a nuestra mesa de regalos moderna! </p>
        <p>
          El mejor regalo que nos pueden brindar es el de compartir con nosotros
          nuestra celebración, pero hemos puesto una mesa de regalos en Amazon
          para su facilidad y comodidad. En verdad lo apreciamos mucho su regalo
          y es algo que nos va a ayudar muchísimo.
        </p>
        <ParallaxBanner
          layers={[
            { image: gifts, speed: 5 },
            {
              children: (
                <div className="gift-registry-back d-flex justify-content-center m-md-5 m-3">
                  <Col sm={12} md={8}>
                    <a
                      href="https://www.amazon.com.mx/wedding/share/Bonos-wedding-2022"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3 className="vanilla-link fs-1 pt-3 shadow-charcoal">
                        {" "}
                        Ilse {"&"} Oscar
                        <br />
                        Wedding Fest
                      </h3>
                      <img
                        className="w-100 grayscale-0"
                        src={amazon}
                        alt="Amazon"
                      />
                    </a>
                  </Col>
                </div>
              ),
            },
          ]}
          className="grayscale-50"
          style={{ height: "600px" }}
        />
        <Col sm={12} className="letters">
          <p>
            Como esto de la tecnología no es para todos aquí tienes los pasos
            para poder hacer una compra de la mesa de regalos y asegurar que nos
            llegue con bien.
          </p>
          <div style={{textAlign: 'justify'}}>
            <ListGroup>
              <ListGroup.Item>
                1. Debes tener una cuenta en Amazon.
              </ListGroup.Item>
              <ListGroup.Item>
                2. Abrir la mesa de regalos desde el link de arriba.
              </ListGroup.Item>
              <ListGroup.Item>
                3. Elegir el o los productos que desees y agregarlos a tu
                carrito
              </ListGroup.Item>
              <ListGroup.Item>
                4. Al momento de elegir la direccion de envío, te aparecerá una
                adicional a nombre de Oscar Barba, esa es la que debes elegir
              </ListGroup.Item>
              <ListGroup.Item>
                <img src={amazonWishlist} alt={'Direccion del wishlist'} />
              </ListGroup.Item>
              <ListGroup.Item>
                5. Proceder con la compra como cualquier otra eligiendo tu
                metodo de pago y dando click en Comprar!
              </ListGroup.Item>
              <ListGroup.Item>Muchas gracias</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <div>
          <p>
            Si por alguna razon no encontraron algo que les gustara del todo,
            estaba agotado o simplemente quieren apoyarnos más y/o de otra
            manera, les dejamos un botón de donativo via PayPal, GRACIAS!
          </p>
          <PayPalDonate />
        </div>
        <p>
          Sepan que estamos al pendiente y cualquier duda nos pueden preguntar!
        </p>
      </div>
    </Container>
  );
};

export default GiftRegistry;
