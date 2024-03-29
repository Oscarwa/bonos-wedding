import { FC, useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAppUser from "../../hooks/useAppUser";
import { IAttendee, IRsvp } from "../../models/User";
import AuthProtected from "../Common/AuthProtected";

const RSVP: FC = () => {
  const [going, setGoing] = useState<boolean>(true);
  const [plusOneName, setPlusOneName] = useState<string>("");
  const [noPlusOne, setNoPlusOne] = useState<boolean>(false);
  const [disclaimer, setDisclaimer] = useState(false);
  const { internalUser, upsert } = useAppUser();

  const submit = () => {
    const confirmedOn = new Date().toISOString();
    let rsvp: IRsvp = { confirmed: true, confirmedOn } as IRsvp;
    if (going) {
      rsvp.going = true;
      if (!noPlusOne) {
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
        Gracias por ayudarnos confirmando tu asistencia al evento. Para enviar
        tu respuesta sólo tendrás que iniciar sesión con tu cuenta de Facebook
      </p>
      <p className="fs-5 mb-4">
        Si no podrás acompañarnos, por favor de cualquier forma ingresa tu
        respuesta seleccionando la opción de "No podré asistir"
      </p>
      <p className="fs-5 mb-4">
        En la parte superior de la invitación que se te envío personalmente, se
        indica cuantas personas incluye tu pase
      </p>
      <p className="fs-5 mb-4">
        Si tienes alguna duda, que no te de pena preguntar 🙂
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
                      {internalUser.displayName}{" "}
                      <span className="ms-2 fs-4">is ready to rock 🤘🏾</span>
                      {internalUser.rsvp?.plusOne?.name ? (
                        <div className="fs-4">
                          & {internalUser.rsvp?.plusOne?.name} will join them!
                        </div>
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
                  id="going"
                  checked={going ?? false}
                  label="Claro que sí! Ya quiero celebrar con ustedes 😊"
                  className="fs-4 letters"
                  disabled={internalUser.rsvp?.confirmed}
                />
                <Form.Check
                  type="checkbox"
                  id="not-going"
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
                      id="no-plus-one"
                      className="fs-4 letters"
                      checked={noPlusOne}
                      onChange={() => setNoPlusOne(!noPlusOne)}
                      label="Gracias, pero no llevaré acompañante."
                      disabled={!!internalUser.rsvp?.confirmed}
                    />
                  </div>
                ) : null}
                {going ? (
                  <div>
                    <Form.Check
                      type="checkbox"
                      className="fs-4 letters pt-5"
                      onChange={() => setDisclaimer(!disclaimer)}
                      checked={disclaimer}
                      id="disclaimer"
                      label={
                        internalUser.admits === 2
                          ? "Acepto que celebraré a lo grande en este día 🎉 y no llevaré ilegalmente a un niño 🌚."
                          : "Acepto que celebraré a lo grande en este día 🎉, comprendo que mi invitación no incluye acompañante y tampoco llevaré ilegalmente a un niño 🌚."
                      }
                      disabled={!!internalUser.rsvp?.confirmed}
                    />
                  </div>
                ) : null}

                <div className="d-flex justify-content-end">
                  <Button
                    variant="dark"
                    className="goldleaf"
                    onClick={submit}
                    disabled={
                      !!internalUser.rsvp?.confirmed || (!disclaimer && going)
                    }
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
      {internalUser && internalUser.isAdmin ? (
        <div className="text-center mb-3">
          <Link to="/rsvp-manager">
            <Button variant="dark">Go to RSVP Manager</Button>
          </Link>
        </div>
      ) : null}
    </Container>
  );
};

export default RSVP;
