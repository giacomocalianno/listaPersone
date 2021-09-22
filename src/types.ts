import {Action} from 'redux'

export interface IAction<T> extends Action<string> {
    payload: T
}
