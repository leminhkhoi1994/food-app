import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import createRootReducer from "./createRootReducer"
import rootSaga from "../sagas"

const sagaMiddleware = createSagaMiddleware()

export default function configureAppStore(preloadedState = {}) {
  const store = configureStore({
    reducer: createRootReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat([sagaMiddleware]),
    preloadedState,
    enhancers: (getDefaultEnhancers) => {
      return getDefaultEnhancers({
        autoBatch: { type: "tick" },
      }).concat([])
    },
  })
  sagaMiddleware.run(rootSaga)

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./createRootReducer", () => store.replaceReducer(createRootReducer()))
  }

  return store
}
