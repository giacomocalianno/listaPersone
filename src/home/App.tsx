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
    id: string,
    checked?: boolean
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

/*
    [persone, setPersone] => [persone checked/uncheck]

    personeChecked = persone.filter(persona => persona.checked)
    personeUncheck = persone.filter(persona => !persona.checked)

    //modifica
    3 -> perone.map((persona, i) => persona.id === 3 ? ({...persona,checked: !persona.checked}) : persona)

    handleClickPersona(idPersona: number) {
        const personeAggiornate = perone.map((persona, i) => persona.id === 3 ? ({...persona,checked: !persona.checked}) : persona)
        setPersone(personeAggiornate)
    }

    // parte 2 usare useMemo
*/


const App: React.FC = props => {

    const classes = useStyles();

    const [people, setPeople] = useState<IPerson[]>()
    const [checkedPeople, setCheckedPeople] = useState<IPerson[]>()
    const [uncheckedPeople, setUncheckedPeople] = useState<IPerson[]>()
    const fetchResults = useFetchPeopleList("https://612f5b495fc50700175f159f.mockapi.io/api/users");
    console.log(fetchResults)

    useEffect(() => {
        setPeople(fetchResults.people)
        console.log("People setted")
        people?.map((p: IPerson) => p.checked = !p.checked)
    }, [fetchResults.people, people]);

    const setPeopleChecked = (people?: IPerson[]) => {
        setCheckedPeople(people)

    }
    const setPeopleUnchecked = (people?: IPerson[]) => {
        setUncheckedPeople(people)
    }

    return (
        <Container>
            <Intestazione/>
            <div className="row p-2">
                {/*Prima colonna*/}

                {/*se fetching è true allora non ha finito di caricare i dati e lo spinner è attivo*/}
                <div>
                    {fetchResults.fetching &&
                    <div className={classes.center}>
                        <CircularProgress color="primary"/>
                    </div>
                    }

                    {fetchResults.error &&
                    <div className={classes.center}>
                        <h2>Errore durante il caricamento </h2>
                    </div>
                    }
                </div>

                {/*colonna sinistra*/}
                <div className="col">
                    {!fetchResults.fetching && !fetchResults.error &&
                    <HomeContainer setPeopleUnchecked={setPeopleUnchecked}
                                   setPeopleChecked={setPeopleChecked}
                                   people={people}/>}
                </div>

                {/*colonna destra*/}
                <div className="col">
                    {!fetchResults.fetching && !fetchResults.error &&
                    <HomeContainer setPeopleUnchecked={setPeopleUnchecked}
                                   setPeopleChecked={setPeopleChecked}
                                   people={uncheckedPeople}/>}
                </div>
            </div>
        </Container>
    );
}

export default App;
