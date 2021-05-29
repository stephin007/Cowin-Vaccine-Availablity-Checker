import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Header.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            style={{ marginTop: 10 }}
            className={classes.title}
          >
            <img
              src="https://user-images.githubusercontent.com/71087810/117496553-d5af7b00-af94-11eb-84bb-913a1f386811.png"
              alt=""
              style={{ width: 100 }}
            />
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <Link
                  to="/about"
                  style={{ padding: 0, textDecoration: "none" }}
                >
                  <MenuItem>About</MenuItem>
                </Link>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/stephin007/Cowin-Vaccine-Availablity-Checker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MenuItem>Contribute</MenuItem>
                </a>{" "}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Link to="/about" style={{ padding: 0, textDecoration: "none" }}>
                <MenuItem>About</MenuItem>
              </Link>
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/stephin007/Cowin-Vaccine-Availablity-Checker/"
              >
                <MenuItem>Contribute</MenuItem>
              </a>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
