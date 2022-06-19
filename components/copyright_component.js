// Copyright Component

// Built-in Components
import React, { useEffect } from "react"

export default function Copyright() {

  useEffect(() => {
    var date = new Date()
    var fullYear = date.getFullYear()
    document.getElementsByClassName("year")[0].innerHTML = fullYear
  }, []);

  return (
    <div className="copyright">
      <div className="copyright-box">
        <div className="copyright-row">
          <p className="font-size-xxs">Copyright &copy; <span className="year"></span> Tony de Faria.</p>
        </div>
      </div>
    </div>
  )
}
