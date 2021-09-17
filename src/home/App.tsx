import React, {useEffect} from 'react'
import '../App.css'
import HomeContainer from './HomeContainer'
import Intestazione from './Intestazione'
import {CircularProgress, Container, makeStyles} from '@material-ui/core'
import {useFetchPeopleList} from './useFetchPeopleList'
import {useDispatch, useSelector} from 'react-redux'
import {addPeople} from '../redux/actions'
import {
    checkedPeopleSelector,
    peopleSelector,
    superUserPeopleSelector,
    uncheckedPeopleSelector
} from '../redux/selectors'

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
    const dispatch = useDispatch()

    // recupera le persone attraverso l'hook personalizzato
    const fetchResults = useFetchPeopleList(URL)

    useEffect(() => {
        dispatch(addPeople(fetchResults.people))
    }, [dispatch, fetchResults.people])

    const people = useSelector(peopleSelector)
    const checkedPeople = useSelector(checkedPeopleSelector)
    const uncheckedPeople = useSelector(uncheckedPeopleSelector)
    const superUser = useSelector(superUserPeopleSelector)

    useEffect(() => {
        console.log('results:' + JSON.stringify(people))
    }, [people])


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

                {/* colonna sinistra, persone con checked = true */}
                <div className="col">
                    <span> Arrivano dal backend con checked == true </span>
                    {!fetchResults.fetching && !fetchResults.error &&
                    <HomeContainer arrowDirection={'right'}
                                   people={checkedPeople}/>}
                </div>

                {/* colonna destra, persone con checked = false */}
                <div className="col">
                    <span> Arrivano dal backend con checked == false </span>
                    {!fetchResults.fetching && !fetchResults.error &&
                    <HomeContainer arrowDirection={'left'}
                                   people={uncheckedPeople}/>}
                </div>
            </div>
        </Container>
    )
}

export default App
