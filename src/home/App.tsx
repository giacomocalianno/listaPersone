import React, {useEffect} from 'react'
import '../App.css'
import HomeContainer from './HomeContainer'
import Intestazione from './Intestazione'
import {CircularProgress, Container, makeStyles} from '@material-ui/core'
import {useGetFetch} from './useGetFetch'
import {useDispatch, useSelector} from 'react-redux'
import {addPeople} from '../redux/actions'
import {
    checkedPeopleSelector,
    superUserPeopleLengthSelector,
    superUserPeopleSelector,
    uncheckedPeopleSelector,
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
    const fetchResults = useGetFetch<IPerson[]>(URL)

    useEffect(() => {
        fetchResults.data && dispatch(addPeople(fetchResults.data))
    }, [dispatch, fetchResults.data])

    // const people = useSelector(peopleSelector)
    // const entitiesSelec: IPersonEntities = useSelector(entitiesSelector) // mi prendo le entit?? (id: object) dallo store
    // const keysSelec: string[] = useSelector(keysSelector)

    const checkedPeople: IPerson[] = useSelector(checkedPeopleSelector)
    const uncheckedPeople: IPerson[] = useSelector(uncheckedPeopleSelector)
    const superUser: IPerson[] = useSelector(superUserPeopleSelector)
    const superUserLengthSelector = useSelector(superUserPeopleLengthSelector)
    // console.log("entitiesSelec: " + JSON.stringify(entitiesSelec))
    // console.log("keysSelector: " + keysSelec)

    // useEffect(() => {
    //     let arrayPerson: any = []
    //     keysSelec.forEach((key: string) => arrayPerson.push(entitiesSelec[key]))
    //     // console.log(arrayPerson)
    //     dispatch((arrayPerson))
    // }, [dispatch, keysSelec, entitiesSelec]);

    // prendo ogni numero nell'array e lo metto come indice di ricerca nell'oggetto
    // idArray.forEach((key: string) => console.log("key: " + key + "\n entities[key]: " + JSON.stringify(entitiesSelec[key])))

    const background = "https://lh3.googleusercontent.com/proxy/RLJKliMDe6qh7oL5qEnK2MsAsyH4VYRy9xVHxcFeO8p5kz99qVNUjbctWnsoUZPpQ6RJzNzL15BWBdLFesZewm1L9HugoeHD3RRe_L-sZq8MxH-bPMv6gV_UwXnCNv2caA"

    return (
        <Container
            style={{
                backgroundImage: `url(${background})`,
                width: "100vw",
                height: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
            <Intestazione superUserNumber={superUserLengthSelector}/>
            <div className="row p-2">
                {/*Prima colonna*/}
                {/*se fetching ?? true allora non ha finito di caricare i dati e lo spinner ?? attivo*/}
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

                {/* colonna sinistra, persone con checked = true */}
                <div className="col">
                    <span> Arrivano dal backend con checked == true </span>
                    {!fetchResults.fetching && !fetchResults.error &&
                    <HomeContainer arrowDirection={'right'} people={checkedPeople} superUser={superUser}/>}
                </div>

                {/* colonna destra, persone con checked = false */}
                <div className="col">
                    <span> Arrivano dal backend con checked == false </span>
                    {!fetchResults.fetching && !fetchResults.error &&
                    <HomeContainer arrowDirection={'left'} people={uncheckedPeople} superUser={superUser}/>}
                </div>
            </div>
        </Container>
    )
}

export default App
