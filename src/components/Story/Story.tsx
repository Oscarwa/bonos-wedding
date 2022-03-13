import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import chat from "../../images/chat.png";
import beginning from "../../images/beginning.jpg";

const Story: FC = () => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h2 className="fs-1 shadow-charcoal text-center p-4">
            Nuestra Historia
          </h2>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={8}>
          <p>
            Todo comenzó un 5 de abril del 2013. Era el cumpleaños de una muy
            querida amiga en común. Oscar vio de lejos a Ilse con su pelo morado
            y decidió que le gustaba lo que veía 🌚. Oscar le pidió más datos a
            su amiga como era poco probable que la fuera a ver pronto, y
            aprovechando nuestra época moderna, se animó a enviarle una
            solicitud de amistad en Facebook, Ilse aceptó esa invitación pero
            como buenos ñoños introvertidos casi no hablabamos o nos daba pena
            iniciar una conversación, una cosa llevo a la otra y poco tiempo
            después, un 5 de mayo se pusieron de acuerdo para su primer cita en
            'Trece Lunas' un restaurante muy alternativo y padre que está en
            barrio antiguo. . . a aquellos jovenes ilusos nunca se les hubiera
            ocurrido que 9 años después estarían por casarse.
          </p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img src={chat} alt="chat" className="w-100" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <img src={beginning} alt="chat" className="w-100" />
        </Col>
        <Col sm={12} md={6} lg={8}>
          <p>
            En Mayo del 2013, después de un mes de platicar todos los días y a
            todas horas como si se conocieran de toda la vida, Oscar le dejó una
            cartita a Ilse diciéndole que le gustaba como los ñoños que son,
            Ilse quedó encantada de ser correspondida. a las pocas semanas,
            especificamente el 4 de junio comenzaron a ser novios y oficialmente
            a ser unos ñoños enamorados.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={8}>
          <p>
            Muchas aventuras después, muchas experiencias, viajes, travesuras,
            enojos, enseñanzas, consejos y regaños; siempre aprendiendo el uno
            del otro tantas cosas y dandose cuenta de lo compatibles que son y
            como podian mejorar apoyandose mutuamente, entendieron que esto
            tenia futuro y a pesar de las cosas malas que pudiera haber entre
            ellos, era cuestión de seguir trabajando puliendolas para sacar a
            relucir lo mejor de los 2.
          </p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img src={beginning} alt="chat" className="w-100" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <img src={beginning} alt="chat" className="w-100" />
        </Col>
        <Col sm={12} md={6} lg={8}>
          <p>
            Ambos comparten un amor inmenso por los animalitos por lo que unos
            años después decidieron adoptar a su primer mascota juntos: Nugget,
            que originalmente viviría con Oscar pero Nuggito siempre fue un bebé
            de mamá y se quedó viviendo con Ilse. Después llegó Donatella, lo
            que creció la familia y el amor en ella.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={8}>
          <p>
            En 2019 tomaron la decisión de vivir juntos (en pecado) y comenzaron
            las pruebas de vivir como adultos, pero siempre conservando la ñoñez
            que los hace ser especiales. Al tiempo de vivir juntos, decidieron
            crecer la familia y adoptaron a Cajeta mejor conocida como La Tepe
            que es la favorita de papá. Un año después llegó la bebé Kiki para
            completar la pequeña familia.
          </p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img src={beginning} alt="chat" className="w-100" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <img src={beginning} alt="chat" className="w-100" />
        </Col>
        <Col sm={12} md={6} lg={8}>
          <p>
            En plena pandemia decidieron dar un paso muy grande al cambiar de
            ciudad, lo cual no es algo nuevo para ninguno de los dos. Querétaro
            fue la ciudad elegida por ser un lugar tranquilo, bonito y con un
            clima perfecto.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={8}>
          <p>
            En diciembre de 2021, Oscar eligió el lugar de la primera cita con
            Ilse para pedirle que se convirtiera en señora oficialmente, el
            resto ya se lo saben.
          </p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img src={beginning} alt="chat" className="w-100" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <img src={beginning} alt="chat" className="w-100" />
        </Col>
        <Col sm={12} md={6} lg={8}>
          <p>
            Pueden preguntarse, como es que sabe tanto de ellos? Es porque yo
            soy ellos.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Story;
