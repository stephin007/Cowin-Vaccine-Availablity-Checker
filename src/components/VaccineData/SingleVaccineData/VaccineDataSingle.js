import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import HealingIcon from "@material-ui/icons/Healing";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import "./VaccineDataSingle.css";

const useStyles = makeStyles((theme) => ({
  paperMainDiv: {
    width: "100%",
  },
}));
const VaccineDataSingle = (vaccine) => {
  const classes = useStyles();
  return (
    <div className={classes.paperMainDiv}>
      <Paper
        variant="outlined"
        className="wrapper"
        style={{ backgroundColor: "#E5E7EB", margin: "10px 0px" }}
      >
        <div className="paper-left">
          <div>
            <h1>
              {vaccine?.name}{" "}
              <VerifiedUserRoundedIcon style={{ color: "#009E60" }} />
            </h1>
          </div>
          <hr />
          <br />
          <div className="paper-left_vaccine_head">
            <h3>Vaccine Name</h3>
            {vaccine.vaccine === "COVISHIELD" ? (
              <p style={{ backgroundColor: "skyblue", color: "white" }}>
                {vaccine?.vaccine}
              </p>
            ) : (
              <p style={{ backgroundColor: "slateblue", color: "white" }}>
                {vaccine?.vaccine}
              </p>
            )}
          </div>

          <div className="paper-left_content">
            <h3>address</h3>
            <p>
              {vaccine?.block_name}, {vaccine?.district_name},{" "}
              {vaccine?.state_name}
            </p>
          </div>
          <div className="paper-left_content">
            <h3>pincode</h3>
            <p>{vaccine?.pincode}</p>
          </div>
          <div className="paper-left_time">
            <div className="open-time time">Opening Time: {vaccine.from}</div>
            <div className="close-time time">Closing Time: {vaccine.to}</div>
          </div>
        </div>
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
              <h3>Minimum Age</h3>
            </div>
            <div className="age_content">
              <p>{vaccine?.min_age_limit} years</p>
            </div>
          </div>
          <div className="paper-right_age">
            <div className="age_text">
              <h3>Minimum Fare(₹)</h3>
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
            <h3>Slots Available</h3>
            <p>{vaccine?.slots?.join(",")}</p>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default VaccineDataSingle;
