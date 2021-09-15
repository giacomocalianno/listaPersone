import {IPerson} from "../home/App";

export const addPeople = (person: IPerson) => {
    return {type: "ADDPEOPLE", payload: person}
}

export const checkPerson = (person: IPerson) => {
    return {type: "CHECK", payload: person}
}

export const uncheckPerson = (person: IPerson) => {
    return {type: "UNCHECK", payload: person}
}

export const superUserPerson = (person: IPerson) => {
    return {type: "SUPERUSER", payload: person}
}