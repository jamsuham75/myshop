import {createSlice, configureStore } from '@reduxjs/toolkit'
import user from './store/userSlice.js'
// eslint-disable-next-line no-undef

let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        addCount(state, action){
            let idx = state.findIndex((a)=>{
                return a.id === action.payload
            })
            state[idx].count++
        }
    }
})

export let { addCount } = cart.actions; 

export default configureStore({
    reducer : {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})