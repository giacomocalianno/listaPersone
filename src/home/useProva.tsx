import React from 'react';
import {IPerson} from "./App";

const useProva = (fetching: Boolean, error: Boolean, people?: IPerson[]) => {

    return {fetching: fetching, error: error, people: people}
};

export default useProva;
