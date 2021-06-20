import * as React from "react";
import { makeStyles } from "@material-ui/core";

const useClasses = makeStyles({
  root: {
    textTransform: "uppercase",
    margin: 0,
    fontWeight: "bold",
    color: "white",
    boxShadow: `inset 0 0 35px 5px rgba(0, 0, 0, 0.25),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px 0 rgba(0, 0, 0, 0.25)`,
    fontFamily: "monospace",
    backgroundColor: "#fff",
    border: "1px solid",
    padding: "10px",
    borderRadius: "7px",
    textAlign: "center",
  },
  rootMinimal: {
    height: "100%",
    width: "100%",
    padding: "10px",
    borderRadius: "7px",
    fontWeight: "bold",
    backgroundColor: "white",
    color: "black",
    border: "1px solid",
    boxShadow: "inset 2px 0px 10px 2px white, inset 0px 0px 4px 0px black",
    fontFamily: '"Raleway", sans-serif',
    cursor: "pointer",
    "&:hover": {
      color: "#002060",
    },
  },
});

export const Badge = ({ children, background, variant, ...rest }) => {
  const classes = useClasses();

  return (
    <span
      className={
        variant && variant === "minimal" ? classes.rootMinimal : classes.root
      }
      style={{ backgroundColor: background || "white" }}
      {...rest}
    >
      {children}
    </span>
  );
};
