import devSettings from "./dev"
import stagSettings from "./stag"
import prodSettings from "./prod"

let settings = {}
switch (process.env.NODE_ENV) {
  case "production":
    settings = prodSettings
    break
  case "staging":
    settings = stagSettings
    break
  default:
    settings = devSettings
    break
}

export default settings
