import aboutHeroImage from '../assets/image copy 3.png'
import valuesImage from '../assets/image copy 4.png'

function About({ copy }) {
  return (
    <section className="page-section about-page">
      <div className="container">
        <div className="about-hero-panel">
          <div className="about-hero-copy">
            <h1 className="about-title">{copy.title}</h1>
            <p className="about-lead">{copy.lead}</p>
            <div className="about-hero-pills">
              {copy.pills.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="about-hero-image-wrap">
            <img
              src={aboutHeroImage}
              alt={copy.heroImageAlt}
              className="about-hero-image"
            />
          </div>
        </div>

        <div className="about-story-stack">
          <article className="about-story-card about-story-card-wide">
            <h2>{copy.sections.interdisciplinary.title}</h2>
            <p>{copy.sections.interdisciplinary.text}</p>
          </article>

          <div className="about-story-row">
            <article className="about-story-card">
              <h2>{copy.sections.systemKnowledge.title}</h2>
              <p>{copy.sections.systemKnowledge.text}</p>
            </article>

            <article className="about-story-card">
              <h2>{copy.sections.bridging.title}</h2>
              <p>{copy.sections.bridging.text}</p>
            </article>
          </div>

          <article className="about-story-card about-story-card-wide">
            <h2>{copy.sections.support.title}</h2>
            {copy.sections.support.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>

        <div className="about-values-section">
          <div className="about-values-header">
            <div className="about-values-heading">
              <h2>{copy.values.title}</h2>
              <p>{copy.values.lead}</p>
            </div>

            <div className="about-values-badge">
              <img
                src={valuesImage}
                alt={copy.values.imageAlt}
                className="about-values-image"
              />
            </div>
          </div>

          <div className="about-values-cards">
            {copy.values.cards.map((item) => (
              <article key={item.title} className="about-value-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
