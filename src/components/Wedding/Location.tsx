import { FC } from "react";
import { Carousel } from "react-bootstrap";
import hacienda01 from "../../images/hacienda01.jpg";
import hacienda02 from "../../images/hacienda02.jpg";
import hacienda03 from "../../images/hacienda03.jpg";
import hacienda04 from "../../images/hacienda04.jpg";
import hacienda05 from "../../images/hacienda05.jpg";
import hacienda06 from "../../images/hacienda06.jpg";

const photos = [{src:hacienda01},{src:hacienda02},{src:hacienda03},{src:hacienda04},{src:hacienda05},{src:hacienda06},]

const Location: FC = () => {
  return (
    <section>
      <h3 className="birdlove text-center">Hacienda Tovares</h3>
      <p>
        Hacienda Tovares edificada en 1640, es el lugar que vio ocurrir el
        acontecimiento civil que originó la fundación de la actual ciudad de
        Cadereyta de Montes.
      </p>
      <p>
        Restaurada y convertida en un exclusivo complejo turístico, apartado de
        la ciudad, con espacios al aire libre y lleno de naturaleza distribuida
        en sus 52 hectáreas, es el lugar perfecto donde converge la magia del
        semidesierto, 400 años de historia y un ambiente ecuestre inconfundible.
      </p>
      <div>
        <Carousel>
          {photos.map((photo, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                style={{maxHeight: 600}}
                src={photo.src}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <iframe
          title="Hacienda Tovares on Google Maps"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOe3tCHyE04URSoy_RAVO08M&key=AIzaSyDu9xFyRzxr59aphC2L3uSA_8JlHKWq9rg"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
