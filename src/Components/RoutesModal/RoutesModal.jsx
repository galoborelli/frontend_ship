import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useCallback, useEffect, useRef } from 'react';
import Loader from '@Components/Loader';
import { Box } from '@mui/material';
import "./stylesModal.css"

const libraries = ['places'];

const points = [
  {
    name: "Punto de partida (Mallorca)",
    lat: 39.56172,
    lng: 2.663637,
  },
  {
    name: "Cala Fornaris (Mallorca)",
    lat: 39.5503,
    lng: 2.60867,
  },
];

const RoutesModal = ({ isOpen }) => {
  const [map, setMap] = useState(null);
  const [searchLocation, setSearchLocation] = useState(null);

  // Ref para el elemento <gmp-place-autocomplete>
  const placeAutocompleteRef = useRef(null);
  // Ref para el manejador de evento para asegurar que siempre sea el mismo y poder removerlo
  const handlePlaceSelectRef = useRef(null);

  const center = { lat: 39.56172, lng: 2.663637 };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const onLoad = useCallback((mapInstance) => {
    console.log("onLoad: Map instance loaded:", mapInstance);
    setMap(mapInstance);

    if (window.google && window.google.maps && points && points.length > 0) {
      try {
        const bounds = new window.google.maps.LatLngBounds();
        points.forEach((point) => bounds.extend(point));
        mapInstance.fitBounds(bounds);
        console.log("onLoad: Map bounds fitted with initial points.");
      } catch (error) {
        console.error("onLoad: Error al ajustar bounds:", error);
      }
    } else if (points && points.length === 0) {
        console.warn("onLoad: No hay puntos definidos para ajustar los límites del mapa.");
        mapInstance.setCenter(center);
        mapInstance.setZoom(10);
    }
  }, [points, center]);

  const onUnmount = useCallback(() => {
    console.log("onUnmount: Map instance unmounted.");
    setMap(null);
    setSearchLocation(null);
  }, []);

  useEffect(() => {
    if (map && isOpen) {
      console.log("useEffect [isOpen, map]: Modal opened, triggering map resize.");
      setTimeout(() => {
        if (map) {
          window.google.maps.event.trigger(map, 'resize');
          console.log("useEffect [isOpen, map]: Map resized.");
        } else {
          console.warn("useEffect [isOpen, map]: Map instance is no longer valid.");
        }
      }, 500);
    }
  }, [isOpen, map]);

  // ***************************************************************
  // NUEVA LÓGICA PARA ADJUNTAR EL EVENT LISTENER
  // ***************************************************************
  useEffect(() => {
    // Definimos el manejador de evento dentro de este useEffect
    // para que capture los valores actuales de 'map' y 'setSearchLocation'
    handlePlaceSelectRef.current = (event) => {
      console.log("handlePlaceSelect: Event 'gmp-placeselect' triggered!");
      console.log("handlePlaceSelect: Event detail:", event.detail);

      const place = event.detail.place;

      if (place && place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        console.log("handlePlaceSelect: Location found: Lat", lat, "Lng", lng);

        setSearchLocation({ lat, lng });
        console.log("handlePlaceSelect: searchLocation updated to:", { lat, lng });

        if (map) { // Usamos el 'map' del closure de este efecto
          console.log("handlePlaceSelect: Map instance available, panning and zooming...");
          try {
            map.panTo({ lat, lng });
            map.setZoom(14);
            console.log("handlePlaceSelect: Map should have moved.");
          } catch (error) {
            console.error("handlePlaceSelect: Error panning/zooming the map:", error);
          }
        } else {
          console.warn("handlePlaceSelect: Map instance is null when place selected.");
        }
      } else {
        console.warn("handlePlaceSelect: Place object has no geometry or location.", place);
      }
    };

    // Este useEffect se encargará de adjuntar y limpiar el listener.
    // Solo se ejecuta si la API está cargada y el ref del autocomplete existe.
    if (isLoaded && placeAutocompleteRef.current) {
      const placeAutocompleteElement = placeAutocompleteRef.current;
      const currentHandler = handlePlaceSelectRef.current;

      console.log("useEffect [isLoaded, map]: Attaching 'gmp-placeselect' listener.");
      placeAutocompleteElement.addEventListener('gmp-placeselect', currentHandler);

      return () => {
        console.log("useEffect [isLoaded, map]: Cleaning up: Removing 'gmp-placeselect' listener.");
        placeAutocompleteElement.removeEventListener('gmp-placeselect', currentHandler);
      };
    } else {
        console.log("useEffect [isLoaded, map]: Not attaching listener yet. isLoaded:", isLoaded, "ref.current:", placeAutocompleteRef.current);
    }
  }, [isLoaded, map]); // Este efecto depende de 'isLoaded' y 'map' para re-adjuntar si cambian

  if (!isLoaded) return <Loader />;

  return (
    <Box
      sx={{
        height: { xs: '350px', sm: '600px' },
        width: { xs: '350px', sm: '600px' },
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 10,
          backgroundColor: 'white',
          padding: 1,
          borderRadius: 1,
          boxShadow: 2,
        }}
      >
        <gmp-place-autocomplete

          ref={placeAutocompleteRef}
          placeholder="Busca una ubicación..."
          // Puedes añadir opciones adicionales como atributos:
          // component-restrictions="ES" // Restringe a España
          // types="address" // Restringe a direcciones
          style={{ width: '250px', height: '30px', padding: '0 8px', borderRadius: '12px', backgroundColor: 'white' }}
        ></gmp-place-autocomplete>
      </Box>

      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={{ height: '100%', width: '100%' }}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {points.map((point, index) => (
          <Marker key={index} position={{ lat: point.lat, lng: point.lng }} />
        ))}
        {searchLocation && <Marker position={searchLocation} />}
      </GoogleMap>
    </Box>
  );
};

export default RoutesModal;