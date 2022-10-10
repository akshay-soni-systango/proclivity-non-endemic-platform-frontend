import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openModal: false
}
const adminSlice = createSlice({
    name: 'adminData',
    initialState,
    reducers: {
        openAdminTableModal: (state, { payload }) => {
            state.openModal = payload
        }
    }
})

export const { openAdminTableModal } = adminSlice.actions;
export const toggleModal = (state) => state.adminTable.openModal;
export default adminSlice.reducer