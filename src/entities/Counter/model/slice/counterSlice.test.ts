import { counterActions, counterReducer } from "./counterSlice"
import { CounterSchema } from "../types/counterSchema";


describe('counterSlice', () => {
    test('', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state, counterActions.decrement())).toEqual( { value: 9 } )
    })
})

describe('counterSlice', () => {
    test('', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state, counterActions.increment())).toEqual( { value: 11 } )
    })

    test('should work with empty state', () => {
        const state: CounterSchema = { value: 0 };

        expect(counterReducer(state, counterActions.increment())).toEqual( { value: 1 } )
    })
})