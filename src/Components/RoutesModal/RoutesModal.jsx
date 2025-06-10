import { GoogleMap, useJsApiLoader, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import { useState, useCallback, useEffect, useRef } from 'react';
import Loader from '@Components/Loader';
import { Box } from '@mui/material';

const points = [
  {
    name: "Punto de partida",
    lat: 2.663637,
    lng: 39.56172,
  },
  {
    name: "Cala Fornaris",
    lat: 2.60867,
    lng: 39.5503,
  },
];

const RoutesModal = ({ isOpen }) => {

  const [searchBox, setSearchBox] = useState(null);
  const [searchLocation, setSearchLocation] = useState(null);
  const [map, setMap] = useState(null);


  const inputRef = useRef(null);

  
  const onSearchBoxLoad = (ref) => {
    setSearchBox(ref);
  };

  const center = { lat: 2.663637, lng: 39.56172 };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const onLoad = useCallback((mapInstance) => {
    try {
      const bounds = new window.google.maps.LatLngBounds();
      points.forEach((point) => bounds.extend(point));
      mapInstance.fitBounds(bounds);
      setMap(mapInstance);
    } catch (error) {
      console.error("Error en onLoad:", error);
    }
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  useEffect(() => {
    if (map && isOpen) {
      setTimeout(() => {
        window.google.maps.event.trigger(map, 'resize');
        map.setCenter(center); // opcional
      }, 500); // Esperá 500ms después de abrir el modal
    }
  }, [isOpen, map]);



  const onPlacesChanged = () => {
    if (!searchBox) return;
    const places = searchBox.getPlaces();
    if (!places || places.length === 0) return;
    const location = places[0]?.geometry?.location;
    if (!location) return;
    const lat = location.lat();
    const lng = location.lng();
    setSearchLocation({ lat, lng });
    map.panTo({ lat, lng });
    map.setZoom(14);
  };



  if (!isLoaded) return <Loader />;

  return (
    <Box
    sx={{
      height: { xs: '350px', sm: '600px' },
      width: { xs: '350px', sm: '600px' },
      position: 'relative',
    }}
  >
    {/* Input del buscador */}
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
      <StandaloneSearchBox
        onLoad={onSearchBoxLoad}
        onPlacesChanged={onPlacesChanged}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar ubicación..."
          style={{ width: '250px', height: '30px', padding: '0 8px' }}
        />
      </StandaloneSearchBox>
    </Box>

    {/* Mapa */}
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
