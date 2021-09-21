import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles,
    Typography
} from "@material-ui/core";
import {IPerson} from "../App";
import {TransitEnterexit} from "@material-ui/icons";

interface IPersonDetailsDialogProps {
    person?: IPerson
    open: boolean
    clickedPeople?: IPerson[]

    handleItemClose(): void
}

const useStyles = makeStyles({
    dialog: {
        color: 'black'
    }
})

const PersonDetailDialog: React.FC<IPersonDetailsDialogProps> = (props) => {

    const classes = useStyles();
    const {person, open, handleItemClose} = props;
    const {createdAt, name, surname, birthDate, birthCity, birthCoutry, checked} = person || {};
    console.log("person : " + JSON.stringify(person))

    return (
        <>
            <Dialog open={open} maxWidth="md">
                <DialogContent>
                    <DialogActions>
                        <DialogTitle>
                            {name} {surname}
                            <Button onClick={handleItemClose} startIcon={
                                <TransitEnterexit fontSize="medium"/>}>
                            </Button>
                        </DialogTitle>
                    </DialogActions>
                    <DialogContentText className={classes.dialog}>
                        <Typography component="span" variant="body2">
                            <b> Created at: </b> {createdAt}
                        </Typography>
                    </DialogContentText>
                    <DialogContentText className={classes.dialog}>
                        <Typography component="span" variant="body2">
                            <b> Name: </b> {name}
                        </Typography>
                    </DialogContentText>
                    <DialogContentText className={classes.dialog}>
                        <Typography component="span" variant="body2">
                            <b> Surname: </b> {surname}
                        </Typography>
                    </DialogContentText>
                    <DialogContentText className={classes.dialog}>
                        <Typography component="span" variant="body2">
                            <b> Birth date: </b> {birthDate}
                        </Typography>
                    </DialogContentText>
                    <DialogContentText className={classes.dialog}>
                        <Typography component="span" variant="body2">
                            <b> Birth city: </b> {birthCity}
                        </Typography>
                    </DialogContentText>
                    <DialogContentText className={classes.dialog}>
                        <Typography component="span" variant="body2">
                            <b> Birth country: </b> {birthCoutry}
                        </Typography>
                    </DialogContentText>
                    <DialogContentText className={classes.dialog}>
                        <Typography component="span" variant="body2">
                            <b> Checked: </b> {checked?.toString()}
                        </Typography>
                    </DialogContentText>
                    <DialogContentText className={classes.dialog}>
                        <Typography component="span" variant="body2">
                            <b> Super user: </b> {false ? false : false}
                        </Typography>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default PersonDetailDialog;
