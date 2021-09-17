import {IPerson} from "../home/App";
import {actionTypes} from "./actionTypes";
import {IAction} from '../types'

export const peopleReducer = (state: IPerson[] = [], action: IAction<IPerson[] | IPerson>): IPerson[] => {
    switch (action.type) {
        case actionTypes.ADD_PEOPLE: {
            const act = action as IAction<IPerson[]>
            return act.payload
        }
        case actionTypes.FLIPCHECK: {
            const act = action as IAction<IPerson>
            // FIXME utilizare sintassi abbreviata
            return state.map(person => {
                // ciclo tutte le persone fino a quando non trovo quella che ho cliccato
                if (person.id === act.payload.id) {
                    // quando l'ho trovata, prendo quella persona, cambio il valore di checked e la ritorno
                    return {
                        ...person,
                        checked: !person.checked
                    }
                } else {
                    return person
                }
            })
        }
        case actionTypes.SUPERUSER: {
            const act = action as IAction<IPerson>
            return state.map(person => {
                // ciclo tutte le persone fino a quando non trovo quella che ho cliccato
                if (person.id === act.payload.id) {
                    // quando l'ho trovata, prendo quella persona, cambio il valore di super user e la ritorno
                    return {
                        ...person,
                        superUser: !person.superUser
                    }
                } else {
                    return person
                }
            })
        }
        default:
            return state
    }
}

// primo passo per l'esercizio
const entities = {
    '231': {
        id: '231',
        name: 'Vito'
        // ...
    }
}

const keys = ['231', '232', '233']
// const filteredKeys = ['231', '232']

// entities['232']

//secondo paso

const unckededPeople = ['232', '233']
const checkedPeople = ['231']
const superuser = ['232', '231']

// terzo passo

// selector
// filteredKeys.map(id => entities[id])




