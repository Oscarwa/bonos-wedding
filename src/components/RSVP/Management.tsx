import { FC } from "react";
import { Container } from "react-bootstrap";
import ErrorBoundaryComponent from "../Common/ErrorBoundary";
import RSVPManager from "./RSVPManager";

const Management: FC = () => {
  return (
    <Container>
      <h1 className="fs-1 text-center shadow-charcoal py-4">RSVP Management</h1>
      <ErrorBoundaryComponent>
        <RSVPManager />
      </ErrorBoundaryComponent>
    </Container>
  );
};

export default Management;
