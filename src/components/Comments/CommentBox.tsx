import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getDatabase, push, ref } from "firebase/database";
import { useFirebaseApp, useUser } from "reactfire";
import { toast } from "react-toastify";
import AuthProtected from "../Common/AuthProtected";
import { Message } from "../../models/Message";

const CommentBox: FC = () => {
  const app = useFirebaseApp();
  const db = getDatabase(app);
  const messageRef = ref(db, "messages");
  const { data: user } = useUser();
  const [text, setText] = useState("");

  const handleSend = async () => {
    const message = {
      text,
      user: user?.displayName,
      photo: user?.photoURL,
      time: new Date().toISOString(),
    } as Message;
    await push(messageRef, message);
    toast.success("Mensaje enviado!");
    setText("");
  };

  return (
    <AuthProtected>
      <section>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            className="letters"
            rows={3}
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
          <div className="mt-2 d-flex justify-content-end">
            <Button
              className="color-ivory bg-color-charcoal goldleaf"
              onClick={handleSend}
              disabled={text === ''}
            >
              Comentar {user? `como ${user.displayName}` : null}
            </Button>
          </div>
        </Form.Group>
      </section>
    </AuthProtected>
  );
};
export default CommentBox;
