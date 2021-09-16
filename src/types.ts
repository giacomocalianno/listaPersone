import {Action} from 'redux'
import {IPerson} from './home/App'

export interface IAction<T> extends Action<string> {
    payload: T
}
