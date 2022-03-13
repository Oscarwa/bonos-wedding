import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { FC, useEffect, useState } from "react";
import { Button, Collapse, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NavigationLink from "./NavigationLink";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Navigation: FC = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setToggle(false);
    logEvent(analytics, "page_view", { page_path: location.pathname });
  }, [location]);

  return (
    <Navbar
      className="justify-content-md-center bg-color-black"
      style={{ zIndex: 1000 }}
    >
      <Nav className="d-none d-md-flex align-items-center fs-8">
        <NavigationLink path="/" text="Home" />
        <NavigationLink text="About Us" path="/about-us" />
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
              <FontAwesomeIcon icon={faBars} />
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
