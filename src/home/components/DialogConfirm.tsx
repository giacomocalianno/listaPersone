import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from "@material-ui/core";
import {IForm} from "./FormProva";
import {Link} from "react-router-dom";

interface IDialogConfirmProps {
    open: boolean
    handleClose: () => void
    handleCloseConfirm: (person: IForm) => void
    results: IForm
}

const dialogConfirm = (props: IDialogConfirmProps) => {

    const {open, handleClose, handleCloseConfirm, results} = props
    const {name, surname, birthDate, birthCoutry, birthCity, checked, superUser} = results

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Confermi i dati inseriti?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography variant="subtitle1"> <b>Nome:</b> {name} </Typography>
                    <Typography variant="subtitle1"> <b>Cognome:</b> {surname} </Typography>
                    <Typography variant="subtitle1"> <b>Birth date:</b> {birthDate} </Typography>
                    <Typography variant="subtitle1"> <b>Birth city:</b> {birthCity} </Typography>
                    <Typography variant="subtitle1"> <b>Birth country:</b> {birthCoutry} </Typography>
                    <Typography variant="subtitle1"> <b>Checked:</b> {checked} </Typography>
                    <Typography variant="subtitle1"> <b>Super user:</b> {JSON.stringify(superUser)} </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}> No </Button>
                <Link to="/">
                    <Button onClick={() => handleCloseConfirm(results)} autoFocus> Si </Button>
                </Link>
            </DialogActions>
        </Dialog>
    );
};

export default dialogConfirm;
