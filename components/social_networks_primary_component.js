// Social Networks Primary Component

// Built-in Components
import Image from "next/image"

export default function SocialNetworksPrimaryComponent({social_networks}) {
  return (
    <div className="social-networks-primary">
      <ul className="social-networks-primary-box">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="social-networks-primary-item">
            <a href={social_network.url} target="_blank" rel="noreferrer noopener" className="link">
              <span className="icon">
                <Image src={social_network.image} width={64} height={64} quality={100} alt="Icon" title="Tony de Faria" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
