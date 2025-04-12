import React, { useCallback, useMemo, useState, memo } from "react"

import axios from "services/api"
import useAxiosInterceptor from "hooks/useAxiosInterceptor"
import ToastContext from "context/ToastContext"
import Main from "components/layout/main"

import "./global-styles.scss"

const App = () => {
  const [toast, setToast] = useState({
    show: false,
    title: "Welcome Back ^^",
    description: "It's good to see you.",
  })

  const onShowToast = useCallback(({ title, description }) => {
    setToast({
      show: true,
      title,
      description,
    })
  }, [])

  const onHideToast = useCallback(() => {
    setToast({
      show: false,
      title: "",
      description: "",
    })
  }, [])

  const toastValue = useMemo(
    () => ({
      toast,
      onShowToast,
      onHideToast,
    }),
    [toast, onShowToast, onHideToast],
  )

  useAxiosInterceptor(axios)

  return (
    <ToastContext.Provider value={toastValue}>
      <Main />
    </ToastContext.Provider>
  )
}

export default memo(App)
