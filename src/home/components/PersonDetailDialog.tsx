import React, {useState} from 'react';
import {Dialog, DialogContentText, DialogTitle, makeStyles} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {IPerson} from "../App";

interface IPersonDetailsDialogProps {
    person?: IPerson
    open: boolean

    handleItemClose(): void
}

const useStyles = makeStyles({
    dialog: {
        color: 'red',
        fontSize: 18,
        "&:hover": {
            backgroundColor: "black"
        },
        "&:active": {
            color: "white"
        }
    }
})

const PersonDetailDialog: React.FC<IPersonDetailsDialogProps> = (props) => {

    const classes = useStyles();
    const {person, open, handleItemClose} = props;
    const {createdAt, name, surname, birthDate, birthCity, birthCoutry} = person || {};

    console.log(`props persona cliccata ${person}`)
    console.log("Lo stato del dialog è:" + open)

    return (
        <>
            <Dialog open={open} maxWidth="md">
                <DialogTitle>
                    <div className="d-flex justify-content-center align-items-center">
                        {name} {surname} <HighlightOffIcon onClick={handleItemClose}/>
                    </div>
                </DialogTitle>
                <DialogContentText className={classes.dialog}>{createdAt}</DialogContentText>
                <DialogContentText className={classes.dialog}>{name}</DialogContentText>
                <DialogContentText className={classes.dialog}>{surname}</DialogContentText>
                <DialogContentText className={classes.dialog}>{birthDate}</DialogContentText>
                <DialogContentText className={classes.dialog}>{birthCity}</DialogContentText>
                <DialogContentText className={classes.dialog}>{birthCoutry}</DialogContentText>
            </Dialog>
        </>
    )
}

export default PersonDetailDialog;