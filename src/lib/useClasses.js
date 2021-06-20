import { makeStyles } from "@material-ui/core";

export const useClasses = makeStyles({
  container: {
    backgroundColor: "#E5E7EB",
    margin: ".75rem 0px",
    padding: 0,
  },
  gutterBottom: {
    marginBottom: ".5rem",
  },
  gutterRight: {
    marginRight: ".25rem",
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
  textCenter: {
    textAlign: "center",
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
});
