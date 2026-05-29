"use client"

import { useEffect } from "react"
import Script from "next/script"

export function AOSInitializer() {
  return (
    <Script
      src="https://unpkg.com/aos@2.3.1/dist/aos.js"
      strategy="lazyOnload"
      onReady={() => {
        // @ts-ignore
        if (window.AOS) {
          // @ts-ignore
          window.AOS.init({ duration: 1000, once: true, offset: 100 })
        }
      }}
    />
  )
}
