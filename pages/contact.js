// Contact

// Layout
import Secondary from "../layouts/secondary"

// Built-in Components
// import { motion } from "framer-motion"

// Components
import MetaComponent from "../components/meta_component"
import SocialNetworksSecondaryComponent from "../components/social_networks_secondary_component"

export default function Contact({hankyoProject, hankyoSection, meta}) {
  // Props
  const hero = hankyoSection.section.blocks.find(({uid}) => uid === "97jSqZqqUvzZmFeZH3rPXSa3")
  const global_email = hankyoProject.project.global_attributes.find(({name}) => name === "email")
  const social_networks = hankyoProject.project.social_networks

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
            <p className="font-size-l">{hero.description}</p>
            <hr className="hero-separator" />
            <p className="font-size-xs">My email:</p>
            <p className="font-size-m font-weight-900">{global_email.value}</p>
            <hr className="hero-separator sm" />
            <p className="font-size-xs">Follow me on:</p>
            <SocialNetworksSecondaryComponent social_networks={social_networks} />
          </div>
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
  const sectionUID = "9tbaxmgFMVHCNBQv1FNyxbph"
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

Contact.Layout = Secondary
