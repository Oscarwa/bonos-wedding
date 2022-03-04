import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const Splash: FC = () => {

    const eventDate = new Date(2022, 9, 22);
    const today = new Date();
    const diff = eventDate.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 3600 * 24));

    return (
      <section className="text-center birdlove">
        <div className="p-4" />
        <h1 className="october-moon p-4">Ilse & Oscar</h1>
        <div className="d-flex align-items-center justify-content-center">
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
        <h4>{days} days to go!</h4>
        <div className="p-5" />
      </section>
    );
}

export default Splash;
