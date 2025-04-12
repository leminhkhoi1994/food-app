import { all } from "redux-saga/effects"

import categorySaga from "./categorySaga"
import pageDataSaga from "./pageData"

export default function* rootSaga() {
  yield all([categorySaga(), pageDataSaga()])
}
