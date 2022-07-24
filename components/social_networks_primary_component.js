// Social Networks Primary Component

// Built-in Components
import Image from "next/future/image"

export default function SocialNetworksPrimaryComponent({social_networks}) {
  // Cabin Events
  const trackSocialNetworkCabin = () => { window.cabin.event("Social Network Primary") }

  return (
    <div className="social-networks-primary">
      <ul className="social-networks-primary-box">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="social-networks-primary-item">
            <a href={social_network.url} target="_blank" rel="noreferrer noopener" className="link">
              <span className="icon">
                <Image src={social_network.image} width={128} height={128} quality={100} alt={`Tony de Faria - Social Network - ${social_network.uid}`} title="Tony de Faria" onClick={trackSocialNetworkCabin} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
