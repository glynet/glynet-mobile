import { configureStore } from "@reduxjs/toolkit";

import preferencesReduces from "./preferences";

const store = configureStore({
    reducer: {
        preferences: preferencesReduces,
    },
});

export default store;
