import {IPerson} from "../home/App";
import {actionTypes} from "./actionTypes"
import {IAction} from '../types'

export const addPeople = (people: IPerson[]): IAction<IPerson[]> => {
    return {type: actionTypes.ADD_PEOPLE, payload: people}
}

export const flipCheck = (person: IPerson) => {
    return {type: actionTypes.FLIPCHECK, payload: person}
}

export const superUserPerson = (person: IPerson) => {
    return {type: actionTypes.SUPERUSER, payload: person}
}
