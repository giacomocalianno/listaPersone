import {IPerson} from "./App";

const useFetchPersone = (fetching: Boolean, error: Boolean, people?: IPerson[]) => {

    return {fetching: fetching, error: error, people: people}
};

export default useFetchPersone;
