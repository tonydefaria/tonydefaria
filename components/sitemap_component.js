// Sitemap Component

// Built-in Components
import Link from "next/link"

export default function Sitemap() {
  return (
    <div className="sitemap flex-h-center">
      <ul className="sitemap-box">
        <li className="sitemap-item">
          <Link href="/"><a className="link-xs link-black-red" data-cabin-event="Sitemap Home">Home</a></Link>
        </li>
        <li className="sitemap-item">
          <Link href="/portraits"><a className="link-xs link-black-red" data-cabin-event="Sitemap Portraits">Portraits</a></Link>
        </li>
        <li className="sitemap-item">
          <Link href="/contact"><a className="link-xs link-black-red" data-cabin-event="Sitemap Contact">Contact</a></Link>
        </li>
      </ul>
    </div>
  )
}
