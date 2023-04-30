import {combineReducers, configureStore} from "@reduxjs/toolkit";
import FlagSlice from "./features/FlagSlice";
import ProjectSlice from "./features/ProjectSlice";
const Root = combineReducers({
    FlagSlice,
    ProjectSlice
})
export const store = configureStore({reducer:Root});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
