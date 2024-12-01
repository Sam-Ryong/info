import { configureStore, createSlice } from "@reduxjs/toolkit";
import { FaHome } from "react-icons/fa";
import sidebar from "../components/hardData/Sidebar.json";

let selectedItem = createSlice({
  name: "selectedItem",
  initialState: "Home",
  reducers: {
    setSelectedItem(state, newItem) {
      return newItem.payload;
    },
  },
});

let selectedIcon = createSlice({
  name: "selectedIcon",
  initialState: FaHome,
  reducers: {
    setSelectedIcon(state, newIcon) {
      return newIcon.payload;
    },
  },
});

let sidebarData = createSlice({
  name: "sidebarData",
  initialState: sidebar,
});

export default configureStore({
  reducer: {
    selectedItem: selectedItem.reducer,
    selectedIcon: selectedIcon.reducer,
    sidebarData: sidebarData.reducer,
  },
});

export let { setSelectedItem } = selectedItem.actions;
export let { setSelectedIcon } = selectedIcon.actions;
