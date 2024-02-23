import { StateSchema } from "app/providers/StoreProvider"
import { getCounter } from "./getCounter"
import { GetState } from "@reduxjs/toolkit"


describe('getCounter', () => {
    test('should return counter value', () => {
        const state: GetState<StateSchema> = {
            counter: {
                value: 10
            }
        };

        expect(getCounter(state as StateSchema)).toEqual( {value: 10} )
    })
})
