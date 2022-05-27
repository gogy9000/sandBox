import {combineReducers, createStore} from "redux";
import {currencyReducer} from './currencyReducer';

const reducers = combineReducers({
    currency: currencyReducer,
});
export type IGlobalState = ReturnType<typeof reducers>;
export  type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export const store = createStore(reducers);

// @ts-ignore
window.store = store