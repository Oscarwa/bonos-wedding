import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logEvent } from "firebase/analytics";
import { FC, useEffect, useState } from "react";
import { Button, Collapse, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { analytics } from "../../services/firebase";
import NavigationLink from "./NavigationLink";

// Initialize Firebase


const Navigation: FC = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setToggle(false);
    logEvent(analytics, "page_view", { page_path: location.pathname });
  }, [location.pathname]);

  return (
    <Navbar
      className="justify-content-md-center bg-color-dark"
      style={{ zIndex: 1000 }}
    >
      <Nav className="d-none d-md-flex align-items-center fs-8">
        <NavigationLink path="/" text="Home" />
        <NavigationLink text="About Us" path="/about-us" />
        {/* <NavigationLink text="Quiz" path="/quiz" /> */}
        <NavigationLink path="/story" text="The Story" />
        <NavigationLink text="The Wedding">
          <NavigationLink path="/location" text="Location" division={false} />
          <NavigationLink
            path="/accomodation"
            text="Accomodation"
            division={false}
          />
          <NavigationLink
            path="/gift-registry"
            text="Gift registry"
            division={false}
          />
        </NavigationLink>
        <NavigationLink path="/rsvp" text="RSVP" division={false} />
      </Nav>
      <Nav className="w-100 d-flex d-md-none flex-column">
        <section className="w-100 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h3 className="justine color-cornsilk fs-4 m-0 ms-4">
              Ilse & Oscar
            </h3>
          </div>
          <div>
            <Button
              onClick={() => setToggle(!toggle)}
              className="btn-link d-block d-md-none"
              variant="link"
            >
              <FontAwesomeIcon icon={faBars} color="ivory" />
            </Button>
          </div>
        </section>
        <Collapse in={toggle}>
          <div>
            <NavigationLink path="/" text="Home" division={false} />
            <NavigationLink text="About Us" path="/about-us" division={false} />
            <NavigationLink path="/story" text="The Story" division={false} />
            <NavigationLink path="/location" text="Location" division={false} />
            <NavigationLink
              path="/accomodation"
              text="Accomodation"
              division={false}
            />
            <NavigationLink
              path="/gift-registry"
              text="Gift registry"
              division={false}
            />
            <NavigationLink path="/rsvp" text="RSVP" division={false} />
          </div>
        </Collapse>
      </Nav>
    </Navbar>
  );
};
export default Navigation;
