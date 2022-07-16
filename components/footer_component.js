// Footer Component

// Built-in components
import React from "react"

// Components
import SocialNetworksPrimaryComponent from "../components/social_networks_primary_component"
import SitemapComponent from "../components/sitemap_component"
import CopyrightComponent from "../components/copyright_component"

// Context
export const menuToggleContext = React.createContext()

export default function FooterComponent({project}) {
  // Props
  const social_networks = project.social_networks

  return (
    <footer className="universal footer">
      <div className="width-wide float-left flex-h-center">
        <SocialNetworksPrimaryComponent social_networks={social_networks} />
      </div>
      <div className="width-wide float-left">
        <SitemapComponent />
        <CopyrightComponent />
      </div>
    </footer>
  )
}
