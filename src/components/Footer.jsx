import BrandLogo from './BrandLogo'

function Footer({ copy }) {
  return (
    <footer className="footer">
      <div className="container footer-content footer-content-simple">
        <div className="footer-brand">
          <BrandLogo className="brand-logo-image footer-brand-image" />
          <div className="footer-brand-copy">
            <h3>{copy.title}</h3>
            <p>{copy.description}</p>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-contact-inline">
            <span>{copy.contactLabel}</span>
            <a className="footer-email" href={`mailto:${copy.email}`}>
              {copy.email}
            </a>
          </div>

          <div className="footer-meta">
            {copy.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="footer-bottom footer-bottom-simple">
          <p>{copy.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
