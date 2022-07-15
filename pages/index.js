// Index

// Layout
import Primary from "../layouts/primary"

// Built-in Components
import Head from "next/head"
import Image from "next/future/image"
import { motion } from "framer-motion"

// Components
import MetaComponent from "../components/meta_component"

export default function Index({hankyoProject, hankyoSection, meta}) {
  // Props
  const hero = hankyoSection.section.blocks.find(({uid}) => uid === "wqq2dxdWkWsqRwjWAbiCEpbx")

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{opacity: {duration: .25}}}
      className="page"
    >
      {/* Meta */}
      <MetaComponent hankyoProject={hankyoProject} meta={meta} />
      <Head>
        <link rel="preload" as="image" href={hero.image} />
      </Head>

      {/* Hero */}
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row width-wide">
            <figure>
              <Image src={hero.image} width={hero.width} height={hero.height} quality={60} alt="Tony de Faria - Home - Hero Image" title="Tony de Faria" className="hero-image" />
            </figure>
          </div>
          <hr className="hero-separator sm" />
          <div className="hero-row width-wide">
            <h1 className="header-size-xxl">{hero.title}</h1>
            <hr className="hero-separator" />
            <div className="hero-writer" dangerouslySetInnerHTML={{ __html: hero.description_simple_format }} />
          </div>
        </div>
      </div>
      <style>{`
        .main {
          padding-top: 56px;
        }
      `}
      </style>
    </motion.div>
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
