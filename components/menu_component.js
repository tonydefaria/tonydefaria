// Menu Component

// Built-in components
import React, { useEffect, useContext } from "react"
import Link from "next/link"

// Components
import { menuToggleContext } from "../components/header_component"
import SocialNetworksTertiaryComponent from "../components/social_networks_tertiary_component"

export default function MenuComponent({project}) {
  // Props
  const social_networks = project.social_networks

  // Context
  const [isOpen, setIsOpen] = useContext(menuToggleContext)

  // Toggle Menu
  const toggleMenu = () => {
    setTimeout(function() {
      setIsOpen(false)
    }, 250)
    window.scrollTo({top: 0, left: 0, right: 0})
  }

  // Cabin Events
  const trackMenuPortraitsCabin = () => { window.cabin.event("Menu Portraits") }
  const trackMenuContactCabin = () => { window.cabin.event("Menu Contact") }

  return (
    <div className={`menu flex-v-center ${isOpen ? "open" : "closed"}`} id="menu">
      <ul className="menu-box">
        <li className="menu-item" data-aos="fade-up">
          <Link href="/portraits"><a className="link link-black" onClick={() => { toggleMenu(); trackMenuPortraitsCabin();}}>Portraits</a></Link>
        </li>
        <li className="menu-item">
          <Link href="/contact"><a className="link link-black" onClick={() => { toggleMenu(); trackMenuContactCabin();}}>Contact</a></Link>
        </li>
        <li className="menu-item">
          <SocialNetworksTertiaryComponent social_networks={social_networks} />
        </li>
      </ul>
    </div>
  )
}
