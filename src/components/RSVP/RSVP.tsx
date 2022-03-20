import { FC, useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import useAppUser from "../../hooks/useAppUser";
import { IAttendee, IRsvp } from "../../models/User";
import AuthProtected from "../Common/AuthProtected";
import RSVPManager from "./RSVPManager";

const RSVP: FC = () => {
  const [going, setGoing] = useState<boolean | null>(null);
  const [plusOneName, setPlusOneName] = useState<string>("");
  const [noPlusOne, setNoPlusOne] = useState<boolean>(false);
  const { internalUser, upsert } = useAppUser();

  const submit = () => {
    let rsvp: IRsvp = {} as IRsvp;
    if (going) {
      rsvp.going = true;
      if (!noPlusOne && plusOneName.length > 3) {
        const p1 = { name: plusOneName } as IAttendee;
        rsvp.plusOne = p1;
      }
    } else {
      rsvp.going = false;
    }
    internalUser.rsvp = rsvp;
    upsert(internalUser);
  };

  return (
    <Container>
      <h1 className="fs-1 text-center shadow-charcoal py-4">RSVP</h1>
      <p className="fs-5 mb-4">
        Hola!
        <br />
        Gracias por ayudarnos con la coordinación confirmando tu asistencia al
        evento, por favor inicia sesión con tu cuenta de Facebook para
        pre-registrarte y en un lapso menor a 24 horas podrás hacer tu
        confirmación aquí mismo.
      </p>
      <p className="fs-5 mb-4">
        Por favor revisa la invitación que se te envió personalmente. En la
        parte superior se indica cuantas personas incluye tu pase.
      </p>
      <p className="fs-5 mb-4">
        RECUERDA: esta celebración no es apta para niños 🤘🏾
      </p>
      <div className="my-5">
        <AuthProtected>
          <div>
            {internalUser?.rsvp?.confirmed ? (
              <div>
                <p>Gracias por confirmar!</p>
                {internalUser.rsvp?.going ? (
                  <div>
                    <p>A continuación el detalle de tu confirmación:</p>
                    <div className="goldleaf fs-2">
                      {internalUser.displayName}
                      {/* {internalUser.rsvp.going ? "Sí" : "No"} iré */}
                      {internalUser.rsvp?.plusOne?.name ? (
                        <div className="fs-4">Acompañado de {internalUser.rsvp?.plusOne?.name}</div>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <p>Lamentamos mucho que no puedas acompañarnos :(</p>
                )}
              </div>
            ) : internalUser?.canRsvp ? (
              <div>
                <Form.Check
                  type="checkbox"
                  onChange={() => setGoing(true)}
                  checked={going ?? false}
                  label="Claro que sí! Ya quiero celebrar con ustedes 😊"
                  className="fs-4 letters"
                  disabled={internalUser.rsvp?.confirmed}
                />
                <Form.Check
                  type="checkbox"
                  onChange={() => setGoing(false)}
                  checked={going === false ?? false}
                  label="Lamentablemente no podré asistir pero muchas gracias por la invitación."
                  className="fs-4 letters"
                  disabled={internalUser.rsvp?.confirmed}
                />

                {going && internalUser?.admits === 2 ? (
                  <div className="py-3">
                    <p>
                      Veo que tu invitación incluye acompañante, podrías
                      compartirnos su nombre y apellido?
                    </p>
                    <FormControl
                      className="fs-5 letters"
                      onChange={(event) => setPlusOneName(event.target.value)}
                      placeholder="Nombre y apellido"
                      value={plusOneName}
                      disabled={noPlusOne || internalUser.rsvp?.confirmed}
                    />
                    <Form.Check
                      type="checkbox"
                      className="fs-4 letters"
                      checked={noPlusOne}
                      onChange={() => setNoPlusOne(!noPlusOne)}
                      label="Gracias, pero no llevaré acompañante."
                      disabled={!!internalUser.rsvp?.confirmed}
                    />
                  </div>
                ) : going && internalUser.admits === 1 ? (
                  <div>
                    <Form.Check
                      type="checkbox"
                      className="fs-4 letters pt-5"
                      onChange={() => setNoPlusOne(!noPlusOne)}
                      label="Comprendo que mi invitación no incluye acompañante y tampoco llevaré ilegalmente un niño."
                      disabled={!!internalUser.rsvp?.confirmed}
                    />
                  </div>
                ) : null}

                <div className="d-flex justify-content-end">
                  <Button
                    variant="dark"
                    className="goldleaf"
                    onClick={submit}
                    disabled={!!internalUser.rsvp?.confirmed}
                  >
                    {going === null
                      ? "Enviar"
                      : going
                      ? "Confirmando mi asistencia"
                      : "No podré asistir"}
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <p>
                  Estamos trabajando para facilitar el registro a todos nuestros
                  invitados. Por favor se paciente! 😊
                </p>
              </div>
            )}
          </div>
        </AuthProtected>
      </div>
      <hr />
      {internalUser && internalUser.uid === "8kwUWfWALIhEg2aRu9j77TrwydQ2" ? (
        <RSVPManager />
      ) : null}
    </Container>
  );


};

export default RSVP;
