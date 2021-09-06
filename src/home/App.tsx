import React, {useEffect, useState} from 'react';
import '../App.css';
import HomeContainer from "./HomeContainer";
import Intestazione from "./Intestazione"
import {CircularProgress, Container, makeStyles} from "@material-ui/core";
import {useFetchPeopleList} from "./useFetchPeopleList";

export interface IPerson {
    createdAt: string
    name: string
    avatar: string
    surname: string
    birthDate: string
    birthCity: string
    birthCoutry: string
    id: string
}

const useStyles = makeStyles({
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    }
})

const PERSON_LIST_URL = 'https://612f5b495fc50700175f159f.mockapi.io/api/users'

const App: React.FC = props => {

    const classes = useStyles();

    const {people, fetching, error} = useFetchPeopleList(PERSON_LIST_URL);

    return (
        <Container>
            <div>
                <Intestazione/>
                <div className="row p-2">
                    {/*Prima colonna*/}

                    {/*se fetching è true allora non ha finito di caricare i dati e lo spinner è attivo*/}
                    <div>
                        {fetching &&
                        <div className={classes.center}>
                            <CircularProgress color="primary"/>
                        </div>
                        }

                        {error &&
                        <div className={classes.center}>
                            <h2>Errore durante il caricamento </h2>
                        </div>
                        }

                        {!fetching && !error && < HomeContainer people={people}/>}
                        <div className="col">
                            {/*seconda colonna*/}
                            col2
                        </div>
                    </div>
                </div>
            </div>

            {/*renderizza l'errore*/}

        </Container>
    );
}

export default App;
