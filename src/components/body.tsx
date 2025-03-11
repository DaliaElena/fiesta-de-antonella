import "./Body.css"; 
import RSVPForm from "./RSVPForm";

const Body = () => {
  const eventTitle = "Mi fiesta de cumpleaños 1 año Antonella";
  const eventDate = "Sábado 12 de abril";
  const eventTimeLocal = "10:00 AM - 12:00 PM";
  const eventLocation = "Parque Infantil La Hormiga, Chapultepec.";
  const eventFullAddress = "Residencia Oficial de los Pinos, Molino del Rey 1, San Miguel Chapultepec I Secc, Miguel Hidalgo, 11580 Ciudad de México, CDMX";
  const eventUrl = "https://antonella.celebremosmifiesta.com";

  const startDateLocal = "20250412T100000"; // 10:00 AM en CDMX
  const endDateLocal = "20250412T110000"; // 11:00 AM en CDMX
  const timeZone = "America/Mexico_City"; // Zona horaria correcta

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDateLocal}/${endDateLocal}&details=${encodeURIComponent(eventUrl)}&location=${encodeURIComponent(eventFullAddress)}&sf=true&output=xml&ctz=${encodeURIComponent(timeZone)}`;

  const googleMapsUrl = "https://www.google.com/maps?ll=19.415288,-99.190182&z=14&t=m&hl=es-419&gl=MX&mapclient=embed&cid=13110028265697055465";
  const googleParkingUrl = "https://maps.app.goo.gl/sF2g2HVAZNH2KQLY9";

  return (
    <main className="body">
      <h1 data-text>¡Te invito a mi picnic party!</h1>
      <img 
        src="/images/nala.jpeg" 
        alt="Nala" 
        className="imagen-circular"
      />
      <h2>Nina Antonella</h2>
      <h1>Cumple UNO</h1>
      <p>¡Festeja con nosotros!</p>

      <p>{eventDate} <br />{eventTimeLocal}</p>
      <br />
      
      {/* Botón para agregar al calendario */}
      <button 
        className="boton-pequeno bg-red-600 text-white font-bold" 
        onClick={() => window.open(googleCalendarUrl, '_blank')}
      >
        Añadir a mi calendario 📅
      </button>

      <br />
      <br />
      <p>{eventLocation}
        <br />
        <br />
        {eventFullAddress}
      </p>
      <br />
      <br />

      <div className="max-width:100%; overflow:hidden;">
  <iframe
    id="ubicacion"
    width="99%"
    height="400px"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15051.733205952638!2d-99.20048153660107!3d19.415287609764366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff5898133119%3A0xb5f02d3f6c3412e9!2sParque%20Infantil%20La%20Hormiga!5e0!3m2!1ses-419!2smx!4v1741311199956!5m2!1ses-419!2smx"
  ></iframe>
</div>


<br />
<br />
      {/* Botón para abrir el mapa */}
      <button 
        className="boton-pequeno bg-red-600 text-white font-bold" 
        onClick={() => window.open(googleMapsUrl, '_blank')}
      >
        Abrir mapa 📍
      </button>

      <br />
      <br />

      {/* Botón para ver estacionamientos cercanos */}
      <button id="estacionamientos"
        className="boton-pequeno bg-red-600 text-white font-bold" 
        onClick={() => window.open(googleParkingUrl, '_blank')}
      >
        Ver estacionamiento 🚗
      </button>

      <br />
      <br />
      <br />
      <div className="relative w-full h-[500px] mt-6 overflow-hidden fondo-parque">
          {/* Capa oscura */}
          <div className="absolute inset-0 bg-black opacity-80"></div> 

          {/* Contenedor del texto centrado */}
          <div className="">
            <p className="texto-blanco">
              Habrá juegos, bocadillos y fruta, pero si quieres traer algo que te guste mucho (comida, pelotas, juguetes, etc.) y desees compartir, es bienvenido.
            </p>
          </div>
        </div>


      
      <br />
      <br />
      
      <div className="mt-6" id="confirma">
        <RSVPForm />
      </div>
      <br />
      <br />


      <div className="contenedor-imagen" id="mesa-de-regalos">
      <p>
        El regalo no es necesario, pero si gustas puedes obsequiarme algo de la siguiente lista de regalos:
        </p>
        <br />

      <a href="https://www.amazon.com.mx/registries/gl/guest-view/MBE27UMUOXVM" target="_blank" rel="noopener noreferrer">
        <img 
          src="images/Amazon-wishlist.png" 
          alt="Amazon Wishlist" 
          className="imagen-amz"
        />
      </a>
      </div>
      <section className="section-form">
        <div className="shape-container-form">
          <img
            src="/images/organic2.png"
            alt="Organic 1"
            className="shape shape-form"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
        </div>
      </section>
      <section className="reglas-del-parque" id="reglas-del-parque">
      <h1>Reglas del parque a tomar en cuenta:</h1>
        <p>🐶 Nos encantan las mascotas, pero el parque para picnic **no es pet friendly**. :(</p>
        <p>🌱 Mi fiesta es ecológica, por lo que **no se permiten inflables, globos, aerosoles, pinturas para cabello o cara, espuma o cualquier otra cosa que genere residuos**, ¡Aquí te daremos vasos, platos y cubiertos! :)</p>
        <p>🔥 **No se permiten asadores ni bebidas alcohólicas**.</p>
        <p>🎈 **No se permiten adornos con globos o que dependan de cuerdas para su instalación**.</p>
        <p>🚴‍♂️ **Sí puedes llegar en bici, pero dentro del parque no se permite el uso de bicicleta, patines o patín del diablo**.</p>
        <p>🚗 **No se permite el acceso vehicular**, por lo que te dejamos la ubicación del estacionamiento mas cercano (enfrente).</p>
      </section>
      <button 
        className="boton-pequeno bg-red-600 text-white font-bold" 
        onClick={() => window.open(googleParkingUrl, '_blank')}
      >
        Ver estacionamiento 🚗
      </button>
      <br />
      <br />
    </main>
  );
};

export default Body;
