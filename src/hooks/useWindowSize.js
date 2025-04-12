"use client"

import { useLayoutEffect, useState } from "react"

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])

  useLayoutEffect(() => {
    // Handler to call on window resize
    const updateSize = () => {
      // Set window width/height to state
      setSize([window.innerWidth, window.innerHeight])
    }
    // Add event listener
    window.addEventListener("resize", updateSize)
    // Call handler right away so state gets updated with initial window size
    updateSize()

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return size
}

export default useWindowSize
