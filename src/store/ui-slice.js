import { createSlice } from "@reduxjs/toolkit";

const uiSlice =createSlice({
  name: "ui",
  initialState: {isCartVisible: false, notification: null},
  reducers: {
    toggle(state) { 
        state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification = action.payload;
    }
    ,hideNotification(state) {
      state.notification = null;
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice;