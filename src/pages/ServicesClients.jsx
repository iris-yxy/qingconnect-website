function ServicesClients({ copy }) {
  return (
    <section className="page-section services-page services-detail-page">
      <div className="container">
        <div className="audience-detail-hero">
          <h1 className="services-title audience-detail-title">{copy.pageTitle}</h1>
          <p className="services-lead audience-detail-lead">{copy.title}</p>
        </div>

        <section className="clients-detail-shell">
          <div className="clients-detail-grid clients-detail-grid-text">
            <article className="audience-detail-main clients-detail-main">
              <div className="audience-detail-section-head">
                <span className="audience-detail-mini">{copy.introLabel}</span>
              </div>
              <div className="audience-detail-copy">
                {copy.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <aside className="clients-summary-panel">
              <div className="audience-detail-side-header">
                <span className="audience-detail-mini">{copy.sideLabel}</span>
              </div>
              <div className="clients-detail-highlights">
                {copy.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <p className="clients-detail-note">{copy.note}</p>
            </aside>
          </div>

          <div className="clients-steps-strip">
            {copy.steps.map((step, index) => (
              <div key={step} className="clients-step-card">
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default ServicesClients
