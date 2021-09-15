import {IPerson} from "../home/App";

export const peopleReducer = (state: IPerson[] | undefined, action: any) => {

    switch (action.type) {
        case "ADDPEOPLE":
            return state
        case "CHECK":
            return state = {
                ...action.payload,
                checked: !action.payload.checked
            }
        case "UNCHECK":
            return state = {
                ...action.payload,
                checked: !action.payload.checked
            }
        case "SUPERUSER":
            return state = {
                ...action.payload,
                superUser: !action.payload.superUser
            }
        default:
            return state
    }
}