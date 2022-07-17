// Secondary

// Built-in Components
import React, { useState, useEffect, useCallback } from "react"

// Components
import FaviconComponent from "../components/favicon_component"
import HeaderComponent from "../components/header_component"
import FooterComponent from "../components/footer_component"

export default function Secondary({ children }) {
  // Get props
  const project = children.props.hankyoProject.project

  return (
    <div className="primary scroll" id="primary">
      <FaviconComponent project={project} />
      <div className="gradient scroll" id="gradient">
        <HeaderComponent project={project} />
        <main className="universal main" id="main">
          <div className="universal-box">
            <div className="universal-row">
              {children}
            </div>
          </div>
        </main>
        <FooterComponent project={project} />
      </div>
    </div>
  )
}
