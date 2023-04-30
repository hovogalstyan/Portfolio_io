import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FlagSliceStateTypes,flagListType} from "../../Type/Types";
const flagList: Array<flagListType> = [
    {language: 'en', flag: require('../../Components/Images/Flag/1280px-StarSpangledBannerFlag.svg.png')},
    {language: 'am', flag: require('../../Components/Images/Flag/i.webp')},
    {language: 'ru', flag: require('../../Components/Images/Flag/flag-of-russia.png')}
]

const initialState:FlagSliceStateTypes =  {
     data:flagList,
     flagLanguage:''
}

const FlagSlice =createSlice({
    name:'flag',
    initialState,
    reducers:{
        getLanguage:(state,action:PayloadAction<string>)=>{
            const findFlag = state.data.find((flag:flagListType) => flag.language === action.payload);
            state.flagLanguage = findFlag.flag
        }
    }
})
export default FlagSlice.reducer
export const {getLanguage} = FlagSlice.actions
