// Disclaimer

// Built-in Components
import React, { useContext, useState, useEffect } from "react"

// Components
import MetaComponent from "../components/meta_component"

// Block Components
import TextBlockComponent from "../components/blocks/text_block_component"
import ImageBlockComponent from "../components/blocks/image_block_component"

// Layout
import Layout from "../layouts/primary"

export default function Disclaimer({projectData, sectionData}) {
  // Props
  const project = projectData.project
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({uid}) => uid === "Xn6JKBRCG9UuW8WV5XedFtv6")

  const blocks = sectionData.section.blocks
  const filterBlocks = blocks.filter(({type_of}) => type_of !== ("hero" || "gallery"))

  // Effect
  useEffect(() => {
  }, [])

  return (
    <div className="page">
      {/* Meta */}
      <MetaComponent project={project} meta={meta} />

      {/* Hero */}
      <div className="hero">
        <div className="hero-box">
          <div className="hero-column">
            <h1>{hero.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content writer">
        <div className="content-box">
          {/* Blocks */}
          {filterBlocks.map((block, index) => {
            let setBlock
            if (block.type_of === "text") {
              setBlock = <TextBlockComponent block={block} />
            } else if (block.type_of === "image") {
              setBlock = <ImageBlockComponent block={block} />
            }
            return (
              <div key={block.uid} className="content-row writer-box">
                <div className="float-right">
                  {setBlock}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Endpoint
  const url = "https://hankyo-api-pro.herokuapp.com"

  // Project
  const projectToken = "ZjiAAoU4XpdbuFqLqGTZPR1VmfucM7ya62TV2Dej3DUGMsAG"
  const projectReq = await fetch(`${url}/mies/project?project_token=${projectToken}`)
  const projectData = await projectReq.json()

  // Section
  const sectionUID = "M6Gb8e2661hihv9CaWyKDGv5"
  const sectionReq = await fetch(`${url}/mies/project/sections/${sectionUID}?project_token=${projectToken}`)
  const sectionData = await sectionReq.json()

  if (!projectData) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      projectData,
      sectionData
    }
  }
}

Disclaimer.Layout = Layout