import { FC } from "react";
import { Container } from "react-bootstrap";
import Activities from "./Activities";
import Lodging from "./Lodging";
import Restaurants from "./Restaurants";

const Accomodation: FC = () => (
  <Container>
    <Lodging />
    <hr />
    <Activities />
    <hr />
    <Restaurants />
  </Container>
);

export default Accomodation;
