// Index

// Layout
import Primary from "../layouts/primary"

// Built-in Components
import Head from "next/head"
import { motion } from "framer-motion"

// Components
import MetaComponent from "../components/meta_component"

export default function Index({hankyoProject, hankyoSection, meta}) {
  const hero = hankyoSection.section.blocks.find(({uid}) => uid === "wqq2dxdWkWsqRwjWAbiCEpbx")

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{opacity: {duration: 1}}}
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
          <div className="hero-row">
            <h1 className="header-size-xxl">{hero.title}</h1>
            <hr className="hero-separator" />
            <p className="font-size-m">{hero.description}</p>
            {/*
              <hr className="hero-separator" />
              <Link href="/portraits">
                <a className="button-s button-white">
                  Go to Portraits
                </a>
              </Link>
            */}
          </div>
        </div>
      </div>

      <style>{`
        .header {
          backdrop-filter: blur(0);
          background-color: rgba(245, 245, 245, 1);
        }
        .primary {
          background-image: url(${hero.image});
          background-position: bottom right;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .gradient {
          background: rgb(0,0,0);
          background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 15%);
        }
        .header {
          background-color: rgba(250, 250, 250, 0);
        }
        .copyright-row p {
          color: white;
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
