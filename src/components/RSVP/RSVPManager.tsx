import { getDatabase, ref, set, update } from "firebase/database";
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

  const manualRSVP = useCallback((row: IUser) => {
    const u = users?.find((u) => u.uid === row.uid);
      if (u) {
        u.rsvp = {
          confirmed: true,
          confirmedOn: new Date().toISOString(),
          going: true,
          plusOne: { name: "" },
        };
        const uRef = ref(db, `users/${u.uid}`);
        console.log(u.uid);
        update(uRef, u);
      }
  }, [db, users])

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
  const nameColumn = useMemo(
    () => ({
      Header: "Nombre",
      accessor: "displayName",
      Cell: ({ value, row }: any) => (
        <>
          <img className="me-2" src={row.original.photoUrl} alt={value} />
          {value}
        </>
      ),
    }),
    []
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
      nameColumn,
      canRSVPColumn,
      admitsColumn,
      {
        Header: "Reminder",
        Cell: () => (
          <a
            href="https://api.whatsapp.com/send?text=Hola! Sabemos que aun falta mucho para la fecha del evento, pero te agradeceríamos muchísimo que, si ya sabes si nos vas a poder acompañar o no, nos apoyes llenando el pequeño formulario de RSVP 😊, son algunos pasos los que tienes que hacer:%0D%0A%0D%0A
            1. Entra aquí: https://bonos-wedding.web.app/rsvp %0D%0A
            2. Iniciar sesión con Facebook para tener tu nombre en nuestro registro %0D%0A
            3. Debes esperar un momento para que podamos darte acceso%0D%0A
            4. (Si se tarda mucho nos puedes mandar un mensaje y queda rápido)%0D%0A
            5. Una vez configurado, deberás ingresar de nuevo para llenar los datos de tu confirmación%0D%0A
            6. Y listo!"
            target="_blank"
            rel="noreferrer"
          >
            Enviar whats
          </a>
        ),
      },
      {
        Header: "Manual",
        accessor: "rsvp",
        Cell: ({ value, row }: any) => (
          <>
            <Button size="sm" onClick={() => manualRSVP(row.original)}>
              Manual RSVP
            </Button>
          </>
        ),
      },
    ],
    [nameColumn, canRSVPColumn, admitsColumn]
  );

  const columnsConfirmed = useMemo(
    () => [
      nameColumn,
      { Header: "Admits", accessor: "admits" },
      { Header: "Asistirá", accessor: "rsvp.going", Cell: boolToColumn },
      { Header: "Confirmado", accessor: "rsvp.confirmed", Cell: boolToColumn },
      {
        Header: "Acompañante",
        accessor: "rsvp.plusOne",
        Cell: ({ value }: any) => <>{value?.name}</>,
      },
      {
        Header: "uid",
        accessor: "uid",
        Cell: ({ value }: any) => <>{value}</>,
      },
    ],
    [nameColumn]
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
