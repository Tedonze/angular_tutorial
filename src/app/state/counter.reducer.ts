import { increment, decrement, reset } from './counter.action';
import { createReducer, on } from "@ngrx/store"
import { Action } from "rxjs/internal/scheduler/Action"
import {initialState} from './counter.state';

const _counterReducer=createReducer(initialState,on(increment,(state)=>{
    return {
        ...state,
        counter:state.counter+1
    }
}),
on(decrement,(state)=>{
    return{
        ...state,
        counter:state.counter+1

    }

}),
on(reset,(state)=>{
    return{
        ...state,
        counter:0

    }

})

)


export function counterReducer(state,action)
{
    return _counterReducer(state,action)
}