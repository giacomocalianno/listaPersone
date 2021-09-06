// @flow
import * as React from 'react';
import {FC} from "react";
import {Typography} from "@material-ui/core";

const Intestazione: FC = props => {
    return (
        <Typography variant="h4" color="primary" align="center">
            App di prova
        </Typography>
    );
};

export default Intestazione;