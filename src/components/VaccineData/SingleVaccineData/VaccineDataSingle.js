import React, { useState } from "react";
import {
  Hidden,
  Grid,
  Button,
  Typography,
  Container,
  Box,
  ButtonGroup,
} from "@material-ui/core";
import HealingIcon from "@material-ui/icons/Healing";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import { MapSharp } from "@material-ui/icons";

import { Map } from "../Map";
import { Badge as CustomBadge } from "../../Badge";
import { useClasses } from "../../../lib";

const VaccineDataSingle = (vaccine) => {
  const classes = useClasses();
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
                    variant={"subtitle1"}
                    component={"h3"}
                    className={[classes.textBlack, classes.textBold]}
                  >
                    Address
                  </Typography>
                </Box>
              </Hidden>
              <Hidden mdDown>
                <Box
                  component={Grid}
                  xs={10}
                  sm={10}
                  md={7}
                  item
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  textAlign={"center"}
                  className={[classes.heightFull, classes.widthFull]}
                >
                  <Typography color={"error"} className={[classes.textBold]}>
                    {vaccine?.block_name}, {vaccine?.district_name},{" "}
                    {vaccine?.state_name}
                  </Typography>
                </Box>
              </Hidden>
              <Hidden mdUp>
                <Box
                  component={Grid}
                  xs={10}
                  sm={10}
                  md={7}
                  item
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"start"}
                  textAlign={"left"}
                  className={[classes.heightFull, classes.widthFull]}
                >
                  <Typography color={"error"} className={[classes.textBold]}>
                    {vaccine?.block_name}, {vaccine?.district_name},{" "}
                    {vaccine?.state_name}
                  </Typography>
                </Box>
              </Hidden>
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
                  variant={"subtitle1"}
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
        <Hidden mdUp>
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
        </Hidden>
        <Box
          component={Grid}
          item
          xs={12}
          sm={12}
          md={6}
          paddingX={2}
          paddingY={3}
        >
          <Box
            component={Grid}
            item
            container
            className={[classes.gutterBottom]}
            xs={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              component={Grid}
              item
              xs={12}
              sm={12}
              md={6}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <Typography
                component={"p"}
                variant="h6"
                color={"primary"}
                className={[classes.textBold, classes.gutterRight]}
              >
                Available Capacity
              </Typography>
              <HealingIcon className="healing_icon" />
            </Box>
            <Hidden mdUp>
              <Box
                component={Grid}
                item
                xs={12}
                sm={12}
                md={6}
                display={"flex"}
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Typography
                  variant={"subtitle1"}
                  component={"h3"}
                  className={[classes.textBlack, classes.textBold]}
                >
                  Date:
                </Typography>

                <Typography color={"primary"} className={[classes.textBold]}>
                  {vaccine?.date}
                </Typography>
              </Box>
            </Hidden>
            <Hidden mdDown>
              <Box
                component={Grid}
                item
                xs={12}
                sm={12}
                md={6}
                display={"flex"}
                alignItems={"center"}
                justifyContent="flex-end"
              >
                <Typography
                  component={"p"}
                  variant="h6"
                  color={"primary"}
                  className={[classes.textBlack, classes.gutterRight]}
                >
                  <span>Date:</span>
                </Typography>
                <Typography component={"p"} variant="h6" color={"primary"}>
                  {vaccine?.date}
                </Typography>
              </Box>
            </Hidden>
          </Box>
          <Box
            component={Grid}
            item
            xs={12}
            display={"flex"}
            alignItems={"center"}
            className={[classes.gutterBottom]}
            justifyContent={"space-between"}
          >
            <Typography
              variant={"subtitle1"}
              component={"h3"}
              className={[classes.textBlack, classes.textBold]}
            >
              Minimum Age
            </Typography>

            <Typography color={"error"} className={[classes.textBold]}>
              {vaccine?.min_age_limit} years
            </Typography>
          </Box>
          <Box
            component={Grid}
            item
            xs={12}
            display={"flex"}
            alignItems={"center"}
            className={[classes.gutterBottom]}
            justifyContent={"space-between"}
          >
            <Typography
              variant={"subtitle1"}
              component={"h3"}
              className={[classes.textBlack, classes.textBold]}
            >
              Minimum Fare(₹)
            </Typography>
            <Typography color={"error"} className={[classes.textBold]}>
              {vaccine.fee_type === "Free"
                ? vaccine?.fee_type
                : vaccine?.fee_type}
            </Typography>
          </Box>
          <Box
            component={Grid}
            item
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            className={[classes.gutterBottom]}
            justifyContent={"center"}
          >
            <Typography
              variant={"h6"}
              component={"h3"}
              className={[classes.textBold]}
              color={"primary"}
            >
              Slots Available
            </Typography>

            <Typography
              variant={"p"}
              className={[classes.textBlack, classes.textCenter]}
            >
              {vaccine?.slots?.join(", ")}
            </Typography>
          </Box>
        </Box>
        <Hidden mdDown>
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
        </Hidden>
      </Grid>
    </Container>
  );
};

export default VaccineDataSingle;
