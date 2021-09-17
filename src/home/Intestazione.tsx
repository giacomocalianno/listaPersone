// @flow
import * as React from 'react';
import {FC} from 'react';
import {Typography} from "@material-ui/core";
import {IPerson} from "./App";

// FIXME props superUnser number
interface Iintestazione {
    superUser?: IPerson[]
}

const Intestazione: FC<Iintestazione> = props => {

    const {superUser} = props;

    return (
        <div>
            <Typography variant="h4" color="primary" align="center">
                App di prova
            </Typography>
            <Typography variant="h6" color="primary" align="center">
                Numero di super user: {superUser?.length}
            </Typography>

        </div>

    );
};

export default Intestazione;
