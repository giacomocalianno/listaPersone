import {combineReducers, createStore} from '@reduxjs/toolkit'
import {entitiesReducer, IEntities, keysReducer, peopleReducer} from './reducer'
import {composeWithDevTools} from "redux-devtools-extension";
import {IPerson} from '../home/App'

export interface IRootState {
    people: IPerson[]
    entities: IEntities
    keys: string[]
}

export const rootReducer = combineReducers<IRootState>({
    people: peopleReducer,
    entities: entitiesReducer,
    keys: keysReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

