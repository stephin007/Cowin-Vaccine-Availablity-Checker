import * as React from "react";
import { Button } from "@material-ui/core";
import { CloseSharp, LocationCity, LocationOn } from "@material-ui/icons";
import ReactMapGL, { Marker } from "react-map-gl";

export const Map = ({ lat, lng, close }) => {
  const [viewport, setViewport] = React.useState({
    latitude: lat,
    longitude: lng,
    zoom: 15,
  });

  return (
    <div className={"map-container"}>
      <ReactMapGL
        {...viewport}
        width={"100%"}
        height={"100%"}
        mapStyle={"mapbox://styles/mapbox/outdoors-v11"}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Marker latitude={lat} longitude={lng} offsetLeft={-21} offsetTop={-32}>
          <LocationOn fontSize={"large"} />
        </Marker>
        <Button
          onClick={close}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 120,
          }}
        >
          <CloseSharp />
        </Button>
      </ReactMapGL>
    </div>
  );
};
