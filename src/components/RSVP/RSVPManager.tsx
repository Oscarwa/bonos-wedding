import { getDatabase, ref, set } from "firebase/database";
import { FC, useCallback, useMemo } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { useDatabaseListData, useFirebaseApp } from "reactfire";
import { IUser } from "../../models/User";
import BonoTable from "../BonoTable/BonoTable";

const RSVPManager: FC = () => {
  const app = useFirebaseApp();
  const db = getDatabase(app);
  const usersRef = ref(db, "users");

  const { data: users, error } = useDatabaseListData<IUser>(usersRef);

  const boolToColumn = ({ value }: any) => <>{!!value ? "Sí" : "No"}</>;

  const updateRSVP = useCallback(
    (row: IUser, value: boolean) => {
      const u = users?.find((u) => u.uid === row.uid);
      if (u) {
        u.canRsvp = value;
        const uRef = ref(db, `users/${u.uid}`);
        set(uRef, u);
      }
    },
    [db, users]
  );
  const updateAdmits = useCallback(
    (row: IUser, value: number) => {
      const u = users?.find((u) => u.uid === row.uid);
      if (u) {
        u.admits = value;
        const uRef = ref(db, `users/${u.uid}`);
        set(uRef, u);
      }
    },
    [db, users]
  );

  const columns = useMemo(
    () => [
      { Header: "Nombre", accessor: "displayName" },
      {
        Header: "Puede RSVP",
        accessor: "canRsvp",
        Cell: ({ value, row }: any) => (
          <>
            <Form.Check
              type="switch"
              checked={value}
              onChange={() => updateRSVP(row.original, !value)}
            />
          </>
        ),
      },
      {
        Header: "Admits",
        accessor: "admits",
        Cell: ({ value, row }: any) => (
          <div>
            <ButtonGroup>
              <Button
                onClick={() => updateAdmits(row.original, 1)}
                disabled={!row.original.canRsvp}
                className="fs-08"
                variant={value === 1 ? "light" : "dark"}
              >
                1
              </Button>
              <Button
                onClick={() => updateAdmits(row.original, 2)}
                disabled={!row.original.canRsvp}
                className="fs-08"
                variant={value === 2 ? "light" : "dark"}
              >
                2
              </Button>
            </ButtonGroup>
          </div>
        ),
      },
      { Header: "Asistirá", accessor: "rsvp.going", Cell: boolToColumn },
      { Header: "Confirmado", accessor: "rsvp.confirmed", Cell: boolToColumn },
      {
        Header: "Acompañante",
        accessor: "rsvp.plusOne",
        Cell: ({ value }: any) => <>{value?.name}</>,
      },
    ],
    [updateAdmits, updateRSVP]
  );

  return (
    <section>
      {!error && users ? <BonoTable data={users} columns={columns} /> : null}
    </section>
  );
};

export default RSVPManager;
