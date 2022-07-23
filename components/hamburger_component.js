// Hamburger Component

// Built-in components
import React, { useEffect, useContext } from "react"
import Link from "next/link"

// Components
import { menuToggleContext } from "../components/header_component"

// SVGs
import CloseIcon from "../svgs/close"
import HamburgerIcon from "../svgs/hamburger"

export default function MenuComponent() {
  // Context
  const [isOpen, setIsOpen] = useContext(menuToggleContext)

  // Toggle Menu
  const toggleMenu = (event) => {
    event.preventDefault()
    setIsOpen(!isOpen)
    window.scrollTo({top: 0, left: 0, right: 0})
  }

  return (
    <div className="hamburger">
      <ul className="hamburger-box">
        <li className="hamburger-item">
          <Link href="/">
            <a className="link link-black-red" onClick={toggleMenu}>
              <span className="icon">
                {isOpen ? <CloseIcon /> : <HamburgerIcon /> }
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
