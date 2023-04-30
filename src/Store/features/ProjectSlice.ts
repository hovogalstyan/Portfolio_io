import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProjectsStateTypes, VideoItemsType} from "../../Type/Types";
import data from "./data";

const initialState: ProjectsStateTypes = {
    data: data,
    description: null
}
const ProjectSlice = createSlice({
    name: 'projects/video/data',
    initialState,
    reducers: {
        getVideoId: (state, action: PayloadAction<number>) => {
            const results = state.data.find((video: VideoItemsType) => video.id === action.payload)
            state.description = results
        }
    }
})
export default ProjectSlice.reducer
export const {getVideoId} = ProjectSlice.actions
