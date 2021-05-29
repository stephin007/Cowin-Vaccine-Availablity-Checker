import * as React from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "../SingleVaccineData/VaccineDataSingle.css";
import { Button } from "@material-ui/core";
import { CloseSharp } from "@material-ui/icons";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const Map = ({ lng: _lng, lat: _lat, close }) => {
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
  const [lng, setLng] = React.useState(_lng);
  const [lat, setLat] = React.useState(_lat);
  const [zoom] = React.useState(10);

  React.useEffect(() => {
    setLng(_lng);
    setLat(_lat);
  }, [_lat, _lng]);

  React.useEffect(() => {
    if (map.current) {
      return;
    }
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div ref={mapContainer} className={"map-container"}>
      <div style={{ position: "absolute", top: 8, right: 8, zIndex: 120 }}>
        <Button onClick={close}>
          <CloseSharp />
        </Button>
      </div>
    </div>
  );
};
