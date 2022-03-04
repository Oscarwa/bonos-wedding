import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface NavigationLinkProps {
  path?: string;
  text?: string;
  heart?: boolean;
  children?: React.ReactNode;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  path,
  text,
  heart = true,
  children,
}) => {
  const [isShown, setIsShown] = useState(false);

  const childStyle = {
    left: '10px',
    top: '50px',
    boxShadow: `3px 3px 10px 2px #BBB`,
  };

  return (
    <>
      {children ? (
        <>
          <div
            className="link w-children d-flex align-items-center p-1 px-3 m-1 position-relative"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {text}
            {isShown ? (
              <div className="position-absolute bg-light link-wrapper" style={childStyle}>
                {children}
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <>
          <Link to={path ?? ""} className="link d-flex align-items-center p-1 px-3 m-1">
            {text}
          </Link>
        </>
      )}
      {heart ? (
        <FontAwesomeIcon
          icon={faHeart}
          size="xs"
          color="crimson"
          className="mt-1"
        />
      ) : null}
    </>
  );
};

export default NavigationLink;
