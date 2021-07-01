import { useState } from "react";
import { CssBaseline, Container, Tabs, Tab, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CovidWorld from "./CovidWorld/CovidWorld";
// import CovidIndia from './CovidIndia/CovidIndia';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#16222f",
    marginTop: "10px",
    borderRadius: "5px",
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
        <AppBar position="static" className={classes.appbar}>
          <Tabs
            value={tabValue}
            variant="fullWidth"
            onChange={(e, val) => handleTabChange(val)}
            data-testId="covidinfo-tabValue"
          >
            <Tab label="WORLD COVID 19 INFORMATION" />
            {/* Dear developer, dont uncomment the below code, only do when you are working on the covidIndia component */}
            {/* <Tab label="India" /> */}
          </Tabs>
        </AppBar>
        {/* <CovidIndia value={tabValue} index={1} /> */}
        <CovidWorld value={tabValue} index={0} />
      </Container>
    </>
  );
};

export default CovidInfo;
