function ServicesProfessionals({ copy }) {
  return (
    <section className="page-section services-page services-detail-page">
      <div className="container">
        <div className="audience-detail-hero">
          <h1 className="services-title audience-detail-title">{copy.pageTitle}</h1>
          <p className="services-lead audience-detail-lead">{copy.title}</p>
        </div>

        <section className="audience-detail-layout audience-detail-layout-professionals">
          <article className="audience-detail-main">
            <div className="audience-detail-section-head">
              <span className="audience-detail-mini">{copy.introLabel}</span>
            </div>
            <p className="audience-detail-intro">{copy.intro}</p>
            <ul className="audience-detail-list">
              {copy.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="audience-detail-closing">{copy.closing}</p>
          </article>

          <aside className="audience-detail-side">
            <div className="audience-detail-side-header">
              <span className="audience-detail-mini">{copy.sideLabel}</span>
            </div>
            {copy.sideCards.map((item, index) => (
              <div key={item.title} className="audience-detail-side-item">
                <span>{index + 1}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </aside>
        </section>
      </div>
    </section>
  )
}

export default ServicesProfessionals
