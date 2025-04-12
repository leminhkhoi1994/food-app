import { lazy } from "react"

const appRoutes = [
  {
    path: "/",
    component: lazy(() => import("pages/LandingPage")),
    exact: true,
    requiredAuthen: false,
  },
  {
    path: "/error-page",
    component: lazy(() => import("pages/ErrorPage")),
    requiredAuthen: false,
    exact: false,
  },
  {
    path: "*",
    component: lazy(() => import("pages/NotFoundPage")),
    requiredAuthen: false,
    exact: false,
  },
]

export default appRoutes
