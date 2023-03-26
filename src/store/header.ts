import { createSlice } from "@reduxjs/toolkit"

export const header = createSlice({
    name: "header",
    initialState: {
        searchInput: "",
        blackBackground: false,
    },
    reducers: {
        setInput: (state, action) => {
            state.searchInput = action.payload
        },
    },
})

export const { setInput } = header.actions

export default header.reducer
