import { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { useDatabaseObjectData, useFirebaseApp } from "reactfire";
import { getDatabase, ref, set } from "firebase/database";
import Milestones from "./Milestones";

import goal1 from "../../images/goal1.png";
import goal2 from "../../images/goal2.png";
import goal3 from "../../images/goal3.png";
import goal4 from "../../images/goal4.png";
import goal5 from "../../images/goal5.png";
import goal6 from "../../images/goal6.webp";
import goal7 from "../../images/goal7.png";
import goal8 from "../../images/goal8.png";
import goal9 from "../../images/fav.png";
import goal10 from "../../images/goal10.png";
import goal11 from "../../images/goal11.webp";

const images = [goal1, goal2, goal3, goal4, goal5, goal6, goal7, goal8, goal9, goal10, goal11];

const Counter: FC = () => {
  const app = useFirebaseApp();
  const db = getDatabase(app);
  const countRef = ref(db, "counter");

  const { status, data: counter } = useDatabaseObjectData<number>(countRef);
  const getImage = () => {
    return images[counter % images.length];
  };


  const handleHeartClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(event.isTrusted){
      const newVal = counter + 1;
      set(countRef, newVal);
    }
  };

  return status === "success" ? (
    <Container
      fluid
      className="py-4 py-lg-5 position-relative"
      style={{ zIndex: 1200 }}
    >
      <Milestones progress={counter} />
      <Container className="text-center">
        <Button variant="link" onClick={handleHeartClick}>
          <img height={200} src={getImage()} alt="counter icon" className="grayscale p-3"/>
        </Button>
        <div className="letters fs-3">
          clicked {counter.toLocaleString()} times
        </div>
      </Container>
    </Container>
  ) : null;
};

export default Counter;
