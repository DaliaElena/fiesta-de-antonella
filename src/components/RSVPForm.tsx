import { useState } from "react";
import "./RSVPForm.css";

export default function RSVPForm() {
  const [attending, setAttending] = useState<boolean>(true);
  const [bringingGuests, setBringingGuests] = useState<boolean>(true);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const projectId = "antonella.celebremosmifiesta.com";

  const normalizeString = (str: string): string => {
    return str
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/\s+/g, "")
      .toLowerCase();
  };

  const email = name ? `${normalizeString(name)}@nomail.com` : "invitado@email.com";

  const resetForm = () => {
    setAttending(true);
    setBringingGuests(true);
    setAdults(1);
    setChildren(1);
    setName("");
    setPhone("");
    setComments("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name,
      phone,
      attending,
      bringingGuests,
      adults: bringingGuests ? adults : 0,
      children: bringingGuests ? children : 0,
      comments,
    };

    try {
      const response = await fetch(
        `https://o77udbkettwkc4jtspqezbb4qm0zxusi.lambda-url.us-east-1.on.aws/project?project_id=${projectId}&email=${email}`,
        {
          method: "POST",
          headers: {
            "accept": "application/json",
            "Authorization": "Basic YWRtaW46I1Bhcmlz",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Error en el envío, intenta nuevamente");
      }

      // Mostrar el popup después del envío exitoso
      setShowPopup(true);
    } catch (err) {
      console.error("Error en el envío", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!showPopup && (
        <form onSubmit={handleSubmit} className="rsvp-background">
          <p className="text-center text-lg font-semibold">
            Para que mis papás estén mejor organizados, confirma tu asistencia e invitados:
          </p>

          <div className="space-y-2">
            <label className="text-dorado block">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="nombre"
              className="input-bg"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-dorado block">Teléfono (opcional)</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="número"
              className="input-bg"
            />
          </div>
          <br />
          <div className="space-y-2">
            <label className="text-dorado block">¿Asistirás?</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="attending" checked={attending} onChange={() => setAttending(true)} />
                <span className="text-gris">Sí, super sí</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="attending" checked={!attending} onChange={() => setAttending(false)} />
                <span className="text-gris">No :(</span>
              </label>
            </div>
          </div>

          {attending && (
            <>
              <br />
              <div className="space-y-2">
                <label className="text-dorado block">¿Traerás algún invitado?</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="bringingGuests" checked={bringingGuests} onChange={() => setBringingGuests(true)} />
                    <span className="text-gris">Sí</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="bringingGuests" checked={!bringingGuests} onChange={() => setBringingGuests(false)} />
                    <span className="text-gris">No</span>
                  </label>
                </div>
              </div>
              <br />
              {bringingGuests && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gris">Adultxs</label>
                    <input
                      type="number"
                      min={1}
                      max={4}
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="input-bg w-20"
                    />
                  </div>
                  <div>
                    <label className="text-gris">Niñxs</label>
                    <input
                      type="number"
                      min={0}
                      max={4}
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="input-bg w-20"
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <label className="text-dorado block">¿Tienes alguna duda o comentario?</label>
          <textarea
            className="textarea-grande input-bg"
            placeholder="Escribe aquí..."
            rows={5}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />

          <div className="text-center">
            <button type="submit" className="boton-pequeno" disabled={loading}>
              {loading ? "Enviando..." : "ENVIAR"}
            </button>
          </div>
        </form>
      )}

      {/* Popup de confirmación */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p className="text-center text-lg font-semibold">¡Gracias por confirmar!</p>
            <br />
            <button 
              onClick={() => {
                setShowPopup(false);
                resetForm();
              }} 
              className="boton-pequeno"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
