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
    id: string,
    checked?: string
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
    let arrayPeople: IPerson[] = [];

    const [people, setPeople] = useState<IPerson[]>([]);
    const [clickedPeople, setClickedPeople] = useState<IPerson[]>([]);
    const [fetching, setFetching] = useState<Boolean>(true);
    const [error, setError] = useState<Boolean>(false);
    const [checked, setChecked] = useState(true)
    const [visible, setVisible] = useState(false)

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
        })()

        // stoppo lo spinner
        setFetching(false)
    }, []);

    const prova = useProva(fetching, error, people);

    const clickedInfo = (person: IPerson) => {
        if (person.checked === undefined) {
            person.checked = "true"
            console.log(person);
            setVisible(true)
            clickedPeople?.map(clickedPerson => {
                const filtered = people?.filter(person => person.id !== clickedPerson.id)
                setPeople(filtered)
            })
            arrayPeople?.push(person)
            console.log(arrayPeople)
            setClickedPeople(oldState => [...oldState, person])
        } else {
            console.log("Non è undefined")
            people?.map(person => {
                const filtered = clickedPeople?.filter(clickedPerson => person.id !== clickedPerson.id)
                setClickedPeople(filtered)
            })
            setPeople(oldState => [...oldState, person])
        }
    }

    return (
        <Container>
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
                </div>

                {/*colonna sinistra*/}
                <div className="col">
                    {!prova.fetching && !prova.error &&
                    <HomeContainer showClickedInfo={clickedInfo} clickedPeople={arrayPeople} people={people}
                                   checked={checked}/>}
                </div>

                {/*colonna destra*/}
                <div className="col">
                    {!prova.fetching && !prova.error && visible &&
                    < HomeContainer showClickedInfo={clickedInfo} checked={checked}
                                    people={clickedPeople}/>}
                </div>
            </div>
        </Container>
    );
}

export default App;
