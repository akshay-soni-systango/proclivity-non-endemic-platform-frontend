import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAdminPage: false
}
const adminSlice = createSlice({
    name: 'adminData',
    initialState,
    reducers: {
        authenticateAdminTable: (state, { payload }) => {
            state.isAdminPage = payload
        }
    }
})

export const { authenticateAdminTable } = adminSlice.actions;
export const getAdminTableCheck = (state) => state.adminTable.isAdminPage;

export default adminSlice.reducer