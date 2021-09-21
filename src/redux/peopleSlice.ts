import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPerson} from "../home/App";

const initialState = [{}]

export const peopleSlice = createSlice({
    name: "people",
    initialState: initialState,
    reducers: {
        // aggiunge le persone
        addPeople: (state, action: PayloadAction<IPerson[]>) => {
            state.push(action.payload)
        },
        // cambia lo stato di checked
        changeCheckedState: (state, action: PayloadAction<IPerson>) => {
            state.map(person => {
                //@ts-ignore
                if (person.id === action.payload.id) {
                    return {
                        ...action.payload,
                        checked: !action.payload.checked
                    }
                } else {
                    return person
                }
            })
        },
        // cambia lo stato di superUser
        changeSuperUserState: (state, action: PayloadAction<IPerson>) => {
            state.map(person => {
                //@ts-ignore
                if (person.id === action.payload.id) {
                    return {
                        ...action.payload,
                        superUser: false
                    }
                } else {
                    return person
                }
            })
        }
    }
})

export default peopleSlice.reducer
export const {addPeople, changeCheckedState, changeSuperUserState} = peopleSlice.actions
