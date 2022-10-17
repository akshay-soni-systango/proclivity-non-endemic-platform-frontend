import { createSlice } from "@reduxjs/toolkit";
import adminData from '../../util/CampaignData/ADMIN_MEMBER.json'

const initialState = {
    isAdminPage: false,
    memberList: { ...adminData },
    isSearch: false,
    filterMember: [],
    toggleStatusModal: false,
    statusModalState:{}

}
const adminSlice = createSlice({
    name: 'adminData',
    initialState,
    reducers: {
        authenticateAdminTable: (state, { payload }) => {
            state.isAdminPage = payload
        },
        getMemberList: (state = initialState.memberList) => {
            return state
        },
        toggleSearch: (state, { payload }) => {
            state.isSearch = payload
        },
        searchMember: (state, { payload }) => {
            state.filterMember = payload
        },
        openStatusModal: (state, { payload }) => {
            state.toggleStatusModal = payload
        },
        setStatusModalState: (state, { payload }) => {
            state.statusModalState = payload
        }

    }
})

// actions
export const {
    authenticateAdminTable,
    getMemberList,
    openStatusModal,
    setStatusModalState,
    toggleSearch,
    searchMember
} = adminSlice.actions;

// states
export const getAdminTableCheck = (state) => state.adminTable.isAdminPage;
export const getMemberListState = (state) => state.adminTable.memberList;
export const getToggleStatusModal = (state) => state.adminTable.toggleStatusModal;
export const getStatusModalState = (state) => state.adminTable.statusModalState;
export const checkSearch = (state) => state.adminTable.isSearch;
export const getSearchState = (state) => state.adminTable.filterMember;
export default adminSlice.reducer