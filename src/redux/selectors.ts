import {createSelector} from 'reselect'
import {IRootState} from './store'

// Root selector
// export const peopleSelector = (state: IRootState) => state.people
// export const superUserKeysSelector = (state: IRootState) => state.flipSuperUser

export const entitiesSelector = (state: IRootState) => state.entities
export const keysSelector = (state: IRootState) => state.keys

export const checkedKeysSelector = (state: IRootState) => state.checkedKeys
export const uncheckedKeysSelector = (state: IRootState) => state.uncheckedKeys
export const superUserKeysSelector = (state: IRootState) => state.superUserKeys
export const personSelector = ((state: IRootState) => state.personForm)

// selector
export const checkedPeopleSelector = createSelector(
    checkedKeysSelector,
    entitiesSelector,
    (keys, entities) => keys.map(key => entities[key])
)

export const uncheckedPeopleSelector = createSelector(
    uncheckedKeysSelector,
    entitiesSelector,
    (keys, entities) => keys.map(key => entities[key])
)

export const superUserPeopleSelector = createSelector(
    superUserKeysSelector,
    entitiesSelector,
    (keys, entities) => keys.map(key => entities[key])
)

export const superUserPeopleLengthSelector = createSelector(
    superUserKeysSelector,
    (keys) => keys.length
)

// selector che combina piu parti di state
// export const isProfileSuperUserSelector = createSelector(
//     superUserPeopleSelector,
//     profileSelector,
//     (superUsers, profile) => superUsers.some(value => value.name === profile.name)
// )
