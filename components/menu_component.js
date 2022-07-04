// Menu Component

// Built-in components
import React, { useState, useEffect } from "react"
import Link from "next/link"
import OutsideClickHandler from "react-outside-click-handler";

// SVGs
import HamburgerIcon from "../svgs/hamburger"
import CloseIcon from "../svgs/close"

export default function MenuComponent() {
  // Cabin Events
  const trackMenuPortraitsCabin = (event) => {
    window.cabin.event("Menu Portraits")
  }
  const trackMenuContactCabin = (event) => {
    window.cabin.event("Menu Contact")
  }

  // Menu overlay
  const [isOpen, setIsOpen] = useState(false)

  // Delay
  const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  // Toggle Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const body = document.getElementById("body")
    const icon = document.getElementById("brand-icon")
    const brand = document.getElementById("brand-logo")
    if (!isOpen) {
      // Remove
      body.classList.remove("noscroll")
      icon.classList.remove("link-white")
      brand.classList.remove("link-white")
      // Add
      icon.classList.add("link-black")
      brand.classList.add("link-black")
    } else {
      // Remove
      icon.classList.remove("link-black")
      brand.classList.remove("link-black")
      // Add
      body.classList.add("noscroll")
      icon.classList.add("link-white")
      brand.classList.add("link-white")
    }
  }, [isOpen])

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => { delay(1000).then(() => setIsOpen(false)) }}>
        <div className="hamburger">
          <ul className="hamburger-box">
            <li className="hamburger-item">
              <button className={isOpen ? "link link-white" : "link link-black"} onClick={toggleMenu}>
                <span className="icon">
                  {isOpen ? <CloseIcon /> : <HamburgerIcon /> }
                </span>
              </button>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
      <div className={`${isOpen ? "menu fade-in-animation position-fixed" : "menu"} flex-h-center flex-v-center`}>
        <ul className={isOpen ? "menu-box display-block" : "menu-box"}>
          {/*
            <li className="menu-item">
              <Link href="/stories"><a className="link-l link-white text-align-center text-transform-uppercase width-wide">Stories</a></Link>
            </li>
            <li className="menu-item">
              <Link href="/street-and-travel"><a className="link-l link-white text-align-center text-transform-uppercase width-wide">Street & Travel</a></Link>
            </li>
          */}
          <li className="menu-item">
            <Link href="/portraits"><a className="link-m link-white text-align-center text-transform-uppercase width-wide" onClick={() => { toggleMenu(); trackMenuPortraitsCabin();}}>Portraits</a></Link>
          </li>
          <li className="menu-item">
            <Link href="/contact"><a className="link-m link-white text-align-center text-transform-uppercase width-wide" onClick={() => { toggleMenu(); trackMenuContactCabin();}}>Contact</a></Link>
          </li>
        </ul>
      </div>
    </>
  )
}
