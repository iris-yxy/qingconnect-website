function Services({ copy, navigate }) {
  return (
    <section className="page-section services-page">
      <div className="container">
        <div className="services-hero">
          <div className="services-hero-copy">
            <h1 className="services-title">{copy.title}</h1>
            <p className="services-lead">{copy.lead}</p>
          </div>

          <div className="services-audience-switch">
            <article className="audience-card audience-card-professionals audience-card-entry">
              <div className="audience-card-topline">
                <span className="audience-badge">{copy.audienceCards.professionals.badge}</span>
              </div>
              <h2>{copy.audienceCards.professionals.title}</h2>
              <span className="audience-label">{copy.audienceCards.professionals.label}</span>
              <p>{copy.audienceCards.professionals.text}</p>
              <div className="audience-highlights">
                {copy.audienceCards.professionals.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="audience-card-actions">
                <button
                  type="button"
                  className="btn btn-secondary audience-card-button"
                  onClick={() => navigate('/services/professionals')}
                >
                  {copy.buttons.professionals}
                </button>
              </div>
            </article>

            <article className="audience-card audience-card-clients audience-card-entry">
              <div className="audience-card-topline">
                <span className="audience-badge">{copy.audienceCards.clients.badge}</span>
              </div>
              <h2>{copy.audienceCards.clients.title}</h2>
              <span className="audience-label">{copy.audienceCards.clients.label}</span>
              <p>{copy.audienceCards.clients.text}</p>
              <div className="audience-highlights">
                {copy.audienceCards.clients.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="audience-card-actions">
                <button
                  type="button"
                  className="btn btn-secondary audience-card-button"
                  onClick={() => navigate('/services/clients')}
                >
                  {copy.buttons.clients}
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
