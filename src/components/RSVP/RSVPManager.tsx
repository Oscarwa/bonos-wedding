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

  const missingConfirmationUsers = useMemo(
    () => users?.filter((u) => !u.canRsvp || !u.rsvp?.confirmed) ?? [],
    [users]
  );
  const confirmedUsers = useMemo(
    () =>
      users
        ?.filter((u) => u.canRsvp && u.rsvp?.confirmed)
        .sort(
          (a, b) =>
            new Date(b.rsvp!.confirmedOn!).getTime() -
            new Date(a.rsvp!.confirmedOn!).getTime()
        ) ?? [],
    [users]
  );

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

  const canRSVPColumn = useMemo(
    () => ({
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
    }),
    [updateRSVP]
  );

  const admitsColumn = useMemo(
    () => ({
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
    }),
    [updateAdmits]
  );

  const columnsNew = useMemo(
    () => [
      { Header: "Nombre", accessor: "displayName" },
      canRSVPColumn,
      admitsColumn,
    ],
    [canRSVPColumn, admitsColumn]
  );

  const columnsConfirmed = useMemo(
    () => [
      { Header: "Nombre", accessor: "displayName" },
      { Header: "Admits", accessor: "admits" },
      { Header: "Asistirá", accessor: "rsvp.going", Cell: boolToColumn },
      { Header: "Confirmado", accessor: "rsvp.confirmed", Cell: boolToColumn },
      {
        Header: "Acompañante",
        accessor: "rsvp.plusOne",
        Cell: ({ value }: any) => <>{value?.name}</>,
      },
    ],
    []
  );

  return (
    <section>
      <div className="h5 letters mt-4">
        Missing confirmation ({missingConfirmationUsers?.length} /{" "}
        {users?.length})
      </div>
      {!error && users ? (
        <BonoTable data={missingConfirmationUsers} columns={columnsNew} />
      ) : null}
      <div className="h5 letters mt-4 d-flex justify-content-between">
        <div>
          Confirmed ({confirmedUsers?.length} / {users?.length})
        </div>
        <div>
          Going: {confirmedUsers?.filter((u) => u.rsvp?.going)?.length}{" "}
          (plus-ones:{" "}
          {
            confirmedUsers?.filter((u) => u.rsvp?.going && u.rsvp.plusOne?.name)
              ?.length
          }
          ) ||| Not going:{" "}
          {confirmedUsers?.filter((u) => !u.rsvp?.going)?.length}
        </div>
      </div>
      {!error && users ? (
        <BonoTable data={confirmedUsers} columns={columnsConfirmed} />
      ) : null}
    </section>
  );
};

export default RSVPManager;
