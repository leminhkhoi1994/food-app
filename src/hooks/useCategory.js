"use client"

import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  categoriesByPropSelector,
  newCategorySelector,
  updatePinnedCategoriesSelector,
  addPinCategory,
  deletePinCategory,
  deletedUnpinCategorySelector,
  deleteUnpinCategoryRequest,
  getCategoriesRequest,
  addOrUpdateCategoryRequest,
  updatePinnedCategoriesRequest,
} from "../slices/category"

const useCategory = (prop) => {
  const categories = useSelector(categoriesByPropSelector(prop))
  const newCategory = useSelector(newCategorySelector)
  const updatePinnedCategories = useSelector(updatePinnedCategoriesSelector)
  const deletedUnpinCategory = useSelector(deletedUnpinCategorySelector)

  const dispatch = useDispatch()

  const onGetCategoriesByProp = useCallback((params) => {
    dispatch(
      getCategoriesRequest({
        ...params,
        prop,
      }),
    )
  }, [])

  const onAddPinCategoryByProp = useCallback((data) => {
    dispatch(
      addPinCategory({
        data,
        prop,
      }),
    )
  }, [])

  const onDeletePinCategoryByProp = useCallback((data) => {
    dispatch(
      deletePinCategory({
        data,
        prop,
      }),
    )
  }, [])

  const onDeleteUnpinCategoryByProp = useCallback((category) => {
    dispatch(deleteUnpinCategoryRequest({ data: category }))
  }, [])

  const onAddOrUpdateCategory = useCallback((params) => {
    dispatch(addOrUpdateCategoryRequest(params))
  }, [])

  const onUpdatePinnedCategories = useCallback((params) => {
    dispatch(updatePinnedCategoriesRequest(params))
  }, [])

  return {
    categories,
    newCategory,
    updatePinnedCategories,
    deletedUnpinCategory,
    onGetCategoriesByProp,
    onAddPinCategoryByProp,
    onDeletePinCategoryByProp,
    onDeleteUnpinCategoryByProp,
    onAddOrUpdateCategory,
    onUpdatePinnedCategories,
  }
}

export default useCategory
