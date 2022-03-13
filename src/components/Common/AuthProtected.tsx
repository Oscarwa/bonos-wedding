import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FC } from "react";
import { Button } from "react-bootstrap";
import { useFirebaseApp, useUser } from "reactfire";

const AuthProtected: FC = ({ children }) => {
  const app = useFirebaseApp();

  const auth = getAuth(app);

  const { data: user } = useUser();
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
