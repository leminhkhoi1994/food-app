/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, Suspense } from "react"
import PropTypes from "prop-types"
import { Switch } from "react-router-dom"

import PrivateRoute from "../PrivateRoute"
import PublicRoute from "../PublicRoute"

const RouteComp = ({ routes }) => (
  <Suspense fallback={<></>}>
    <Switch>
      {routes.map((route) => {
        if (route?.requiredAuthen) {
          return <PrivateRoute key={route?.path} isAuthenticated={false} {...route} />
        }

        return <PublicRoute key={route?.path} {...route} />
      })}
    </Switch>
  </Suspense>
)

RouteComp.propTypes = {
  routes: PropTypes.array,
}

export default memo(RouteComp)
