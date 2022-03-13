import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { ParallaxBanner } from "react-scroll-parallax";
import him_01 from "../../images/him.jpeg";

const Him: FC = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <h3 className="text-center shadow-charcoal-2 py-3">Oscar Barba</h3>
      </div>
      <Row>
        <Col>
          <p>
            Oscar nació el 18 de octubre del 88 en Guadalajara aún que muchos
            crean que es de La Paz. Es mucho mayor que Ilse.
          </p>
          <p>
            Parece ser súper serio pero ya estando en un lugar donde se siente
            cómodo, es la persona más random y tiene el mejor sentido del humor,
            siempre con comentarios muy atinados para hacer reír a todos. Es muy
            cariñoso y detallista con la gente que quiere y es un excelente
            amigo que siempre va a buscar la forma de estar ahí para ti.
          </p>
          <p>
            Le gusta mucho andar en bici pero su amor verdadero son los
            Nintendos. De verdad. Es un fanatico empedernido de Zelda pero
            actualmente su tiempo libre está dedicado a Splatoon (pero no pinta
            la casa 🙄)
          </p>
          <p>
            Es muy inteligente y siempre encuentra formas de hacer las cosas por
            si mismo, es la persona más independiente que van a conocer. Todo lo
            que tiene lo ha logrado por sí mismo y tiene grandes aspiraciones,
            nunca se limita a sí mismo.
          </p>
          <p>
            Uno de sus encantos es que no sabe nada de cultura pop pero tiene
            muchos datos raros almacenados en su cabeza que siempre te pueden
            sorprender. Cuando algo le gusta, le gusta Mucho y por eso su
            playlist es la misma desde hace muchos años.
          </p>
          <p>
            Es el mejor papá de perritos que se podría pedir, odia que sean unos
            consentidos pero él es el primero en consentirlos.
          </p>
        </Col>
      </Row>
      <ParallaxBanner
        layers={[{ image: him_01, speed: -20 }]}
        className=""
        style={{ height: "800px" }}
      />
    </>
  );
};

export default Him;
