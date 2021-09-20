// @flow
import * as React from 'react';
import {FC} from 'react';
import {Typography} from "@material-ui/core";

interface Iintestazione {
    superUserNumber: number
}

const Intestazione: FC<Iintestazione> = props => {

    const {superUserNumber} = props;

    return (
        <div>
            <Typography variant="h4" color="primary" align="center">
                App di prova
            </Typography>
            <Typography variant="h6" color="primary" align="center">
                Numero di super user: {superUserNumber}
            </Typography>

        </div>

    );
};

export default Intestazione;
