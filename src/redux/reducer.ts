import {IPerson} from '../home/App'
import {actionTypes} from './actionTypes'
import {IAction} from '../types'

export const peopleReducer = (state: IPerson[] = [], action: IAction<IPerson[] | IPerson>): IPerson[] => {
    switch (action.type) {
        case actionTypes.ADD_PEOPLE: {
            const act = action as IAction<IPerson[]>
            return act.payload
        }
        case actionTypes.FLIP_CHECK: {
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

// fixme IPersonEntities
export interface IEntities {
    [id: string]: IPerson
}

export const entitiesReducer = ((state: IEntities = {}, action: IAction<IPerson[]>): IEntities => {
    switch (action.type) {
        case actionTypes.ADD_PEOPLE:
            return action.payload.reduce((prev, current) => {
                return {
                    ...prev, [current.id]: current
                }
            }, {})
        /*case actionTypes.ADD_ENTITIES: {
            const act = action as IAction<IPerson[]>
            return act.payload
        }*/
        default:
            return state
    }
})

export const keysReducer = ((state: string[] = [], action: IAction<IPerson[]>): string[] => {
    switch (action.type) {
        case actionTypes.ADD_PEOPLE:
            return action.payload.map(value => value.id)
/*        case actionTypes.ADD_KEYS:
            return action.payload*/
        default:
            return state
    }
})





