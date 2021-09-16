import {IPerson} from "../home/App";
import {actionTypes} from "./actionTypes";

export const peopleReducer = (state: IPerson[] = [], action: any): IPerson[] => {
    switch (action.type) {
        case actionTypes.ADD_PEOPLE:
            return action.payload
        case actionTypes.FLIPCHECK:
            return state.map(person => {
                // ciclo tutte le persone fino a quando non trovo quella che ho cliccato
                if (person.id === action.payload.id) {
                    // quando l'ho trovata, prendo quella persona, cambio il valore di checked e la ritorno
                    return {
                        ...person,
                        checked: !person.checked
                    }
                } else {
                    return person
                }
            })
        case actionTypes.SUPERUSER:
            return state.map(person => {
                // ciclo tutte le persone fino a quando non trovo quella che ho cliccato
                if (person.id === action.payload.id) {
                    // quando l'ho trovata, prendo quella persona, cambio il valore di super user e la ritorno
                    return {
                        ...person,
                        superUser: !person.superUser
                    }
                } else {
                    return person;
                }
            })
        default:
            return state
    }
}
