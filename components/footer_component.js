// Footer Component

// Built-in components
import React from "react"

// Components
import SocialNetworksPrimaryComponent from "../components/social_networks_primary_component"
import CopyrightComponent from "../components/copyright_component"

// Context
export const menuToggleContext = React.createContext()

export default function HeaderComponent({project}) {
  // Props
  const social_networks = project.social_networks

  return (
    <footer className="universal footer">
      <div className="universal-box">
        <div className="universal-row flex-h-center">
          <SocialNetworksPrimaryComponent social_networks={social_networks} />
        </div>
        <div className="universal-row flex-h-center">
          <CopyrightComponent />
        </div>
      </div>
    </footer>
  )
}
