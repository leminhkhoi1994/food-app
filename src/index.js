import React from "react"
import { createRoot } from "react-dom/client"

import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./app"
import "./i18n"

import configureAppStore from "./store/configureAppStore"

import registerServiceWorker from "./registerServiceWorker"
import { RecoilRoot } from "recoil"

const container = document.getElementById("root")
const root = createRoot(container)
const store = configureAppStore()

root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </React.StrictMode>
    </Router>
  </Provider>,
)

registerServiceWorker()
