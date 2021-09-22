import {IPerson} from "../home/App";
import {actionTypes} from "./actionTypes"
import {IAction} from '../types'

export const addPeople = (people: IPerson[]): IAction<IPerson[]> => {
    return {type: actionTypes.ADD_PEOPLE, payload: people}
}

export const addEntities = (people: {}): Object => {
    return {type: actionTypes.ADD_ENTITIES, payload: people}
}

export const addIdKeys = (keys: string[]) => {
    return {type: actionTypes.ADD_KEYS, payload: keys}
}

export const check = (id: string) => {
    return {type: actionTypes.FLIP, payload: id}
}
export const uncheck = (id: string) => {
    return {type: actionTypes.FLIP, payload: id}
}

export const toggleSuperAction = (id: string) => {
    return {type: actionTypes.TOGGLE_SUPERUSER, payload: id}
}
