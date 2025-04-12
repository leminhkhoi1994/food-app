"use client"

/* eslint-disable consistent-return */
import { useCallback, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

import { STATUS_CODE } from "constants/statusCodes"
import { WHITE_LIST_API } from "constants/whiteListAPI"
import { METHOD } from "constants/apis"

import { setError } from "slices/error"

const useAxiosInterceptor = (instance) => {
  const history = useHistory()

  const dispatch = useDispatch()

  const onSetError = useCallback((error) => {
    dispatch(setError(error))
    // history.push("/error-page")
  }, [])

  // Add a request interceptor
  const reqInterceptor = instance.interceptors.request.use(
    // Do something before request is sent
    (config) => config,
    // Do something with request error
    (error) => Promise.reject(error),
  )
  // Add a response interceptor
  const resInterceptor = instance.interceptors.response.use(
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    (response) => response,
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log('err.response.data', err.response.data);
      // console.log('err.response.status', err.response.status);
      // console.log('err.response.headers', err.response.headers);

      // Cancel request
      if (axios.isCancel(error)) {
        return
      }

      const { status = 500, config = {}, data = {} } = error?.response || {}
      switch (status) {
        case STATUS_CODE.UNAUTHORIZED:
          // TODO: Redirect to login
          break
        case STATUS_CODE.NOT_FOUND: {
          let NOT_FOUND_PATH = "/not-found"

          if (data?.Data?.[0]?.Message) {
            NOT_FOUND_PATH = `${NOT_FOUND_PATH}?messageError=${data.Data[0].Message}`
          }

          history.push(NOT_FOUND_PATH)
          break
        }
        case STATUS_CODE.BAD_REQUEST:
        case STATUS_CODE.METHOD_NOT_ALLOWED:
          config.method === METHOD.GET && onSetError(error)
          break
        case STATUS_CODE.FORBIDDEN:
        case STATUS_CODE.SERVER_ERROR:
        default: {
          const url = error?.config?.url || ""
          let whiteListIndex = WHITE_LIST_API.length - 1

          for (; whiteListIndex >= 0; whiteListIndex--) {
            if (url.includes(WHITE_LIST_API[whiteListIndex])) {
              break
            }
          }

          const inValidWhiteList = whiteListIndex === -1
          inValidWhiteList && onSetError(error)

          break
        }
      }

      return Promise.reject(error)
    },
  )

  useEffect(
    () => () => {
      instance.interceptors.request.eject(reqInterceptor)
      instance.interceptors.response.eject(resInterceptor)
    },
    [reqInterceptor, resInterceptor],
  )
}

export default useAxiosInterceptor
