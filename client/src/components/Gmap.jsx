import { useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -12.056977181145228,
  lng: -75.21530245338104,
};

const MyComponent = ({
  long,
  lat,
  setValueLongitude,
  setValueLatitude,
  setValueAddress,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_CLIENT_ID,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);

  const [coordenates, setCoordenates] = useState("");

  const [markerPosition, setMarkerPosition] = useState(null);

  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = useCallback(function callback(map) {
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

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const { lat, lng } = place.geometry.location;
        setValueLatitude(lat());
        setValueLongitude(lng());
        setValueAddress(autocomplete.getPlace().formatted_address);
        setCoordenates(`Lat: ${lat()}, Lng: ${lng()}`);
        setMarkerPosition({ lat: lat(), lng: lng() });
        map.panTo({ lat: lat(), lng: lng() });
      }
    }
  };

  return isLoaded ? (
    <>
      <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}>
        <input
          type="text"
          placeholder="Dirección"
          style={{
            width: "100%",
            height: "40px",
            marginBottom: "10px",
            backgroundColor: "rgb(212 212 215)",
            borderRadius: "5px",
            paddingLeft: "10px",
            fontSize: "16px",
            fontWeight: "normal",
            color: "black",
          }}
        />
      </Autocomplete>

      <small>Indique su dirección en el mapa a continuación (Opcional)</small>
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
