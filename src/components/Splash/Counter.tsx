import { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { useDatabaseObjectData, useFirebaseApp } from "reactfire";
import { getDatabase, ref, set } from "firebase/database";
import Milestones from "./Milestones";

import goal1 from "../../images/goal1.png";
import goal2 from "../../images/goal2.png";
import goal3 from "../../images/goal3.png";

const images = [goal1, goal2, goal3];

const Counter: FC = () => {
  const app = useFirebaseApp();
  const db = getDatabase(app);
  const countRef = ref(db, "counter");

  const getImage = () => {
    const hour = new Date().getHours();
    return images[hour % images.length];
  };

  const { status, data: counter } = useDatabaseObjectData<number>(countRef);

  const handleHeartClick = () => {
    const newVal = counter + 1;
    set(countRef, newVal);
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
          <img width={200} src={getImage()} alt="counter icon" />
        </Button>
        <div className="letters fs-3">
          clicked {counter.toLocaleString()} times
        </div>
      </Container>
    </Container>
  ) : null;
};

export default Counter;
