import { JSX, useEffect, useState } from "react";

export default function Map(): JSX.Element {
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

  useEffect(() => {
    const checkGoogle = setInterval(() => {
      if (window.google) {
        clearInterval(checkGoogle);
        setIsGoogleLoaded(true);
      }
    }, 500); // Verifica cada 500ms si Google Maps ya cargó

    return () => clearInterval(checkGoogle);
  }, []);

  useEffect(() => {
    if (!isGoogleLoaded) return;

    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 19.432608, lng: -99.133209 }, // 📍 Ajusta la ubicación
      zoom: 15,
    });

    new google.maps.Marker({
      position: { lat: 19.432608, lng: -99.133209 },
      map,
      title: "Ubicación del evento",
    });

  }, [isGoogleLoaded]); // Se ejecuta solo cuando Google está cargado

  return <div id="map" className="w-full h-64 rounded-xl shadow-lg"></div>;
}
