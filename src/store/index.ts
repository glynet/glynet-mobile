import { configureStore } from "@reduxjs/toolkit";

import preferencesReduces from "./preferences";
import headerReduces from "./header";

const store = configureStore({
    reducer: {
        preferences: preferencesReduces,
        header: headerReduces
    },
});

export default store;
