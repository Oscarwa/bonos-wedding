import { getDatabase, ref } from "firebase/database";
import { FC, useMemo } from "react";
import { useDatabaseListData, useFirebaseApp } from "reactfire";
import { IUser } from "../../models/User";
import BonoTable from "../BonoTable/BonoTable";

const RSVPManager: FC = () => {
  const app = useFirebaseApp();
  const db = getDatabase(app);
  const usersRef = ref(db, "users");

  const { data: users, error } = useDatabaseListData<IUser>(usersRef);

  const columns = useMemo(
    () => [
      { Header: "Nombre", accessor: "displayName" },
      {
        Header: "Puede RSVP",
        accessor: "canRsvp",
        Cell: ({ value }: any) => <>{!!value ? "Sí" : "No"}</>,
      },
      { Header: "Admits", accessor: "admits" },
      { Header: "Asistirá", accessor: "rsvp.going" },
      { Header: "Confirmado", accessor: "rsvp.confirmed" },
    ],
    []
  );

  return (
    <section>
      {/* {users?.map((u) => (
        <div key={u.uid} className="d-flex">
          <div>{u.displayName}</div>
          <div>{u.rsvp?.attendees}</div>
        </div>
      ))} */}
      <BonoTable data={users} columns={columns} />
    </section>
  );
};

export default RSVPManager;
