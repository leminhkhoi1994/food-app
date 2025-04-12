import { call, put, delay, takeEvery } from "redux-saga/effects"

import { getData } from "../services/api"

import { getPageDataRequest, getPageDataSuccess, getPageDataFailure } from "../slices/pageData"

export function* getPageData({ payload }) {
  try {
    const lang = payload || "en"
    const respone = yield call(getData, { url: `/pages?lang=${lang}` })
    if (respone?.data || Array.isArray(respone?.data) || respone?.data.length > 0) {
      yield delay(800)
      yield put(getPageDataSuccess(respone?.data))
    }
  } catch (error) {
    const { message = "Something went wrong!" } = error

    yield put(getPageDataFailure(message))
  }
}

export default function* pageDataSaga() {
  yield takeEvery(getPageDataRequest().type, getPageData)
}
