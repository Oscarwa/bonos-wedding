import { FC } from "react";
import Perritu from "./Perritu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import nugget from '../../images/nugget1.jpg';
import donatella from '../../images/donatella1.jpg';
import tepe from '../../images/tepe1.jpg';
import kiki from '../../images/kiki1.jpg';

const Family: FC = () => {
  return (
    <>
      <h4 className="d-flex align-items-center justify-content-center text-center october-moon py-5">
        <FontAwesomeIcon
          icon={faHeart}
          color="crimson"
          size="xs"
          className="px-2 mb-2"
        />
        Our Family!
        <FontAwesomeIcon
          icon={faHeart}
          color="crimson"
          size="xs"
          className="px-2 mb-2"
        />
      </h4>
      <Perritu name="Nugget" photo={nugget} reverse>
        <p>
          El perrito petacón más querido y más odiado por todos, fue la primera
          mascota que adoptamos e inmediatamente nos enamoramos de él. Le gusta
          mucho romper juguetes, entre más humildes mejor (es súper feliz con un
          bote de plastico de coca vacío). Es el guarura personal de Ilse, no
          deja que nadie se le acerque
        </p>
      </Perritu>
      <Perritu name="Donatella" photo={donatella}>
        <p>
          El perrito petacón más querido y más odiado por todos, fue la primera
          mascota que adoptamos e inmediatamente nos enamoramos de él. Le gusta
          mucho romper juguetes, entre más humildes mejor (es súper feliz con un
          bote de plastico de coca vacío). Es el guarura personal de Ilse, no
          deja que nadie se le acerque
        </p>
      </Perritu>
      <Perritu name="Tepe" photo={tepe} reverse>
        <p>
          Que significa Tepe te estarás preguntando, nosotros tampoco lo
          sabemos. La adoptamos en mayo del 2018? Con el nombre de Bella. Estaba
          toda flaquita hasta los huesos y acababa de tener cachorritos. Después
          de pasar por los nombres Canela {">"} Tripita {">"} Chapita {"> "}
          Chepe, finalmente terminó deformado en Tepe. Es muy nerviosa y miedosa
          con todas las personas y después de años sigue sin aprender en hacer
          sus necesidades donde debe pero fuera de eso es la perrita mas buena y
          hermosa.
        </p>
      </Perritu>
      <Perritu name="Kiki" photo={kiki}>
        <p>
          El perrito petacón más querido y más odiado por todos, fue la primera
          mascota que adoptamos e inmediatamente nos enamoramos de él. Le gusta
          mucho romper juguetes, entre más humildes mejor (es súper feliz con un
          bote de plastico de coca vacío). Es el guarura personal de Ilse, no
          deja que nadie se le acerque
        </p>
      </Perritu>
      <div className="py-5"></div>
    </>
  );
};

export default Family;
