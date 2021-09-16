import {IPerson} from "../home/App";
import {actionTypes} from "./actionTypes"
import {IAction} from '../types'

export const addPeople = (person: IPerson): IAction<IPerson> => {
    return {type: actionTypes.ADD_PEOPLE, payload: person}
}

export const checkPerson = (person: IPerson) => {
    return {type: actionTypes.CHECK, payload: person}
}

export const uncheckPerson = (person: IPerson) => {
    return {type: actionTypes.UNCHECK, payload: person}
}

export const superUserPerson = (person: IPerson) => {
    return {type: actionTypes.SUPERUSER, payload: person}
}
