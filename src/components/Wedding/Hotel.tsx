import {
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { Button, Collapse, ListGroup } from "react-bootstrap";

interface HotelProps {
  name?: string;
  phone?: string;
  email?: string;
  place?: string;
  secondary?: boolean;
  disableToggle?: boolean;
}

const Hotel: FC<HotelProps> = ({
  name,
  phone,
  email,
  place,
  secondary = false,
  disableToggle = false,
}) => {
  const [toggle, setToggle] = useState(disableToggle);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="letters">{name}</h6>
        {!disableToggle ? (
          <Button variant="link" onClick={() => setToggle(!toggle)}>
            <FontAwesomeIcon
              icon={toggle ? faChevronUp : faChevronDown}
              size="xs"
            />
          </Button>
        ) : null}
      </div>
      <Collapse in={toggle}>
        <ListGroup variant="flush">
          <ListGroup.Item
            className={`d-flex align-items-center ${secondary ? "py-0" : null}`}
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="color-ebony pe-2"
              size={secondary ? "xs" : "lg"}
            />
            <a className="letters color-ebony" href={`tel:+52 ${phone}`}>
              {phone}
            </a>
          </ListGroup.Item>
          <ListGroup.Item
            className={`d-flex align-items-center ${secondary ? "py-0" : null}`}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="color-ebony pe-2"
              size={secondary ? "xs" : "lg"}
            />
            <a className="letters color-ebony" href={`mailto:${email}`}>
              {email}
            </a>
          </ListGroup.Item>
          {place ? (
            <ListGroup.Item
              className={`d-flex align-items-center ${
                secondary ? "py-0" : null
              }`}
            >
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="color-ebony pe-2"
                size={secondary ? "xs" : "lg"}
              />
              <a
                className="letters color-ebony"
                href={place}
                target="_blank"
                rel="noreferrer"
              >
                {place}
              </a>
            </ListGroup.Item>
          ) : null}
        </ListGroup>
      </Collapse>
    </>
  );
};

export default Hotel;
