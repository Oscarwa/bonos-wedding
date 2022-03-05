import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { Button, Collapse, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NavigationLink from "./NavigationLink";

const Navigation: FC = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setToggle(false);
  }, [location]);

  return (
    <Navbar
      className="justify-content-md-center"
      style={{ zIndex: 1000 }}
    >
      <Nav className="d-none d-md-flex align-items-center fs-8">
        <NavigationLink path="/" text="Home" />
        <NavigationLink text="About Us" path="/about-us" />
        <NavigationLink path="/story" text="The Story" />
        <NavigationLink text="The Wedding">
          <NavigationLink path="/location" text="Location" heart={false} />
          <NavigationLink
            path="/accomodation"
            text="Accomodation"
            heart={false}
          />
          <NavigationLink
            path="/gift-registry"
            text="Gift registry"
            heart={false}
          />
        </NavigationLink>
        <NavigationLink path="/rsvp" text="RSVP" heart={false} />
      </Nav>
      <Nav className="w-100 d-flex d-md-none flex-column">
        <section className="w-100 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faHeart}
              size="lg"
              color="crimson"
              className="mx-2"
            />
            <h3 className="october-moon fs-4 m-0">Ilse & Oscar</h3>
          </div>
          <div>
            <Button
              onClick={() => setToggle(!toggle)}
              className="btn-link d-block d-md-none"
              variant="link"
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
        </section>
        <Collapse in={toggle}>
          <div>
            <NavigationLink path="/" text="Home" heart={false} />
            <NavigationLink text="About Us" path="/about-us" heart={false} />
            <NavigationLink path="/story" text="The Story" heart={false} />
            <NavigationLink path="/location" text="Location" heart={false} />
            <NavigationLink
              path="/accomodation"
              text="Accomodation"
              heart={false}
            />
            <NavigationLink
              path="/gift-registry"
              text="Gift registry"
              heart={false}
            />
            <NavigationLink path="/rsvp" text="RSVP" heart={false} />
          </div>
        </Collapse>
      </Nav>
    </Navbar>
  );
};
export default Navigation;
