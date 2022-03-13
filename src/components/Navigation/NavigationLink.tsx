import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface NavigationLinkProps {
  path?: string;
  text?: string;
  division?: boolean;
  children?: React.ReactNode;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  path,
  text,
  division = true,
  children,
}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      {children ? (
        <div
          className="link w-children d-flex align-items-center p-1 px-2 m-1 mx-3 position-relative"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {text}
          {isShown ? (
            <div className="position-absolute bg-color-black link-wrapper">
              {children}
            </div>
          ) : null}
        </div>
      ) : (
        <>
          <Link
            to={path ?? ""}
            className="link d-none d-md-flex align-items-center p-1 px-2 m-1 mx-3"
          >
            {text}
          </Link>
          <Link
            to={path ?? ""}
            className="fs-2 link d-flex d-md-none align-items-center p-1 px-2 m-1 mx-3"
          >
            {text}
          </Link>
        </>
      )}
      {division ? <div className="color-almond">•</div> : null}
    </>
  );
};

export default NavigationLink;
