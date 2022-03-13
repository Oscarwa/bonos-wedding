import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { FC, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDatabaseObjectData, useFirebaseApp, useUser } from "reactfire";
import { User } from "../../models/User";

const AuthProtected: FC = ({ children }) => {
  const app = useFirebaseApp();
  const db = getDatabase(app);
  const { data: user } = useUser();
  const userRef = ref(db, `users/${user?.uid}`);
  const { data: internalUser, status: internalStatus } = useDatabaseObjectData<User>(userRef);

  useEffect(() => {
    if (internalStatus === "success" && internalUser === null && user) {
      const newUser: User = {
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid,
        canRsvp: false,
      };
      set(userRef, newUser);
    }
  }, [internalUser, internalStatus, user, userRef]);

  const auth = getAuth(app);

  const handleLogin = async () => {
    await signInWithPopup(auth, new FacebookAuthProvider());
  };
  return (
    <div>
      {user ? (
        children
      ) : (
        <div className="position-relative">
          <div
            className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-color-charcoal-5"
            style={{ zIndex: 1 }}
          >
            <Button variant="dark" className="goldleaf" onClick={handleLogin}>
              Iniciar sesión con Facebook
            </Button>
          </div>
          <div className="blur-3 m-2">{children}</div>
        </div>
      )}
    </div>
  );
};

export default AuthProtected;
