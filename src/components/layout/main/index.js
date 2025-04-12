import React, { memo } from "react"
import appRoutes from "../../../routes"
import RouteComp from "../../router/Routes"

import "./styles.scss"

const Main = ({}) => {
  return (
    <>
      <main className="spdm-main">
        <RouteComp routes={appRoutes} />
      </main>
    </>
  )
}

Main.propTypes = {}

export default memo(Main)
