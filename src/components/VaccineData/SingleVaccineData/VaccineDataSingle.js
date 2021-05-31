import React, { useState } from "react";
import {
  Paper,
  Hidden,
  Badge,
  Grid,
  Button,
  Typography,
  Container,
  makeStyles,
  Box,
  ButtonGroup,
} from "@material-ui/core";
import HealingIcon from "@material-ui/icons/Healing";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import { MapSharp } from "@material-ui/icons";

import "./VaccineDataSingle.css";
import { Map } from "../Map";
import { Badge as CustomBadge } from "../../Badge";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#E5E7EB",
    margin: ".75rem 0px",
    padding: 0,
  },
  gutterBottom: {
    marginBottom: ".5rem",
  },
  textBlack: {
    color: "#000",
  },
  textBold: {
    fontWeight: "bold",
  },
  textUppercase: {
    textTransform: "uppercase",
  },
  normalize: {
    padding: 0,
    margin: 0,
  },
  cursor: {
    cursor: "pointer",
  },
  heightFull: {
    height: "100%",
  },
  widthFull: {
    width: "100%",
  },
}));

const VaccineDataSingle = (vaccine) => {
  const classes = useStyles();
  const [showMap, setShowMap] = useState(false);

  return (
    <Container className={classes.container}>
      <Grid container>
        <Box
          component={Grid}
          item
          xs={12}
          sm={12}
          md={6}
          paddingX={2}
          paddingY={3}
        >
          <Grid container>
            <Grid item xs={12} className={[classes.gutterBottom]}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                borderBottom={1}
                flexDirection={"row"}
              >
                <Typography
                  className={[
                    classes.textBlack,
                    classes.textUppercase,
                    classes.textBold,
                  ]}
                  variant={"h6"}
                  component={"h1"}
                >
                  {vaccine?.name}
                </Typography>
                <VerifiedUserRoundedIcon
                  className={[classes.fullHeight]}
                  style={{ color: "#009E60", marginLeft: "6px" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} className={[classes.gutterBottom]}>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography
                  color={"primary"}
                  className={[classes.textUppercase, classes.textBold]}
                  component={"h3"}
                  variant={"h6"}
                >
                  Vaccine Name
                </Typography>
                <CustomBadge
                  background={
                    /covi/gi.test(vaccine?.vaccine) ? "skyblue" : "slateblue"
                  }
                >
                  {vaccine?.vaccine}
                </CustomBadge>
              </Box>
            </Grid>
            <Grid container item xs={12} className={[classes.gutterBottom]}>
              <Hidden smDown>
                <Box
                  component={Grid}
                  item
                  md={3}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"start"}
                  className={[classes.heightFull, classes.widthFull]}
                >
                  <Typography
                    variant={"h6"}
                    component={"h3"}
                    className={[classes.textBlack, classes.textBold]}
                  >
                    Address
                  </Typography>
                </Box>
              </Hidden>
              <Box
                component={Grid}
                xs={10}
                sm={10}
                md={7}
                item
                display={"flex"}
                alignItems={"center"}
                justifyContent={{
                  xs: "start",
                  sm: "start",
                  md: "center",
                }}
                textAlign={"center"}
                className={[classes.heightFull, classes.widthFull]}
              >
                <Typography color={"error"} className={[classes.textBold]}>
                  {vaccine?.block_name}, {vaccine?.district_name},{" "}
                  {vaccine?.state_name}
                </Typography>
              </Box>
              <Box
                component={Grid}
                xs={2}
                sm={2}
                md={2}
                item
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                className={[classes.heightFull, classes.widthFull]}
              >
                <MapSharp
                  onClick={() => {
                    setShowMap((old) => !old);
                  }}
                  className={[
                    classes.normalize,
                    classes.textBlack,
                    classes.cursor,
                  ]}
                />
              </Box>
            </Grid>
            <Grid item xs={12} className={[classes.gutterBottom]}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDirection={"row"}
              >
                <Typography
                  variant={"h6"}
                  component={"h3"}
                  className={[classes.textBlack, classes.textBold]}
                >
                  Pincode
                </Typography>
                <Typography
                  color={"error"}
                  variant={"p"}
                  component={"p"}
                  className={[classes.textBold]}
                >
                  {vaccine?.pincode}
                </Typography>
              </Box>
            </Grid>
            <Hidden mdDown>
              <Grid item xs={12}>
                <ButtonGroup size={"small"} fullWidth variant={"text"}>
                  <Button className={[classes.textBlack]}>
                    <CustomBadge variant={"minimal"}>
                      Opening Time: {vaccine.from}
                    </CustomBadge>
                  </Button>
                  <Button className={[classes.textBlack]}>
                    <CustomBadge variant={"minimal"}>
                      Closing time: {vaccine.to}
                    </CustomBadge>
                  </Button>
                </ButtonGroup>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={12}>
                <ButtonGroup
                  orientation={"vertical"}
                  size={"small"}
                  fullWidth
                  variant={"text"}
                >
                  <Button className={[classes.textBlack]}>
                    <CustomBadge variant={"minimal"}>
                      Opening Time: {vaccine.from}
                    </CustomBadge>
                  </Button>
                  <Button className={[classes.textBlack]}>
                    <CustomBadge variant={"minimal"}>
                      Closing time: {vaccine.to}
                    </CustomBadge>
                  </Button>
                </ButtonGroup>
              </Grid>
            </Hidden>
          </Grid>
        </Box>
        <Grid item xs={12} sm={12} md={6}>
          <div className="paper-right">
            <div className="paper-right_Badges">
              <div className="paper-right_capacity">
                <Badge
                  color="secondary"
                  badgeContent={vaccine?.available_capacity}
                >
                  <h5>Available Capacity</h5>{" "}
                  <HealingIcon className="healing_icon" />
                </Badge>
              </div>
              <div>
                <p>
                  <span>Date:</span>
                  {vaccine?.date}
                </p>
              </div>
            </div>
            <div className="paper-right_age">
              <div className="age_text">
                <Typography
                  variant={"h6"}
                  component={"h3"}
                  className={[classes.textBlack]}
                >
                  Minimum Age
                </Typography>
              </div>
              <div className="age_content">
                <p>{vaccine?.min_age_limit} years</p>
              </div>
            </div>
            <div className="paper-right_age">
              <div className="age_text">
                <Typography
                  variant={"h6"}
                  component={"h3"}
                  className={[classes.textBlack]}
                >
                  Minimum Fare(₹)
                </Typography>
              </div>
              <div className="age_content">
                {vaccine.fee_type === "Free" ? (
                  <p style={{ color: "green" }}>{vaccine?.fee_type} </p>
                ) : (
                  <p style={{ color: "red" }}>{vaccine?.fee_type} </p>
                )}
              </div>
            </div>
            <div className="paper-right_slots">
              <Typography
                variant={"h6"}
                component={"h3"}
                className={[classes.textBlack]}
              >
                Slots Available
              </Typography>
              <p>{vaccine?.slots?.join(",")}</p>
            </div>
          </div>
        </Grid>
        {vaccine.lat && vaccine.long && showMap && (
          <Grid item xs={12}>
            <Map
              lat={vaccine.lat}
              lng={vaccine.long}
              close={() => {
                setShowMap(false);
              }}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default VaccineDataSingle;
