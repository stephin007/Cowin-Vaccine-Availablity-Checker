import * as React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { CloseSharp, LocationOn } from "@material-ui/icons";
import ReactMapGL, { Marker } from "react-map-gl";

const useClasses = makeStyles({
  mapContainer: {
    height: "250px",
    width: "100%",
  },
});

export const Map = ({ lat, lng, close }) => {
  const classes = useClasses();
  const [viewport, setViewport] = React.useState({
    latitude: lat,
    longitude: lng,
    zoom: 15,
  });

  return (
    <div className={classes.mapContainer}>
      <ReactMapGL
        {...viewport}
        width={"100%"}
        height={"100%"}
        mapStyle={"mapbox://styles/mapbox/outdoors-v11"}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Marker latitude={lat} longitude={lng} offsetLeft={-21} offsetTop={-32}>
          <LocationOn style={{ color: "black" }} fontSize={"large"} />
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
          <CloseSharp style={{ color: "black" }} />
        </Button>
      </ReactMapGL>
    </div>
  );
};
