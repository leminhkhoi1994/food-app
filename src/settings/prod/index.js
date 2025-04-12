/* eslint-disable camelcase */
const config = window?.config || {
  BASE_URL: "https://api.test.soa-dev.net/api/v1",
}

export default {
  BASE_URL: config?.BASE_URL,
}
