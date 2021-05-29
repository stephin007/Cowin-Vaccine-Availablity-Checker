import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "../SingleVaccineData/VaccineDataSingle.css";
import { Button } from "@material-ui/core";
import { CloseSharp } from "@material-ui/icons";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const Map = ({ lng: _lng, lat: _lat, close }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(_lng);
  const [lat, setLat] = useState(_lat);
  const [zoom] = useState(10);

  useEffect(() => {
    setLng(_lng);
    setLat(_lat);
  }, [_lat, _lng]);

  useEffect(() => {
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
