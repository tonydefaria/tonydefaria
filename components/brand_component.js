// Brand Component

// Built-in components
import React, { useContext } from "react"
import Link from "next/link"

// Components
import { menuToggleContext } from "../components/header_component"

// SVGs
import BrandLogo from "../svgs/brand_logo";
import BrandIcon from "../svgs/brand_icon";

export default function BrandComponent() {
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
  const trackBrandMobileCabin = () => { window.cabin.event("Brand Mobile") }
  const trackBrandDesktopCabin = () => { window.cabin.event("Brand Desktop") }

  return (
    <div className="brand">
      <div className="brand-box">
        <div className="brand-item brand-logo desktop">
          <Link href="/">
            <a className="link link-black" id="brand-logo" onClick={() => { toggleMenu(); trackBrandDesktopCabin();}}>
              <span className="icon">
                <BrandLogo />
              </span>
            </a>
          </Link>
        </div>
        <div className="brand-item brand-icon mobile">
          <Link href="/">
            <a className="link link-black" id="brand-icon" onClick={() => { toggleMenu(); trackBrandMobileCabin();}}>
              <span className="icon">
                <BrandIcon />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
