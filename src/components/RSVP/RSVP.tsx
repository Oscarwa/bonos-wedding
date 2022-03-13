import { FC } from "react";
import { Container } from "react-bootstrap";
import ComingSoon from "../ComingSoon/ComingSoon";

const RSVP: FC = () => {
  return (
    <Container>
        <h1 className="fs-1 text-center shadow-charcoal py-4">RSVP</h1>
        <p>
          Pronto les brindaremos más información para poder solicitarles su
          confirmación de asistencia al evento!
        </p>
      <div className="m-5 p-5">
        <ComingSoon />
      </div>
    </Container>
  );
};

export default RSVP;
