// App

// Built-in Components
import React, { useEffect, useLayoutEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import smoothscroll from "smoothscroll-polyfill"

// Stylesheets
import "../styles/composer.scss"

export default function MyApp({ Component, pageProps}) {
  // Layout
  const Layout = Component.Layout ? Component.Layout : React.Fragment

  // Effect
  useEffect(() => {
    smoothscroll.polyfill();
    // Prevent from saving images.
    document.addEventListener("contextmenu", function(event) {
      if (event.target.nodeName === "IMG") {
        event.preventDefault()
      }
    }, false)
  }, [])

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  )
}
