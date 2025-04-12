"use client"

import { memo, useState } from "react"

import { gettingNameInitials } from "../../../services/format/string"

import "./style.scss"

const BASE64_URL = "data:image/jpeg;base64,"
const HAS_SOURCE = true
// const HAS_NO_SOURCE = false;
const AVATARS_STORAGE_KEY = "AVATARS"
const SHAPE_CLASSNAME = {
  circle: "spdm-avatar--circle",
  square: "spdm-avatar--square",
}
const SIZE_CLASSNAME = {
  default: "spdm-avatar--default",
  large: "spdm-avatar--lg",
  sm: "spdm-avatar--sm",
}

const Avatar = ({ children, icon, shape, size, className, src, url, name, style }) => {
  const [imageData, setImageData] = useState("")

  const styleClasses = ["spdm-avatar", SHAPE_CLASSNAME["circle"], SIZE_CLASSNAME["default"], className]

  let avatarDisplay = (
    <span className="spdm-avatar--string" style={{ transform: "scale(1) translateX(-50%)" }}>
      {children}
    </span>
  )

  if (icon) {
    avatarDisplay = (
      <span>
        <img alt="Avatar Icon" src={icon} />
      </span>
    )
    styleClasses.push("spdm-avatar--icon")
  } else if (imageData) {
    avatarDisplay = <img alt={name} src={imageData} />
    styleClasses.push("spdm-avatar--image")
  } else if (name) {
    avatarDisplay = <span>{gettingNameInitials(name)}</span>
    styleClasses.push("spdm-avatar--string")
  }

  return (
    <span className={styleClasses.join(" ")} style={style}>
      {avatarDisplay}
    </span>
  )
}

export default memo(Avatar)
