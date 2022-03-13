import { FC, useMemo } from "react";
import { getDatabase, ref } from "firebase/database";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDatabaseListData, useFirebaseApp } from "reactfire";
import { formatRelative } from "date-fns";
import { es } from "date-fns/locale";
import { Message } from "../../models/Message";

const CommentsSection: FC = () => {
  const app = useFirebaseApp();
  const db = getDatabase(app);
  const messagesRef = ref(db, "messages");

  const { data: messages } = useDatabaseListData<Message>(messagesRef);

  const sortedMessages = useMemo(
    () =>
      messages?.sort(
        (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
      ),
    [messages]
  );

  return (
    <Container>
      <Row>
        {sortedMessages?.map((m: Message, index: number) => (
          <Col key={index} sm={12} lg={6} className="pb-3">
            <Card>
              <Card.Body className="px-2 py-1 letters">
                <div>
                  <div className="d-flex flex-row">
                    <img
                      className="me-2"
                      width={80}
                      src={m.photo}
                      alt={m.user}
                    />
                    <div>
                      <div className="fs-5 color-black bold">{m.user}</div>
                      <time className="color-ebony italic">
                        {formatRelative(new Date(m.time), new Date(), {
                          locale: es,
                        })}
                      </time>
                    </div>
                  </div>
                  <p>{m.text}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CommentsSection;
