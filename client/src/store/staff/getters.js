import { Pagination } from "element-ui";

export default {
    staffList: (state, getters, rootState) => {
        return state.staffList
    },
    pagination: (state, getters, rootState) => {
        return state.pagination
    }
}