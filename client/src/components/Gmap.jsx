import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -12.056977181145228,
  lng: -75.21530245338104,
};

const MyComponent = ({ long, lat, setValueLongitude, setValueLatitude }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_CLIENT_ID,
  });

  const [map, setMap] = useState(null);

  const [coordenates, setCoordenates] = useState("");

  const [markerPosition, setMarkerPosition] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onClickGmap = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log("Coordenadas:", { lat, lng });
    setValueLatitude(lat);
    setValueLongitude(lng);
    setCoordenates(`Lat: ${lat}, Lng: ${lng}`);
    setMarkerPosition({ lat, lng });
  };

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onClickGmap}
      >
        <Marker position={center}></Marker>
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
      <p>{coordenates}</p>
    </>
  ) : (
    <></>
  );
};

export default MyComponent;
