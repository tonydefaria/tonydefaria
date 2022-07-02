// Meta Component

// Built-in Components
import Head from "next/head"

export default function MetaComponent({hankyoProject, meta}) {
  {/* Global attributes */}
  const author = hankyoProject.project.global_attributes.find(({uid}) => uid === "vVJh6fY3hXPpTi1mnhu2g6wG").value
  const twitter_handle = hankyoProject.project.global_attributes.find(({uid}) => uid === "dZabogRgkov9zRRh7oj47r8q").value
  const twitter_card = hankyoProject.project.global_attributes.find(({uid}) => uid === "r5BSc98jYfUZbNLxZPVSesHP").value

  return (
    <Head>
      {/* Languages */}
      <link rel="alternate" hrefLang="x-default" href={meta.url} />
      {/* SEO */}
      <title>{meta.title}</title>
      <meta name="description"          content={meta.description} />
      <meta name="keywords"             content={meta.keywords} />
      <link rel="canonical"             href={meta.url} />
      {/* MISC */}
      <meta name="author"               content={author} />
      {/* Open Graph */}
      <meta property="og:type"          content={hankyoProject.project.type_of} />
      <meta property="og:title"         content={meta.title} />
      <meta property="og:description"   content={meta.description} />
      <meta property="og:image"         content={meta.image} />
      <meta property="og:url"           content={meta.url} />
      {/* Twitter */}
      <meta name="twitter:card"         content={twitter_card} />
      <meta name="twitter:site"         content={twitter_handle} />
      <meta name="twitter:title"        content={meta.title} />
      <meta name="twitter:description"  content={meta.description} />
      <meta name="twitter:image"        content={meta.image} />
      {/* Preloaders */}
      <link rel="dns-prefetch" href="https://use.typekit.net/sjv6gba.css" />
      {/* <link rel="preload" as="image" href={meta.image} /> */}
    </Head>
  )
}
