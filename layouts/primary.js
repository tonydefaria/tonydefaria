// Primary

// Built-in Components
import React, { useState, useEffect, useCallback } from "react"

// Components
import FaviconComponent from "../components/favicon_component"
import BrandComponent from "../components/brand_component"
import MenuComponent from "../components/menu_component"
import SocialNetworksPrimaryComponent from "../components/social_networks_primary_component"
import CopyrightComponent from "../components/copyright_component"

export default function Primary({ children }) {
  // Get props
  const project = children.props.hankyoProject.project
  const social_networks = project.social_networks

  // Hooks
  useEffect(() => {
    console.log("NextJS Loaded")
  }, [])

  return (
    <div className="primary" id="primary">
      <FaviconComponent project={project} />
      <div className="gradient" id="gradient">
        <header className="universal header">
          <div className="universal-box">
            <div className="universal-row">
              <BrandComponent />
              <MenuComponent />
            </div>
          </div>
        </header>
        <main className="universal main" id="main">
          <div className="universal-box">
            <div className="universal-row">
              {children}
            </div>
          </div>
        </main>
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
      </div>

      {/* Frame */}
      {/*
        <div className="frame frame-top" />
        <div className="frame frame-bottom" />
        <div className="frame frame-left" />
        <div className="frame frame-right" />
      */}
    </div>
  )
}
