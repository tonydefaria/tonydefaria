// Index

// Layout
import Primary from "../layouts/primary"

// Built-in Components
import React, { useEffect } from "react"
import Head from "next/head"
import Image from "next/future/image"
// import { motion } from "framer-motion"

// Components
import MetaComponent from "../components/meta_component"

export default function Index({hankyoProject, hankyoSection, meta}) {
  // Props
  const hero = hankyoSection.section.blocks.find(({uid}) => uid === "wqq2dxdWkWsqRwjWAbiCEpbx")

  // Effect
  // useEffect(() => {
    // const documentHeight = () => {
    //   const doc = document.documentElement
    //   doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
    // }
    // window.addEventListener("resize", documentHeight)
    // documentHeight()
  // }, [])

  return (
    <div className="page">
      {/* Meta */}
      <MetaComponent hankyoProject={hankyoProject} meta={meta} />
      <Head>
        <link rel="preload" as="image" href={hero.image} />
        <link rel="preload" as="image" href={hero.mobile} />
      </Head>

      {/* Hero */}
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row width-wide">
            <figure className="desktop">
              <Image src={hero.image} width={hero.width} height={hero.height} quality={60} alt="Tony de Faria - Home - Animation" title="Tony de Faria" priority="true" className="cover-image float-left desktop" />
            </figure>
            <figure className="mobile">
              <Image src={hero.mobile} width={hero.mobile_width} height={hero.mobile_height} quality={60} alt="Tony de Faria - Home - Animation" title="Tony de Faria" priority="true" className="cover-image float-left mobile" />
            </figure>
          </div>
          <hr className="hero-separator s" />
          <div className="hero-row width-wide">
            <h1 className="header-size-display">{hero.title}</h1>
            <hr className="hero-separator l" />
            <div className="font-size-display" id="findme" dangerouslySetInnerHTML={{ __html: hero.description_simple_format }} />
          </div>
        </div>
      </div>

      <style>{`
        .main {
          padding-top: 72px;
        }
          @media (max-width: 719px) {
            .main {
              padding-top: 64px;
            }
          }
        `}
      </style>
    </div>
  )
}

export async function getStaticProps() {
  // Hankyo
  const url = "https://hankyo-api-pro.herokuapp.com"
  const token = "?hankyo_token=ZjiAAoU4XpdbuFqLqGTZPR1VmfucM7ya62TV2Dej3DUGMsAG"
  // Project
  const resProject = await fetch(`${url}/mies/project${token}`)
  const hankyoProject = await resProject.json()
  // Section
  const sectionUID = "4MDntMTiDVcR9P8vUtvr2eKz"
  const resSection = await fetch(`${url}/mies/project/sections/${sectionUID}${token}`)
  const hankyoSection = await resSection.json()
  // Meta
  const meta = hankyoSection.section.meta_tag

  if (!hankyoProject) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      meta,
      hankyoProject,
      hankyoSection
    }
  }
}

Index.Layout = Primary
