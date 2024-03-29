import { createSlice } from "@reduxjs/toolkit"

export const appPreferences = createSlice({
    name: "preferences",
    initialState: {
        playVideosAsMuted: false,
        blackBackground: false,
        setRefresh: false,
        compactNotifications: false,
        performanceMode: false,
        loopId: -1,
        postIndex: -1,
        profile: {
            username: "",
            isFetched: false,
            data: {}
        },

        status_bar: "dark",

        bar_color: "#fff"

    },
    reducers: {
        setLoopId: (state, action) => {
            state.loopId = action.payload
        },
        setPostIndex: (state, action) => {
            state.postIndex = action.payload
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

        setProfile: (state, action) => {
            state.profile = action.payload
        },

        setStatusBar: (state, action) => {
            state.status_bar = action.payload
        },

        setBarColor: (state, action) => {
            state.bar_color = action.payload
        }
    },
})

export const { setBarColor, setStatusBar, setLoopId, setMute, setBlackBackground, setRefresh, setCompactNotifications, setPostIndex, setProfile } = appPreferences.actions

export default appPreferences.reducer
