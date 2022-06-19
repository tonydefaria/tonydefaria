// Brand Component

// Built-in components
import Link from "next/link"

// SVGs
import BrandLogo from "../svgs/brand_logo";
import BrandIcon from "../svgs/brand_icon";

export default function BrandComponent() {
  // Cabin Events
  const trackBrandMobileCabin = () => {
    window.cabin.event("Brand Mobile")
  }
  const trackBrandDektopCabin = () => {
    window.cabin.event("Brand Desktop")
  }

  return (
    <div className="brand">
      <div className="brand-box">
        <div className="brand-item brand-logo desktop">
          <Link href="/">
            <a className="link link-black" id="brand-logo" onClick={trackBrandDektopCabin}>
              <span className="icon">
                <BrandLogo />
              </span>
            </a>
          </Link>
        </div>
        <div className="brand-item brand-icon mobile">
          <Link href="/">
            <a className="link link-black" id="brand-icon" onClick={trackBrandMobileCabin}>
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
