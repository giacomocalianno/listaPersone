import React, {useEffect, useState} from 'react'
import '../App.css'
import HomeContainer from './HomeContainer'
import Intestazione from './Intestazione'
import {CircularProgress, Container, makeStyles} from '@material-ui/core'
import {useFetchPeopleList} from './useFetchPeopleList'

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
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

const URL = 'https://612f5b495fc50700175f159f.mockapi.io/api/users'

const App: React.FC = props => {

    const classes = useStyles()
    const [people, setPeople] = useState<IPerson[]>([])

    // recupera le persone attraverso l'hook personalizzato
    const fetchResults = useFetchPeopleList(URL)
    // filtra le persone
    const checkedPeople = people?.filter(persona => persona.checked)
    const uncheckedPeople = people?.filter(persona => !persona.checked)
    const superUser = people?.filter(persona => persona.superUser)

    useEffect(() => {
        // cosi vedo solo quando people si aggiorna
        console.log('people -> ', people)
    }, [people])

    const setCheckedToUnchecked = (person: IPerson) => {

        // 1. stesso codice del punto 2 esteso
        /*
        // la nuova persona è uguale alla vecchia ma con la proprietà checked invertita
        const newPerson = {
            ...person,
            checked: !person.checked
        }
        // devo assegnare la nuova persona alla stessa vecchia persona
        // quindi ciclo con un map e controllo ogni id, quando lo trovo cambio la newperson con la vecchia
        const newArrayPeople = people.map((p, index, array) => {
            if (p.id === newPerson.id) {
                return newPerson
            } else {
                return p
            }
        })

        setPeople(newArrayPeople)
        */

        // 2. forma "abbreviata"
        setPeople(people => people.map(p => ({
            ...p,
            checked: person.id === p.id ? !p.checked : p.checked
        })))
    }

    /*
    const objA = { nome: 'Vito', cognome: 'Manu'}
     const objB = { nome: 'Andrea', eta: 25}
     const objMerge = { //nome Vito
         ...objB
         ...objA,
     }
     */

    useEffect(() => {
        setPeople(fetchResults.people)
    }, [fetchResults.people])

    const setSuperUser = (person: IPerson) => {
        // creo una nuova persona che ha le stesse proprietà della vecchia ma con superuser invertita
        const newPerson = {
            ...person, superUser: !person.superUser
        }
        // ciclo le persone finchè non trovo che quella persona --> quindi la ritorno
        // se non c'è ritorno quella già presente
        const arraySuperUsers = people.map(persona => {
            if (persona.id === person.id) return newPerson
            else return persona
        })
        setPeople(arraySuperUsers)
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
                        <h2>Errore durante il caricam ento </h2>
                    </div>
                    }
                </div>

                {/* colonna sinistra, persone con checked = false */}
                <div className="col">
                    Arrivano dal backend con checked = false
                    {!fetchResults.fetching && !fetchResults.error &&
                    <HomeContainer setSuperUser={setSuperUser} setCheckedUnchecked={setCheckedToUnchecked}
                                   arrowDirection={'right'}
                                   people={checkedPeople}/>}
                </div>

                {/* colonna destra, persone con checked = true */}
                <div className="col">
                    Arrivano dal backend con checked = true
                    {!fetchResults.fetching && !fetchResults.error &&
                    <HomeContainer setSuperUser={setSuperUser} setCheckedUnchecked={setCheckedToUnchecked}
                                   arrowDirection={'left'}
                                   people={uncheckedPeople}/>}
                </div>
            </div>
        </Container>
    )
}

export default App
