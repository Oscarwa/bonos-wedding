import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import NavigationLink from "./NavigationLink";

const Navigation: FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Navbar bg="light" className="justify-content-center" style={{zIndex: 1000}}>
      <Nav className="align-items-center fs-8">
        <NavigationLink path="/" text="Home" />
        <NavigationLink text="About Us" path="/about-us" />
        <NavigationLink path="/story" text="The Story" />
        <NavigationLink text="The Wedding">
          <NavigationLink path="/location" text="Location" heart={false} />
          <NavigationLink path="/accomodation" text="Accomodation" heart={false} />
          <NavigationLink path="/gift-registry" text="Gift registry" heart={false} />
        </NavigationLink>
        <NavigationLink path="/rsvp" text="RSVP" heart={false} />
      </Nav>
      <Button onClick={() => setToggle(!toggle)} className="d-block d-md-none" variant="link">
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </Navbar>
  );
};
export default Navigation;
