import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { useDatabaseObjectData, useFirebaseApp } from "reactfire";
import { getDatabase, ref, set } from 'firebase/database';
import Milestones from "./Milestones";

const Counter: FC = () => {
    const app = useFirebaseApp();
    const db = getDatabase(app);
    const countRef = ref(db, 'counter');

    const { status, data: counter } = useDatabaseObjectData<number>(countRef);

  const handleHeartClick = () => {
      const newVal = counter + 1;
      set(countRef, newVal);
  };

  return status === "success" ? (
    <Container fluid className="py-4 py-lg-5 position-relative" style={{zIndex: 1200}}>
      <Milestones progress={counter} />
      <Container className="text-center">
        <Button variant="link" onClick={handleHeartClick}>
          <FontAwesomeIcon icon={faHeart} color="crimson" size="7x" />
        </Button>
        <div className="letters fs-3">
          clicked {counter.toLocaleString()} times
        </div>
      </Container>
    </Container>
  ) : null;
};

export default Counter;
