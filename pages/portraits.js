// Layout
import Layout from "../layouts/primary"

// Built-in Components
import Image from "next/future/image"

export default function Portraits({sectionData}) {
  // Props
  const images = sectionData.section.blocks.filter(image => image.type_of === "image")

  return (
    <Layout>
      {images.map((image, index) => {

        let setPriority
        if (index <= 2) {
          setPriority = true
        } else {
          setPriority = false
        }

        return (
          <div key={image.uid}>
            <div>
              <figure>
                <picture>
                  <Image
                    src={image.image}
                    width={image.width}
                    height={image.height}
                    quality={75}
                    priority={setPriority}
                    sizes="(max-width: 959px) 75vw, (min-width: 960px) 50vw, 100vw"
                    alt={`Tony de Faria - Portrait - ${image.uid}`}
                    title="Tony de Faria"
                  />
                </picture>
                <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
              </figure>
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export async function getStaticProps() {
  // Hankyo Endpoint
  const url = "https://hankyo-api-pro.herokuapp.com"
  const token = "?hankyo_token=ZjiAAoU4XpdbuFqLqGTZPR1VmfucM7ya62TV2Dej3DUGMsAG"

  // Project
  const projectReq = await fetch(`${url}/mies/project${token}`)
  const projectData = await projectReq.json()

  // Section
  const sectionUID = "ETawPaEzkHn3LqmnoZNkH7JE"
  const sectionReq = await fetch(`${url}/mies/project/sections/${sectionUID}${token}`)
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
