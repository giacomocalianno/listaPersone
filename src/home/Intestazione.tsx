// @flow
import * as React from 'react';
import {FC} from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

interface Iintestazione {
    superUserNumber: number
}

const Intestazione: FC<Iintestazione> = props => {

    const {superUserNumber} = props;

    const useStyles = makeStyles({
        center: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "1%"
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.center}>
            <Typography variant="h4" color="primary" align="center">
                App di prova
            </Typography>
            <Typography variant="h6" color="primary" align="center">
                Numero di super user: {superUserNumber}
            </Typography>
            <Link to="/form">
                <Button variant="contained" color="primary" style={{marginTop: "2%"}}>
                    Form
                </Button>
            </Link>
        </div>

    );
};

export default Intestazione;
