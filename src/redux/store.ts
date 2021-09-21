import {combineReducers, createStore} from '@reduxjs/toolkit'
import {
    checkedKeysReducer,
    entitiesReducer,
    IPersonEntities,
    keysReducer,
    superUserKeysReducer,
    uncheckedKeysReducer,
} from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

export interface IRootState {
    entities: IPersonEntities
    keys: string[],
    checkedKeys: string[],
    uncheckedKeys: string[],
    superUserKeys: string[]
}

export const rootReducer = combineReducers<IRootState, any>({
    entities: entitiesReducer,
    keys: keysReducer,
    checkedKeys: checkedKeysReducer,
    uncheckedKeys: uncheckedKeysReducer,
    superUserKeys: superUserKeysReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

