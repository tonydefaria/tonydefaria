// Social Networks Tertiary Component

// Built-in Components
import Image from "next/future/image"

export default function SocialNetworksTertiaryComponent({social_networks}) {
  // Cabin Events
  const trackSocialNetworkCabin = () => { window.cabin.event("Social Network Tertiary") }

  return (
    <div className="social-networks-tertiary">
      <ul className="social-networks-tertiary-box">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="social-networks-tertiary-item">
            <a href={social_network.url} target="_blank" rel="noreferrer noopener" className="link">
              <span className="icon">
                <Image src={social_network.image} width={128} height={128} quality={100} alt="Social Network Icon" title="Tony de Faria" onClick={trackSocialNetworkCabin} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
