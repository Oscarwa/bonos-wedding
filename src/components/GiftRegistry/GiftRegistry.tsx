import { FC } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import gifts from '../../images/gifts.jpg';
import amazon from '../../images/amazon.webp';

const GiftRegistry: FC = () => {
  return (
    <div className="birdlove text-center p-4">
      <p>Bienvenidos a nuestra mesa de regalos moderna! </p>
      <p>
        El mejor regalo que nos pueden brindar es el de compartir con nosotros
        nuestra celebración, pero hemos puesto una mesa de regalos en Amazon
        para su facilidad y comodidad. En verdad lo apreciamos mucho su regalo y
        es algo que nos va a ayudar muchísimo.
      </p>
      <ParallaxBanner
        layers={[
          { image: gifts, speed: 5 },
          {
            children: (
              <div className="gift-registry-back">
                <a
                  href="https://www.amazon.com.mx/wedding/share/Bonos-wedding-2022"
                  target="_blank"
                  rel="noreferrer"
                >
                <h3 className="vanilla-link pt-3"> Bonos Wedding 2022</h3>
                  <img height="250px" src={amazon} alt="Amazon" />
                </a>
              </div>
            ),
          },
        ]}
        className=""
        style={{ height: "600px" }}
      />
      <p>
        Sepan que estamos al pendiente y cualquier duda nos pueden preguntar!
      </p>
    </div>
  );
};

export default GiftRegistry;