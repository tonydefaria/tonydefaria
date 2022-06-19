// Meta Component

// Built-in Components
// import { useRouter } from "next/router"
import Script from "next/script"

export default function ScriptsComponent() {
  return (
    <>
      {/* Analytics */}
      {/* onLoad={(e) => { console.error("Loaded", e)}} */}
      <Script src="https://cabin.tonydefaria.com/hello.js" strategy="beforeInteractive" />
    </>
  )
}
