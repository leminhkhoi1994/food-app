/* eslint-disable camelcase */
const config = window?.config || {
  BASE_URL: "https://dxsvh7md09j46.cloudfront.net/api",
}

export default {
  BASE_URL: config?.BASE_URL,
}
