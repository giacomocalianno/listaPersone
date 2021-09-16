import {IPerson} from "../home/App";
import {actionTypes} from "./actionTypes";

export const peopleReducer = (state: IPerson[] | undefined, action: any) => {

    switch (action.type) {
        case actionTypes.ADD_PEOPLE:
            return state // inutilizzato al momento
        case actionTypes.CHECK:
            return state = {
                ...action.payload, // la persona che gli mando dal dispatch
                checked: !action.payload.checked // cambia il valore di checked col suo inverso
            }
        case actionTypes.UNCHECK:
            return state = {
                ...action.payload, // la persona che gli mando dal dispatch
                checked: !action.payload.checked // cambia il valore di checked col suo inverso
            }
        case actionTypes.SUPERUSER:
            return state = {
                ...action.payload, // la persona che gli mando dal dispatch
                superUser: !action.payload.superUser // cambia il valore di superUser col suo inverso
            }
        default:
            return state
    }
}