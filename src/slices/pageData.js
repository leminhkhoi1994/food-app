import { createSlice } from "@reduxjs/toolkit"
import { createSelector } from "reselect"

export const ROOT_STATE_NAME = "page-data"
const initialState = { pageData: {}, status: "loading", error: null }

const pageDataSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    getPageDataRequest(state) {
      state.status = "loading"
    },
    getPageDataSuccess(state, action) {
      state.pageData = action.payload[0]
      state.status = "succeeded"
    },
    getPageDataFailure(state, action) {
      state.status = "failed"
      state.pageData = {}
      state.error = action.payload
    },
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = pageDataSlice
// Export the reducer, either as a default or named export
export default reducer
// Extract and export each action creator by name
export const { getPageDataRequest, getPageDataSuccess, getPageDataFailure } = actions
// Create and export each selector create by name
export const rootSelector = (state) => state[ROOT_STATE_NAME] || {}
export const pageDataSelector = createSelector(rootSelector, ({ pageData }) => pageData)
