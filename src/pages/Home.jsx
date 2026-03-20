import heroImage from '../assets/image.png'
import challengeImage from '../assets/image copy.png'
import bridgingImage from '../assets/image copy 2.png'

function Home({ navigate, copy }) {
  const [interpretingCard, preparationCard, bridgingCard] = copy.services.cards

  return (
    <>
      <section className="page-section hero hero-home">
        <div className="container hero-home-header">
          <p className="section-kicker hero-top-kicker">{copy.topKicker}</p>
        </div>

        <div className="container hero-home-frame">
          <div className="hero-home-grid">
            <div className="hero-home-copy">
              <h1>{copy.title}</h1>
              <p className="hero-text">{copy.lead}</p>
              <div className="hero-buttons hero-buttons-inline">
                <button type="button" className="btn" onClick={() => navigate('/booking')}>
                  {copy.primaryButton}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate('/about')}
                >
                  {copy.secondaryButton}
                </button>
              </div>
            </div>

            <div className="home-hero-image-wrap">
              <img
                src={heroImage}
                alt={copy.heroImageAlt}
                className="home-hero-image"
              />
            </div>
          </div>

          <div className="hero-bottom-strip">
            <div className="hero-note hero-note-inline">
              {copy.notes.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-metrics">
              {copy.metrics.map((item) => (
                <article key={item.title} className="intro-band-item">
                  <span className="intro-band-number">{item.title}</span>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-soft-green">
        <div className="container">
          <div className="section-title-row">
            <p className="section-kicker">{copy.challenges.kicker}</p>
            <div className="section-title-line" />
          </div>
          <div className="challenges-layout">
            <div className="challenges-box">
              {copy.challenges.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="challenges-image-wrap">
              <img
                src={challengeImage}
                alt={copy.challenges.imageAlt}
                className="challenges-image"
              />
            </div>
          </div>

          <div className="challenge-points">
            {copy.challenges.points.map((point) => (
              <article key={point.title} className="challenge-point">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-title-row">
            <p className="section-kicker">{copy.services.kicker}</p>
            <div className="section-title-line" />
          </div>
          <div className="services-stack">
            <article className="service-detail-card">
              <div className="service-card-header">
                <span className="service-card-label">{interpretingCard.number}</span>
                <h2 className="service-detail-title">{interpretingCard.title}</h2>
              </div>
              <div className="service-card-layout">
                <div>
                  <p>{interpretingCard.intro}</p>
                  <ul className="service-list">
                    {interpretingCard.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-highlight-box">
                  {interpretingCard.highlights.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </article>

            <article className="service-detail-card preparation-card">
              <div className="service-card-header">
                <span className="service-card-label">{preparationCard.number}</span>
                <h2 className="service-detail-title">{preparationCard.title}</h2>
              </div>
              <div className="preparation-flow">
                {preparationCard.steps.map((step) => (
                  <div key={step.title} className="prep-step">
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
              <div className="preparation-copy">
                {preparationCard.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article className="service-detail-card cultural-card">
              <div className="cultural-card-copy">
                <div className="service-card-header">
                  <span className="service-card-label">{bridgingCard.number}</span>
                  <h2 className="service-detail-title">{bridgingCard.title}</h2>
                </div>
                {bridgingCard.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="cultural-tags">
                  {bridgingCard.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="cultural-card-visual">
                <div className="cultural-card-media">
                  <img
                    src={bridgingImage}
                    alt={bridgingCard.imageAlt}
                    className="cultural-card-image"
                  />
                </div>
                <p className="cultural-card-quote">{bridgingCard.quote}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
