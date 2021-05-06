import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

const VaccineDataSingle = (vaccine)=> {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>{vaccine.name}</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>{vaccine.district_name}</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>{vaccine.pincode}</Typography>
                    </div>
                    <div className={classes.column}>
                        <Badge color="primary" badgeContent={vaccine.available_capacity}>
                            <Typography className={classes.secondaryHeading}>Shots Available</Typography>
                        </Badge>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={classes.column}>
                        Fee Type: <Chip label={vaccine.fee_type} onDelete={() => {}} />
                    </div>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="caption">
                            Vaccine Type
                            <br />
                            <strong>{vaccine.vaccine}</strong>
                        </Typography>
                    </div>
                </AccordionDetails>
                <Divider />
            </Accordion>
        </div>
    )
}

export default VaccineDataSingle