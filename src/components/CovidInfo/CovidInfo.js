import React from "react";
import { CssBaseline } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const CovidInfo = () => {
  return (
    <>
      <CssBaseline />
      <Container maxwidth="md">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
    </>
  );
};

export default CovidInfo;
