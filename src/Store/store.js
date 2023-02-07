import savedReducer from "./savedSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    saved: savedReducer,
  },
});

export default store;
