function Services({ copy }) {
  return (
    <section className="page-section services-page">
      <div className="container">
        <div className="services-hero">
          <div className="services-hero-copy">
            <h1 className="services-title">{copy.title}</h1>
            <p className="services-lead">{copy.lead}</p>
          </div>

          <div className="services-audience-switch">
            <a href="#professionals" className="audience-card audience-card-professionals">
              <span className="audience-label">{copy.audienceCards.professionals.label}</span>
              <h2>{copy.audienceCards.professionals.title}</h2>
              <p>{copy.audienceCards.professionals.text}</p>
            </a>

            <a href="#clients" className="audience-card audience-card-clients">
              <span className="audience-label">{copy.audienceCards.clients.label}</span>
              <h2>{copy.audienceCards.clients.title}</h2>
              <p>{copy.audienceCards.clients.text}</p>
            </a>
          </div>
        </div>

        <div className="services-detail-sections">
          <section id="professionals" className="audience-section">
            <div className="audience-section-heading">
              <p className="audience-section-kicker">{copy.professionals.kicker}</p>
              <h2>{copy.professionals.title}</h2>
            </div>

            <div className="audience-section-layout">
              <article className="audience-content-card">
                <p>{copy.professionals.intro}</p>
                <ul className="audience-list">
                  {copy.professionals.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>{copy.professionals.closing}</p>
              </article>

              <aside className="audience-side-panel">
                {copy.professionals.sideCards.map((item) => (
                  <div key={item.title} className="audience-side-card">
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </aside>
            </div>
          </section>

          <section id="clients" className="audience-section audience-section-soft">
            <div className="audience-section-heading">
              <p className="audience-section-kicker">{copy.clients.kicker}</p>
              <h2>{copy.clients.title}</h2>
            </div>

            <div className="audience-section-layout">
              <article className="audience-content-card">
                {copy.clients.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>

              <aside className="audience-side-panel">
                {copy.clients.steps.map((step, index) => (
                  <div key={step} className="audience-side-card audience-step-card">
                    <span>{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </aside>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Services
