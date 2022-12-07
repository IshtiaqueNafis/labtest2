import {albumReducer} from "./albumbSliceReducer";
import {configureStore} from "@reduxjs/toolkit";

const reducer = {
    album: albumReducer,
}
export const store = configureStore({
    reducer,


})
