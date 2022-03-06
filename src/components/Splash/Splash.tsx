import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import Counter from "./Counter";

const Splash: FC = () => {
  const eventDate = new Date(2022, 9, 22);
  const today = new Date();
  const diff = eventDate.getTime() - today.getTime();
  const days = Math.ceil(diff / (1000 * 3600 * 24));

  return (
    <section
      className="d-flex align-items-center justify-content-center birdlove"
      style={{ height: "90vh" }}
    >
      <div className="text-center">
        <h2 className="october-moon p-4">Ilse & Oscar</h2>
        <div className="d-flex align-items-center justify-content-center flex-column flex-md-row color-normal">
          <h3>
            Oct 22<sup>th</sup> 2022
          </h3>
          <FontAwesomeIcon
            icon={faHeart}
            color="crimson"
            className="px-4 mb-2"
          />
          <h3>Queretaro</h3>
        </div>
        <h4 className="color-normal">{days} days to go!</h4>
        <Counter />
      </div>
    </section>
  );
};

export default Splash;
