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

export const flipCheck = (person: IPerson) => {
    return {type: actionTypes.FLIP, payload: person}
}

export const superUserPerson = (person: IPerson) => {
    return {type: actionTypes.FLIPSUPERUSER, payload: person}
}

export const toogleSuperAction = (id: string) => {
    return {type: actionTypes.TOOGLE_SUPERUSER, payload: id}
}
