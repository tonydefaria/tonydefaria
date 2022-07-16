// Copyright Component

// Built-in Components
import React, { useEffect } from "react"

export default function Copyright() {
  // Effect
  useEffect(() => {
    var date = new Date()
    var fullYear = date.getFullYear()
    document.getElementsByClassName("year")[0].innerHTML = fullYear
  }, [])

  return (
    <div className="copyright flex-h-center">
      <div className="copyright-box">
        <div className="copyright-row">
          <p className="font-size-xxs">&copy; 1980-<span className="year"></span> Tony de Faria.</p>
        </div>
      </div>
    </div>
  )
}
