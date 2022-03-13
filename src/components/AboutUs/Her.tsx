import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { ParallaxBanner } from "react-scroll-parallax";
import her_01 from "../../images/her.jpg";

const Her: FC = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <h3 className="text-center shadow-charcoal-2 py-3">Ilse Arellano</h3>
      </div>
      <ParallaxBanner
        layers={[{ image: her_01, speed: -10 }]}
        className=""
        style={{ height: "800px", filter: 'grayscale(0.9)' }}
      />
      <Row>
        <Col className="text">
          <p>
            Inteligente, entregada, divertida y con un gran corazón, Ilse vió el
            mundo por primera vez un 17 de Junio de 1989 (o 17 de Enero?) en la
            ciudad de Monterrey. La mayor de dos hermanos.
          </p>
          <p>
            Quienes la conocemos medianamente bien sabemos que tiene un lado
            darks y malote pero en el fondo es una de las personas mas buenas
            que puedas conocer. Fanática a morir de la música de todo tipo y
            cuando digo todo me refiero a TODO tipo de música.
          </p>
          <p>
            Pasó gran parte de su vida en Cd. Victoria donde estudió parte de la
            primaria, secundaria y prepa y aprendió a decirle flautas a los
            burritos y fue donde también conoció grandes amistades que al día de
            hoy atesora.
          </p>
          <p>
            Para estudiar la carrera se mudó de nuevo a Monterrey para cursarla
            donde se graduó en 2014, al poco tiempo encontró su pasión que es la
            organizacion de viajes y eventos corporativos, cosa que de momento
            la pandemia llegó a arruinar hasta nuevo aviso :(.
          </p>
          <p>
            Le encanta la comida chatarra y las cadenas de restaurante, ella
            podría facilmente vivir de McDonalds, KFC, IHOP, Chilli’s, etc.
            Ademas, su snack favorito son los elotes! Ya sean de La Purisima o
            del señor afuera de la iglesia, nunca es mal momento para ella para
            comer un elote (o dos jiji).
          </p>
          <p>
            Tambien le encantan los animales, son su vida y gran parte de su
            felicidad, los quiere y los mima todo el tiempo y por ende estan
            pegados a ella todo el tiempo tambien
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Her;
