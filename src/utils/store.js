import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

// Redux Architecture (Workflow)
// When we click on Add button, an action is dispatched which will call a reducer
// function which will update the slice in the store.
// Using selector we will get the data by subscribing to the store accessing a particular portion of our slice
// and getting the data onto our app.
