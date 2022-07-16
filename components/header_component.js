// Header Component

// Built-in components
import React, { useState, useEffect } from "react"
import Headroom from "headroom.js"

// Components
import BrandComponent from "../components/brand_component"
import HamburgerComponent from "../components/hamburger_component"
import MenuComponent from "../components/menu_component"

// Context
export const menuToggleContext = React.createContext()

export default function HeaderComponent() {
  // State
  const [isOpen, setIsOpen] = useState(false)

  // Effect
  useEffect(() => {
    // Headroom.js
    var options = { offset : 32 }
    let element = document.querySelector("header");
    let headroom = new Headroom(element, options);
    headroom.init();

    const scrolls = document.querySelectorAll(".scroll");
    if (!isOpen) {
      for (const scroll of scrolls) {
        scroll.classList.remove("noscroll")
      }
    } else {
      for (const scroll of scrolls) {
        scroll.classList.add("noscroll")
      }
    }
  }, [isOpen, setIsOpen])

  return (
    <menuToggleContext.Provider value={[isOpen, setIsOpen]}>
      <header className="universal header" id="header">
        <div className="universal-box">
          <div className="universal-row">
            <BrandComponent />
            <HamburgerComponent />
            <MenuComponent />
          </div>
        </div>
      </header>
    </menuToggleContext.Provider>
  )
}
