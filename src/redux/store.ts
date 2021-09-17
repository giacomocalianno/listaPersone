import {combineReducers, createStore} from '@reduxjs/toolkit'
import {peopleReducer} from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {IAction} from '../types'
import {IPerson} from '../home/App'

export const profileReducer = (state: any | null = null, action: IAction<unknown>): any | null => {
    switch (action.type) {
        default:
            return state
    }
}

export interface IRootState {
    people: IPerson[]
    profile: any;
}

export const rootReducer = combineReducers<IRootState>({
    people: peopleReducer,
    profile: profileReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

