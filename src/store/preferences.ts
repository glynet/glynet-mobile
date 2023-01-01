import { createSlice } from "@reduxjs/toolkit";

export const appPreferences = createSlice({
    name: "preferences",
    initialState: {
        playVideosAsMuted: false,
    },
    reducers: {
        setMute: (state, action) => {
            state.playVideosAsMuted = !state.playVideosAsMuted;
        },
    },
});

export const { setMute } = appPreferences.actions;

export default appPreferences.reducer;
