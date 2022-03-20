import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { FC, useEffect } from "react";
import { Button } from "react-bootstrap";
import useAppUser from "../../hooks/useAppUser";
import { IUser } from "../../models/User";

const AuthProtected: FC = ({ children }) => {
  const { user, internalUser, isLoading, upsert, auth } = useAppUser();

  useEffect(() => {
    if (!isLoading && internalUser === null && user) {
      const newUser: IUser = {
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid,
        canRsvp: false,
        rsvp: { confirmed: false },
      };
      upsert(newUser);
    }
  }, [internalUser, isLoading, user, upsert]);

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
            className="p-4 position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-color-charcoal-5"
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
