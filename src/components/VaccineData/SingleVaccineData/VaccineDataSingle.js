import "./VaccineDataSingle.css"

import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import HealingIcon from '@material-ui/icons/Healing';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';

const useStyles = makeStyles((theme) => ({
                               paperMainDiv : {width : "100%"},
                             }));

const VaccineDataSingle =
    (vaccine) => {
      const classes = useStyles();

      return (
          <div className = {classes.paperMainDiv}>
          <Paper variant = "outlined" className =
               "wrapper" style = {{ backgroundColor: "#333333" }}>
          <div className = "paper-left"><div>
          <h1>{vaccine.name}<VerifiedUserRoundedIcon style =
                             {
                               { color: "#009E60" }
                             } /></h1></div>
                    <hr/><br />
          <div className = "paper-left_content"><h3>address<
              /h3>
                        <p>{vaccine.block_name}, {vaccine.district_name}, {vaccine.state_name}</p>
          </div>
                    <div className="paper-left_content">
                        <h3>pincode</h3>
          <p>{vaccine.pincode}</p>
                    </div>
          <div className = "paper-left_time">
          <div className = "open-time time">Opening Time: {vaccine.from}<
              /div>
                        <div className="close-time time">
                            Closing Time: {vaccine.to}
                        </div>
          </div>
                </div><div className = "paper-right">
          <div className = "paper-right_Badges">
          <div className = "paper-right_capacity">
          <Badge color =
               "secondary" badgeContent = {vaccine.available_capacity}>
          <h5>Available Capacity</h5> <HealingIcon className="healing_icon"/>
          </Badge>
                        </div><div><p>
          <span>Date: </span>{vaccine.date}</p></div>
                    </div>
          <div className = "paper-right_date">

          </div>
                </div></Paper>
        </div>)
    }

export default VaccineDataSingle