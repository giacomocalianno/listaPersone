import {combineReducers, createStore} from '@reduxjs/toolkit'
import {entitiesReducer, flipCheckReducer, flipSuperUserReducer, IPersonEntities, keysReducer,} from './reducer'
import {composeWithDevTools} from "redux-devtools-extension";
import {IPerson} from "../home/App";

export interface IRootState {
    entities: IPersonEntities
    keys: string[],
    flipCheck: IPerson[],
    flipSuperUser: IPerson[]
}

export const rootReducer = combineReducers<IRootState, any>({
    entities: entitiesReducer,
    keys: keysReducer,
    //@ts-ignore
    flipCheck: flipCheckReducer,
    //@ts-ignore
    flipSuperUser: flipSuperUserReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

