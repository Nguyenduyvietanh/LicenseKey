import { configureStore } from "@reduxjs/toolkit";

import ChangeState from "./changeState";
const store = configureStore({
  reducer: {
    changeState: ChangeState,
  },
});
export default store;
