import { createSlice } from "@reduxjs/toolkit";

export const appPreferences = createSlice({
    name: "preferences",
    initialState: {
        playVideosAsMuted: false,
        blackBackground: false,
        setRefresh: false,
    },
    reducers: {
        setMute: (state, action) => {
            state.playVideosAsMuted = !state.playVideosAsMuted;
        },
        setBlackBackground: (state, action) => {
            state.blackBackground = action.payload;
        },
        setRefresh: (state) => {
            state.setRefresh = !state.setRefresh;
        }
    },
});

export const { setMute, setBlackBackground, setRefresh } = appPreferences.actions;

export default appPreferences.reducer;
