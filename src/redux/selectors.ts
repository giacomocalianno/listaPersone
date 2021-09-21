import {createSelector} from 'reselect'
import {IRootState} from './store'
import {IPerson} from '../home/App'

// Root selector
// export const peopleSelector = (state: IRootState) => state.people
export const entitiesSelector = (state: IRootState) => state.entities
export const superUserSelector = (state: IRootState) => state.flipSuperUser
export const keysSelector = (state: IRootState) => state.keys

export const peopleSelector = (state: IRootState) => state.flipCheck
// selector
export const checkedPeopleSelector = createSelector(
    peopleSelector,
    (people) => people.filter((persona: IPerson) => persona.checked /*&& persona.birthDate > oggi -18*/)
)

export const uncheckedPeopleSelector = createSelector(
    peopleSelector,
    people => people.filter((persona: IPerson) => !persona.checked)
)

export const superUserPeopleSelector = createSelector(
    superUserSelector,
    people => people.filter((persona: IPerson) => !!persona.superUser)
)

// selector che combina piu parti di state
// export const isProfileSuperUserSelector = createSelector(
//     superUserPeopleSelector,
//     profileSelector,
//     (superUsers, profile) => superUsers.some(value => value.name === profile.name)
// )