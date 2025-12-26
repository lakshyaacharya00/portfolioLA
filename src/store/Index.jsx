import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import roomsReducer from "./slices/RoomsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rooms: roomsReducer,
  },
});
