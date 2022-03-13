import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import Badge from "../Common/Badge";

import ruta_vino from "../../images/ruta-vino.jpg";
import OpenExternalLink from "../Common/OpenExternalLink";

const Activities: FC = () => {
  return (
    <>
      <Row className="d-flex flex-row align-items-top pb-3">
        <Col sm={12}>
          <h2 className="shadow-charcoal fs-1 text-center py-4">
            Actividades
          </h2>
        </Col>
        <Col sm={12}>
          <p>
            Hacienda Tovares cuenta con distintas actividades a lo largo del
            día, puedes consultar con ellos horarios y disponibilidad, pero
            algunas de las actividades son:
          </p>
          <div>
            <Badge
              text="Paseo por la hacienda"
              url="https://haciendatovares.mx/portfolio-item/paseo-granja/"
            />
            <Badge
              text="Degustación"
              url="https://haciendatovares.mx/portfolio-item/degustacion-hacienda-tovares/"
            />
            <Badge
              text="Masaje y aguas termales"
              url="https://haciendatovares.mx/portfolio-item/masaje-aguas-termales/"
            />
            <Badge
              text="Recorridos"
              url="https://haciendatovares.mx/portfolio-item/actividades-individuales/"
            />
            <Badge
              text="Cabalgata"
              url="https://haciendatovares.mx/portfolio-item/actividades-individuales/"
            />
            <Badge
              text="Kayak en el lago"
              url="https://haciendatovares.mx/portfolio-item/actividades-individuales/"
            />
            <Badge
              text="Tour romántico"
              url="https://haciendatovares.mx/portfolio-item/enamorate-hacienda-tovares/"
            />
            {/* <Badge
              text=""
              url=""
            /> */}
          </div>
        </Col>
      </Row>
      <Row className="d-flex flex-row align-items-top pb-3">
        <Col sm={12}>
          <h2 className="shadow-charcoal fs-3 py-4">
            Ruta del Arte, Queso y Vino
          </h2>
        </Col>
        <Col sm={12}>
          <p>
            Querétaro es un estado de la República Mexicana que tiene mucho que
            ofrecer y una de ellas son los recorridos para tu paladar que no
            puedes perderte.
          </p>
          <p>
            Queserías y viñedos se extienden a través del territorio
            semidesértico del estado, ofreciendo al visitante carreteras llenas
            de deliciosa diversión. El recorrido abarca no sólo lugares, sino
            costumbres, recetas, anhelos y emociones.
          </p>
          <p>
            Las posibilidades son muchas, y las combinaciones que puedes hacer
            son variadas. Planea tu ruta de acuerdo a tus sabores preferidos, a
            la calma que desees darle a tus vacaciones, y los días que puedas
            dedicarle a este tour gastronómico
          </p>
          <p>
            La sed se anticipa al gozo de beber, el hambre al placer de comer.
            El deseo es una promesa para el disfrute y la espera de la saciedad
            encumbra el deleite. Comer con hambre y dormir con sueño son, sin
            duda, la mejor manera de existir. Comer con furor y cerrar los ojos
            con desespero es como se debe vivir.
          </p>
          <p>
            Pasea largamente por el estado de Querétaro y recorre las fincas y
            ranchos que conforman la Ruta del Queso y Vino, detente en alguno a
            comer. Llena tu olfato de detalles regionales, visita fábricas,
            observa flores, explora todas las posibilidades para saciar la
            curiosidad. Conduce por el vacío semidesértico que promete grandes
            paisajes, contempla el tiempo en los pueblos de la ruta, agota los
            colores de las vistas queretanas y vuela. Camina. Pide platillos
            pletóricos al final del día y bebe.
          </p>
          <p>
            Pasa horas de deliciosa diversión y un recorrido que abarca no sólo
            lugares, sino costumbres, recetas, anhelos y emoción.
          </p>
          <p>
            La Ruta del Queso y del Vino promete la saciedad y el vacío, el
            cansancio y la tregua, la avidez y el empacho.
          </p>
        </Col>
        <Col>
          <div>
            <Badge
              text="viajesyenoturismo.com.mx"
              url="https://www.viajesyenoturismo.com.mx/"
            />
            <Badge
              text="larutadelquesoyvino.com.mx"
              url="https://www.larutadelquesoyvino.com.mx/"
            />
          </div>
          <div>
            <img src={ruta_vino} alt="ruta del vino" className="my-1 w-100" />
          </div>
        </Col>
      </Row>
      <Row className="d-flex flex-row align-items-top pb-3">
        <Col sm={12}>
          <h2 className="shadow-charcoal fs-3 py-4">
            Otras atracciones cercanas a la hacienda
          </h2>
        </Col>
        <Col sm={12}>
          <h4 className="fs-5">
            Jardín Botánico Regional de Cadereyta{" "}
            <OpenExternalLink
              url="http://www.concyteq.edu.mx/JB/visitasguiadas.html"
              dark
            />
          </h4>
          <p>
            El Jardín Botánico Regional de Cadereyta fue fundado el 25 de abril
            de 1991. Pertenece a la Secretaría de Educación del Gobierno del
            Estado de Querétaro y está adscrito al Consejo de Ciencia y
            Tecnología del Estado de Querétaro.
          </p>
          <p>
            Los terrenos en los que se encuentra el Jardín Botánico fueron,
            hasta 1990, propiedad del Ejido de Fuentes y Pueblo Nuevo. Los
            propietarios conscientes de la importancia de contar con un
            instituto dedicado al estudio de la conservación de la Naturaleza y
            sus recursos, decidieron entregar en comodato el terreno para la
            instalación y desarrollo de este organismo, con la intención de que
            se convirtiera en un refugio para la flora regional.
          </p>
          <hr />
          <h4 className="fs-5">
            Planetario Dr Jose Hernandez Moreno{" "}
            <OpenExternalLink
              url="https://www.facebook.com/planetariocadereytademontes/"
              dark
            />
          </h4>
        </Col>
      </Row>
    </>
  );
};

export default Activities;
