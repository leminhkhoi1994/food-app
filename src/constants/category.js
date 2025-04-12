export const TYPE = 1
export const STATUS = 2
export const PUBLIC = 1
export const CONFIDENTIAL = 2

export const CATEGORY_STATUS = {
  [CONFIDENTIAL]: {
    value: CONFIDENTIAL,
    label: "Confidential",
    style: {
      background: "#FFFAEF",
      color: "#FC930D",
    },
  },
  [PUBLIC]: {
    value: PUBLIC,
    label: "Public",
    style: {
      background: "#EEEEF4",
      color: "#9F9EAE",
    },
  },
}
