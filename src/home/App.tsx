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
    superUser?: boolean
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

const URL = "https://612f5b495fc50700175f159f.mockapi.io/api/users";

const App: React.FC = props => {

    const classes = useStyles();

    const [people, setPeople] = useState<IPerson[]>()

    const fetchResults = useFetchPeopleList(URL);
    console.log(fetchResults)

    const checkedPeople = people?.filter(persona => persona.checked)
    const uncheckedPeople = people?.filter(persona => !persona.checked)
    const superUser = people?.filter(persona => persona.superUser)
    console.log("ho fatto il filtraggio")

    const filterPeople = () => {
        const checkedPeople = people?.filter(persona => persona.checked)
        const uncheckedPeople = people?.filter(persona => !persona.checked)
        // const superUserPeople = people?.filter(persona => persona.superUser)
        setPeople(checkedPeople)
        setPeople(uncheckedPeople)
    }

    const setCheckedToUnchecked = (person: IPerson) => {
        console.log(person.checked)
        console.log("funzione opposite checked unchecked")
        person.checked = !person.checked
        console.log(person)

        filterPeople()
    }

    useEffect(() => {
        setPeople(fetchResults.people)
        console.log("People setted: " + people)
    }, [fetchResults.people, people]);

    const setSuperUser = (person: IPerson) => {
        // controlla se la persona è gia superuser: non fa nulla
        // altrimenti esegue questa funzione di assegnazione a superuser
        if (!person.superUser) {
            person.superUser = true
            filterPeople()
        }
    }

    return (
        <Container>
            <Intestazione superUser={superUser}/>
            <div className="row p-2">
                {/*Prima colonna*/}
                {/*se fetching è true allora non ha finito di caricare i dati e lo spinner è attivo*/}
                <div>
                    {fetchResults.fetching &&
                    <div className={classes.center}>
                        <CircularProgress color="primary"/>
                    </div>
                    }

                    {/*se ci sono errori nel fetching visualizzo un messaggio d'errore*/}
                    {fetchResults.error &&
                    <div className={classes.center}>
                        <h2>Errore durante il caricamento </h2>
                    </div>
                    }
                </div>

                {/* colonna sinistra, persone con checked = false */}
                <div className="col">
                    Arrivano dal backend con checked = false
                    {!fetchResults.fetching && !fetchResults.error &&
                    <HomeContainer setSuperUser={setSuperUser} setCheckedUnchecked={setCheckedToUnchecked}
                                   arrowDirection={"right"}
                                   people={checkedPeople}/>}
                </div>

                {/* colonna destra, persone con checked = true */}
                <div className="col">
                    Arrivano dal backend con checked = true
                    {!fetchResults.fetching && !fetchResults.error &&
                    <HomeContainer setSuperUser={setSuperUser} setCheckedUnchecked={setCheckedToUnchecked}
                                   arrowDirection={"left"}
                                   people={uncheckedPeople}/>}
                </div>
            </div>
        </Container>
    );
}

export default App;
