import _ from "lodash"

export const convertParamsToObject = (queryString) => {
  const arr = queryString.substr(1).split(/&|=/)
  const params = {}

  for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i]
    const value = arr[i + 1]
    params[key] = value
  }

  return params
}

export const convertObjectToParams = (obj) => {
  if (_.isEmpty(obj)) {
    return ""
  }

  const params = []

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        const subKey = Object.keys(item)[0]
        params.push(`${key}=${item[subKey]}`)
      })
    } else if (!["", undefined, "undefined", null, "null"].includes(value)) {
      params.push(`${key}=${value}`)
    }
  }

  return `?${params.join("&")}`
}
