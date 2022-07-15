// Portraits

// Layout
import Primary from "../layouts/primary"

// Built-in Components
import Image from "next/future/image"
import { motion } from "framer-motion"

// Components
import MetaComponent from "../components/meta_component"

export default function Portraits({hankyoProject, hankyoSection, meta}) {
  // Props
  const hero = hankyoSection.section.blocks.find(({uid}) => uid === "sHhk1Za3CSKpThi2X8eYDo1z")
  const images = hankyoSection.section.blocks.filter(image => image.type_of === "image")

  return (
    <div className="page">
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

              {/* Image Alignment */}
              {/* <div className="float-left flex-h-center width-wide"></div> */}

              <figure>
                <Image src={image.image} width={image.width} height={image.height} quality={60} alt="Tony de Faria - Portraits - Gallery Image" title="Tony de Faria" />
                <figcaption>
                  {image.caption}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
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
