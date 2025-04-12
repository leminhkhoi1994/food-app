import { combineReducers } from "redux"

import errorReducer, { ROOT_STATE_NAME as ERROR } from "../slices/error"
import pageDataReducer, { ROOT_STATE_NAME as PAGE_DATA } from "../slices/pageData"

export default function createRootReducer() {
  const rootReducer = combineReducers({
    [ERROR]: errorReducer,
    [PAGE_DATA]: pageDataReducer,
  })

  return rootReducer
}
