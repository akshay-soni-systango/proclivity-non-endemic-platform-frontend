import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminData from '../../util/CampaignData/ADMIN_MEMBER.json'

// export const fetchAsyncMember = createAsyncThunk('Members/fetchAsyncThunk',
//     (adminData) => {
//         const response = adminData
//         return response
//     });

const initialState = {
    isAdminPage: false,
    toggleCreateMember: false,
    memberList: {...adminData},
    isSearch: false,
    filterMember: [],

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
        getMemberList: (state = initialState.memberList) => {
            return state
        },
        toggleSearch: (state, { payload }) => {
            state.isSearch = payload
        },
        searchMember: (state, { payload }) => {
            state.filterMember = payload
        }

    },
    // // extraReducers: {
    // //     [fetchAsyncMember.pending]: () => {
    // //         console.log("pending");
    // //     },
    // //     [fetchAsyncMember.fulfilled]: (state, { payload }) => {

    // //         console.log("fetched success");

    // //         return { ...state, memberList: payload }
    // //     },
    // //     [fetchAsyncMember.pending]: () => {
    // //         console.log("pending");
    // //     }
    // }
})

export const { authenticateAdminTable } = adminSlice.actions;
export const { createMember } = adminSlice.actions;
export const { getMemberList } = adminSlice.actions;

export const { searchMember, toggleSearch } = adminSlice.actions;

export const getAdminTableCheck = (state) => state.adminTable.isAdminPage;
export const getToggleCreateMember = (state) => state.adminTable.toggleCreateMember;
export const getMemberListState = (state) => state.adminTable.memberList;
export const checkSearch = (state) => state.adminTable.isSearch;
export const getSearchState = (state) => state.adminTable.filterMember;
export default adminSlice.reducer