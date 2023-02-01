import { createSlice } from "@reduxjs/toolkit";

export const appPreferences = createSlice({
    name: "preferences",
    initialState: {
        playVideosAsMuted: false,
        blackBackground: false
    },
    reducers: {
        setMute: (state, action) => {
            state.playVideosAsMuted = !state.playVideosAsMuted;
        },
        setBlackBackground: (state, action) => {
            state.blackBackground = action.payload;
        },
    },
});

export const { setMute, setBlackBackground } = appPreferences.actions;

export default appPreferences.reducer;
