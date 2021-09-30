import {IPerson} from '../home/App'
import {actionTypes} from './actionTypes'
import {IAction} from '../types'

// export const peopleReducer = (state: IPerson[] = [], action: IAction<IPerson[] | IPerson>): IPerson[] => {
//     switch (action.type) {
//         case actionTypes.ADD_PEOPLE: {
//             const act = action as IAction<IPerson[]>
//             return act.payload
//         }
//         case actionTypes.FLIP_CHECK: {
//             const act = action as IAction<IPerson>
//             // FIXME utilizare sintassi abbreviata
//             return state.map(person => {
//                 // ciclo tutte le persone fino a quando non trovo quella che ho cliccato
//                 if (person.id === act.payload.id) {
//                     // quando l'ho trovata, prendo quella persona, cambio il valore di checked e la ritorno
//                     return {
//                         ...person,
//                         checked: !person.checked
//                     }
//                 } else {
//                     return person
//                 }
//             })
//         }
//         case actionTypes.SUPERUSER: {
//             const act = action as IAction<IPerson>
//             return state.map(person => {
//                 // ciclo tutte le persone fino a quando non trovo quella che ho cliccato
//                 if (person.id === act.payload.id) {
//                     // quando l'ho trovata, prendo quella persona, cambio il valore di super user e la ritorno
//                     return {
//                         ...person,
//                         superUser: !person.superUser
//                     }
//                 } else {
//                     return person
//                 }
//             })
//         }
//         default:
//             return state
//     }
// }

export interface IPersonEntities {
    [id: string]: IPerson
}

export const entitiesReducer = ((state: IPersonEntities = {}, action: IAction<IPerson[]>): IPersonEntities => {
    switch (action.type) {
        case actionTypes.ADD_PEOPLE:
            return action.payload.reduce((prev, current) => {
                return {
                    ...prev, [current.id]: current
                }
            }, {})
        default:
            return state
    }
})

export const keysReducer = ((state: string[] = [], action: IAction<IPerson[]>): string[] => {
    switch (action.type) {
        case actionTypes.ADD_PEOPLE:
            return action.payload.map(value => value.id)
        default:
            return state
    }
})

export const checkedKeysReducer = ((state: string[] = [], action: IAction<string> | IAction<IPerson[]>): string[] => {
    switch (action.type) {
        case actionTypes.ADD_PEOPLE: {
            // action qui è di tipo IPerson[]
            const act = action as IAction<IPerson[]>
            // filtro sull'action payload (le entities) chi è checked e col map mi prendo gli id
            return act.payload.filter(person => person.checked).map(person => person.id)
        }
        case actionTypes.FLIP: {
            // action qui è di tipo string
            const act = action as IAction<string>
            // nell'array di id di checked è presente l'id della persona che ho cliccato?
            const isPresent = state.some(key => key === act.payload)
            console.log("is present checked: " + isPresent)

            // se è si lo tolgo (perchè vuol dire che è checked), altrimenti lo aggiungo allo stato
            return isPresent ? (state.filter(key => key !== act.payload)) : [act.payload, ...state]
        }
        default:
            return state
    }
})

export const uncheckedKeysReducer = ((state: string[] = [], action: IAction<string> | IAction<IPerson[]>): string[] => {
    switch (action.type) {
        case actionTypes.ADD_PEOPLE: {
            // action qui è di tipo IPerson[]
            const act = action as IAction<IPerson[]>
            // filtro sull'action payload (le entities) chi è unchecked e col map mi prendo gli id
            return act.payload.filter(person => !person.checked).map(person => person.id)
        }
        case actionTypes.FLIP: {
            // action qui è di tipo string
            const act = action as IAction<string>
            // nell'array di id di unchecked è presente l'id della persona che ho cliccato?
            const isPresent = state.some(key => key === act.payload)
            console.log("is present unchecked: " + isPresent)

            // se è si lo tolgo (perchè vuol dire che è unchecked), altrimenti lo aggiungo allo stato
            return isPresent ? (state.filter(key => key !== act.payload)) : [act.payload, ...state]
        }
        default:
            return state
    }
})

export const superUserKeysReducer = ((state: string[] = [], action: IAction<string>): string[] => {
    // qui l'action è solo di tipo string quindi non serve il cast --> act = action as IAction<...>
    switch (action.type) {
        case actionTypes.ADD_PEOPLE: {
            return []
        }
        case actionTypes.TOGGLE_SUPERUSER:
            console.log(action.payload)
            const isPresent = state.some(key => key === action.payload)
            console.log("is present: " + isPresent)
            return isPresent ? state.filter(key => key !== action.payload) : [...state, action.payload]
        default:
            return state
    }
})

export const personFormReducer = ((state: object = {}, action: IAction<object>): object => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            return action.payload
        default:
            return state;
    }
})





