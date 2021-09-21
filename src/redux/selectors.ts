import {createSelector} from 'reselect'
import {IRootState} from './store'
import {IPerson} from '../home/App'

// Root selector
// export const peopleSelector = (state: IRootState) => state.people
export const entitiesSelector = (state: IRootState) => state.entities
//export const superUserKeysSelector = (state: IRootState) => state.flipSuperUser
export const keysSelector = (state: IRootState) => state.keys

export const checkedKeysSelector = (state: IRootState) => state.checkedKeys
export const uncheckedKeysSelector = (state: IRootState) => state.uncheckedKeys
export const superUserKeysSelector = (state: IRootState) => state.superUserKeys
// selector
export const checkedPeopleSelector = createSelector(
    checkedKeysSelector,
    entitiesSelector,
    (keys,entities) => keys.map(key => entities[key])
)

export const uncheckedPeopleSelector = createSelector(
    uncheckedKeysSelector,
    entitiesSelector,
    (keys,entities) => keys.map(key => entities[key])
)

export const superUserPeopleSelector = createSelector(
    superUserKeysSelector,
    entitiesSelector,
    (keys,entities) => keys.map(key => entities[key])
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