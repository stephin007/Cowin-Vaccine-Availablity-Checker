import { useState } from "react";
import { CssBaseline, Container, Tabs, Tab, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CovidWorld from "./CovidWorld.js/CovidWorld";
import CovidIndia from "./CovidIndia.js/CovidIndia";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#333",
  },
  section_title: {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Nunito",
    marginTop: "10px",
  },
}));

const CovidInfo = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <h1 className={classes.section_title}>Covid 19 Information</h1>
        <AppBar position="static" className={classes.appbar}>
          <Tabs
            value={tabValue}
            variant="fullWidth"
            onChange={(e, val) => handleTabChange(val)}
          >
            <Tab label="India" />
            <Tab label="World" />
          </Tabs>
        </AppBar>
        <CovidIndia value={tabValue} index={0} />
        <CovidWorld value={tabValue} index={1} />
      </Container>
    </>
  );
};

export default CovidInfo;
