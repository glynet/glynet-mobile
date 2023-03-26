import { createSlice } from "@reduxjs/toolkit"

export const appPreferences = createSlice({
    name: "preferences",
    initialState: {
        playVideosAsMuted: false,
        blackBackground: false,
        setRefresh: false,
        compactNotifications: false,
        performanceMode: false,
        loopId: 0,
    },
    reducers: {
        setLoopId: (state, action) => {
            state.loopId = action.payload
        },
        setMute: (state, action) => {
            state.playVideosAsMuted = !state.playVideosAsMuted
        },
        setBlackBackground: (state, action) => {
            state.blackBackground = action.payload
        },
        setRefresh: (state) => {
            state.setRefresh = !state.setRefresh
        },

        setCompactNotifications: (state, action) => {
            state.compactNotifications = action.payload
        },
    },
})

export const { setLoopId, setMute, setBlackBackground, setRefresh, setCompactNotifications } = appPreferences.actions

export default appPreferences.reducer
