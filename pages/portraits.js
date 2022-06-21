// Portraits

// Layout
import Primary from "../layouts/primary"

// Built-in Components
import Image from "next/image"
import { motion } from "framer-motion"

// Components
import MetaComponent from "../components/meta_component"

export default function Portraits({hankyoProject, hankyoSection, meta}) {
  const hero = hankyoSection.section.blocks.find(({uid}) => uid === "sHhk1Za3CSKpThi2X8eYDo1z")
  const images = hankyoSection.section.blocks.filter(image => image.type_of === "image")

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{opacity: {duration: 0.25}}}
      className="page"
    >
      {/* Meta */}
      <MetaComponent hankyoProject={hankyoProject} meta={meta} />

      {/* Hero */}
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="header-size-xxl">{hero.title}</h1>
            <hr className="hero-separator" />
            <p className="font-size-m">{hero.description}</p>
          </div>
        </div>
      </div>

      <div className="separator-xl"></div>

      {/* Gallery */}
      <div className="gallery">
        <div className="gallery-box">
          {images.map((image) => (
            <div key={image.uid} className="gallery-item flex-h-center">
              <figure>
                <div className="figwrapper flex-h-center">
                  <Image src={image.image} width={image.width} height={image.height} quality={75} alt="Tony de Faria - Portraits - Gallery Image" title="Tony de Faria" />
                </div>
                <figcaption>
                  {image.caption}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
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
  const sectionUID = "ETawPaEzkHn3LqmnoZNkH7JE"
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

Portraits.Layout = Primary
