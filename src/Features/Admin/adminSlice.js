import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAdminPage: false,
    toggleCreateMember: false
}
const adminSlice = createSlice({
    name: 'adminData',
    initialState,
    reducers: {
        authenticateAdminTable: (state, { payload }) => {
            state.isAdminPage = payload
        },
        createMember: (state, { payload }) => {
            state.toggleCreateMember = payload
        },
    }
})

export const { authenticateAdminTable } = adminSlice.actions;
export const { createMember } = adminSlice.actions;
export const getAdminTableCheck = (state) => state.adminTable.isAdminPage;
export const getToggleCreateMember = (state) => state.adminTable.toggleCreateMember;
export default adminSlice.reducer