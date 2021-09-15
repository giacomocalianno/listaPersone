import {createStore} from '@reduxjs/toolkit'
import {peopleReducer} from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(peopleReducer, composeWithDevTools())