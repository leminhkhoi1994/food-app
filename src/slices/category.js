import { createSlice } from "@reduxjs/toolkit"
import { createSelector } from "reselect"
import {
  CATEGORIES,
  PINNED_CATEGORIES,
  PINNED_CATEGORIES_ON_LANDING,
  CATEGORIES_ON_REPORT_LISTING,
} from "../constants/props"

export const ROOT_STATE_NAME = "category"
const initialState = {
  [CATEGORIES]: {
    status: "idle",
    data: {},
    error: null,
  },
  [CATEGORIES_ON_REPORT_LISTING]: {
    status: "idle",
    data: {},
    error: null,
  },
  [PINNED_CATEGORIES]: {
    status: "idle",
    data: {},
    error: null,
  },
  [PINNED_CATEGORIES_ON_LANDING]: {
    status: "idle",
    data: {},
    error: null,
  },
  newCategory: {
    status: "idle",
    data: null,
    error: null,
  },
  updatePinnedCategories: {
    status: "idle",
    data: null,
    error: null,
  },
  suggestKeyword: {
    status: "idle",
    data: [],
    error: null,
  },
  deletedUnpinCategory: {
    status: "idle",
    data: null,
    error: null,
  },
}

const categorySlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    getCategoriesRequest(state, action) {
      if (action.payload.isLoadMore && action.payload.query.pageIndex === 0) {
        state[action.payload.prop].data = { items: [] }
      }

      state[action.payload.prop].status = "loading"
    },
    getCategoriesSuccess(state, action) {
      if (action.payload.isLoadMore) {
        state[action.payload.prop].data = {
          ...action.payload.data,
          items:
            action.payload.query.pageIndex > 0
              ? [...state[action.payload.prop].data.items].concat(action.payload.data.items)
              : action.payload.data.items,
        }
      } else {
        state[action.payload.prop].data = action.payload.data
      }

      state[action.payload.prop].status = "succeeded"
      state[action.payload.prop].error = null
    },
    getCategoriesFailure(state, action) {
      state[action.payload.prop].error = action.payload.error
      state[action.payload.prop].status = "failed"
    },
    addPinCategory(state, action) {
      state[action.payload.prop].data.items.unshift(action.payload.data)
    },
    deletePinCategory(state, action) {
      state[action.payload.prop].data.items = state[action.payload.prop].data.items.filter((item) => {
        if (item?.id === action.payload.data?.id) {
          return false
        }

        return true
      })
    },
    deleteUnpinCategoryRequest(state) {
      state.deletedUnpinCategory.status = "loading"
    },
    deleteUnpinCategorySuccess(state) {
      state.deletedUnpinCategory.status = "succeeded"
      state.deletedUnpinCategory.error = null
    },
    deleteUnpinCategoryFailure(state, action) {
      state.deletedUnpinCategory.data = []
      state.deletedUnpinCategory.status = "failed"
      state.deletedUnpinCategory.error = action.payload.error
    },
    addOrUpdateCategoryRequest(state) {
      state.newCategory.status = "loading"
    },
    addOrUpdateCategorySuccess(state) {
      state.newCategory.status = "succeeded"
      state.newCategory.error = null
    },
    addOrUpdateCategoryFailure(state, action) {
      state.newCategory.status = "failed"
      state.newCategory.error = action.payload.error
    },
    updatePinnedCategoriesRequest(state) {
      state.updatePinnedCategories.status = "loading"
    },
    updatePinnedCategoriesSuccess(state) {
      state.updatePinnedCategories.status = "succeeded"
      state.updatePinnedCategories.error = null
    },
    updatePinnedCategoriesFailure(state, action) {
      state.updatePinnedCategories.status = "failed"
      state.updatePinnedCategories.error = action.payload.error
    },
    getSuggestKeywordRequest(state) {
      state.suggestKeyword.status = "loading"
    },
    getSuggestKeywordSuccess(state, action) {
      state.suggestKeyword.status = "succeeded"
      state.suggestKeyword.data = action.payload
      state.suggestKeyword.error = null
    },
    getSuggestKeywordFailure(state, action) {
      state.suggestKeyword.status = "failed"
      state.suggestKeyword.error = action.payload.error
    },
  },
})

export const {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesFailure,
  addPinCategory,
  deletePinCategory,
  deleteUnpinCategoryRequest,
  deleteUnpinCategorySuccess,
  deleteUnpinCategoryFailure,
  addOrUpdateCategoryRequest,
  addOrUpdateCategorySuccess,
  addOrUpdateCategoryFailure,
  updatePinnedCategoriesRequest,
  updatePinnedCategoriesSuccess,
  updatePinnedCategoriesFailure,
  getSuggestKeywordRequest,
  getSuggestKeywordSuccess,
  getSuggestKeywordFailure,
} = categorySlice.actions
export default categorySlice.reducer

export const rootSelector = (state) => state[ROOT_STATE_NAME] || {}
export const categoriesByPropSelector = (prop) => createSelector(rootSelector, (state) => state[prop])
export const newCategorySelector = createSelector(rootSelector, (state) => state.newCategory)
export const updatePinnedCategoriesSelector = createSelector(rootSelector, (state) => state.updatePinnedCategories)
export const suggestKeywordSelector = createSelector(rootSelector, (state) => state.suggestKeyword)
export const deletedUnpinCategorySelector = createSelector(rootSelector, (state) => state.deletedUnpinCategory)
