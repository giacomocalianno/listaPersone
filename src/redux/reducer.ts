import {IPerson} from "../home/App";

export const peopleReducer = (state: IPerson[] | undefined, action: any) => {

    switch (action.type) {
        case "ADDPEOPLE":
            return state // inutilizzato al momento
        case "CHECK":
            return state = {
                ...action.payload, // la persona che gli mando dal dispatch
                checked: !action.payload.checked // cambia il valore di checked col suo inverso
            }
        case "UNCHECK":
            return state = {
                ...action.payload, // la persona che gli mando dal dispatch
                checked: !action.payload.checked // cambia il valore di checked col suo inverso
            }
        case "SUPERUSER":
            return state = {
                ...action.payload, // la persona che gli mando dal dispatch
                superUser: !action.payload.superUser // cambia il valore di superUser col suo inverso
            }
        default:
            return state
    }
}