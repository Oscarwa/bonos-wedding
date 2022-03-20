import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useDatabaseObjectData, useFirebaseApp, useUser } from "reactfire";
import { IUser } from "../models/User";

const useAppUser = () => {
  const app = useFirebaseApp();
  const db = getDatabase(app);
  const auth = getAuth(app);
  const { data: user } = useUser();

  const userRef = ref(db, `users/${user?.uid}`);
  const { data: internalUser, status: internalStatus } =
    useDatabaseObjectData<IUser>(userRef);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(internalStatus === "loading");
  }, [internalStatus]);

  const upsert = (user: IUser) => {
    set(userRef, user);
  };

  return { user, internalUser, isLoading, upsert, auth };
};

export default useAppUser;
