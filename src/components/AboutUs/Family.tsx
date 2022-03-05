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
          El primogénito. Adoptarlo es la mejor decisión que pudimos tomar
          porque con él comenzó nuestra familia perruna. Es un salchicho muy
          gruñón y ama ladrar pero también es muy cariñoso y se preocupa mucho
          por sus papás y sus hermanas. Nunca se cansa de jugar y es muy
          molestito para quien no le tiene paciencia pero en esta casa es el
          rey. Es el guarura personal de Ilse, no deja que nadie se le acerque
        </p>
      </Perritu>
      <Perritu name="Donatella" photo={donatella}>
        <p>
          Donita se adoptó sola, llegó y supo ganarnos inmediatamente. Es la más
          noble de sus hermanitos, muy educada y cariñosa. A veces es muy
          necesitada de atención y no te deja ver con una mirada creepy hasta
          que le haces caso. Tiene carácter fuerte y se aloca cuando no está de
          humor pero aún así es muy buena.
        </p>
      </Perritu>
      <Perritu name="Tepe" photo={tepe} reverse>
        <p>
          Que significa Tepe te estarás preguntando, nosotros tampoco lo
          sabemos. Ella nació en Ciudad Mante Tamaulipas, tuvo una vida difícil
          hasta el momento que la rescataron de la calle. Cuando llegó a nuestra
          familia era muy flaquita y se ganó el apodo de tripita. Su nombre
          oficial es Cajeta pero con el tiempo sus apodos ganaron peso y de
          alguna forma llegamos a Tepe. Es una gordita muy cariñosa, ama dar
          besitos y gritar cuando está feliz. Su actividad favorita es morder
          calcetas recién quitadas y tomar el sol.
        </p>
      </Perritu>
      <Perritu name="Kiki" photo={kiki}>
        <p>
          La bebé de la casa. La mejor palabra para definirla es <i>loca</i> porque
          nunca te vas a aburrir viéndola. Es muy amigable con la gente y con
          sus hermanos a los cuales AMA molestar todo el tiempo y se ofende
          mucho si no le hacen caso. Tiene una extraña fijación de estar siempre
          con la Tepe y usarla de asiento.
        </p>
      </Perritu>
      <div className="py-5"></div>
    </>
  );
};

export default Family;
