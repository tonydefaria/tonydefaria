// Social Networks Secondary Component

export default function SocialNetworksSecondaryComponent({social_networks}) {
  return (
    <div className="social-networks-secondary">
      <ul className="social-networks-secondary-box">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="social-networks-secondary-item">
            <a href={social_network.url} target="_blank" rel="noreferrer noopener" className="link-xs social-networks-secondary-track">{social_network.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
