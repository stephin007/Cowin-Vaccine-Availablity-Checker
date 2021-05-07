import "./VaccineDataSingle.css"

import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
                               paperMainDiv : {width : "100%"},
                             }));

const VaccineDataSingle = (vaccine) => {
    const classes = useStyles();

    return(
        <div className={classes.paperMainDiv}>
            <Paper variant="outlined" className="wrapper" style={{backgroundColor: "#333333"}}>
                <div className="paper-left">
                    <h1>{vaccine.name}</h1>
                    <hr/>
                    <br/>
                    <div className="paper-left_address">
                        <h3>address: </h3>
                        <p>{vaccine.block_name}, {vaccine.district_name}, {vaccine.state_name}</p>
                    </div>
                </div>
                <div className="paper-right">
                </div>
            </Paper>
        </div>
    )
}

export default VaccineDataSingle