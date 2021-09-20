import {createSelector} from 'reselect'
import {IRootState} from './store'
import {IPerson} from '../home/App'

// Root selector
export const peopleSelector = (state: IRootState) => state.people
export const entitiesSelector = (state: IRootState) => state.entities

// selector
export const checkedPeopleSelector = createSelector(
    peopleSelector,
    people => people.filter((persona: IPerson) => persona.checked /*&& persona.birthDate > oggi -18*/)
)

export const uncheckedPeopleSelector = createSelector(
    peopleSelector,
    people => people.filter((persona: IPerson) => !persona.checked)
)


export const superUserPeopleSelector = createSelector(
    peopleSelector,
    people => people.filter((persona: IPerson) => persona.superUser)
)

// selector che combina piu parti di state
// export const isProfileSuperUserSelector = createSelector(
//     superUserPeopleSelector,
//     profileSelector,
//     (superUsers, profile) => superUsers.some(value => value.name === profile.name)
// )

export const extractIdSelector = createSelector(
    peopleSelector,
    people => people.map(person => person.id)
)