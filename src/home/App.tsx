import React, {useEffect, useState} from 'react';
import '../App.css';
import HomeContainer from "./HomeContainer";
import Intestazione from "./Intestazione"
import {CircularProgress, Container, makeStyles} from "@material-ui/core";
import useProva from "./useProva";

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

const App: React.FC = props => {

    const [people, setPeople] = useState<IPerson[]>();
    const [fetching, setFetching] = useState<Boolean>(true);
    const [error, setError] = useState<Boolean>(false);
    const classes = useStyles();

    useEffect(() => {
        // per far vedere che funziona lo spinner chiamo la fetch dopo 2 secondi
        // fetch
        (async () => {
            const res = await fetch("https://612f5b495fc50700175f159f.mockapi.io/api/users")
            if (!res.ok) {
                setError(true)
            }
            const data = await res.json();
            setPeople(data)
            // .then(res => {
            //     if (!res.ok) {
            //         throw Error("Errore nel caricamento dei dati")
            //     }
            //     return res.json()
            // })
            // .then(data => {
            //     // salvo le persone
            //     setPeople(data);
            // })
            // .catch(err => {
            //         setError(true);
            //         console.log(`Errore: ${err.message}`)
            //     }
            // )
        })()

        // stoppo lo spinner
        setFetching(false)
    }, []);

    const prova = useProva(fetching, error, people);

    return (
        <Container>
            <div>
                <Intestazione/>
                <div className="row p-2">
                    {/*Prima colonna*/}

                    {/*se fetching è true allora non ha finito di caricare i dati e lo spinner è attivo*/}
                    <div>
                        {prova.fetching &&
                        <div className={classes.center}>
                            <CircularProgress color="primary"/>
                        </div>
                        }

                        {prova.error &&
                        <div className={classes.center}>
                            <h2>Errore durante il caricamento </h2>
                        </div>
                        }

                        {!prova.fetching && !prova.error && < HomeContainer people={people}/>}
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
