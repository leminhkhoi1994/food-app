import { combineReducers } from "redux"

import errorReducer, { ROOT_STATE_NAME as ERROR } from "../slices/error"

export default function createRootReducer() {
  const rootReducer = combineReducers({
    [ERROR]: errorReducer,
  })

  return rootReducer
}
