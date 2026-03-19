import aboutHeroImage from '../assets/image copy 3.png'
import valuesImage from '../assets/image copy 4.png'

function About() {
  return (
    <section className="page-section about-page">
      <div className="container">
        <div className="about-hero-panel">
          <div className="about-hero-copy">
            <h1 className="about-title">About QingConnect</h1>
            <p className="about-lead">
              Qing Connecting Interpreting & Communication Support was founded
              by a NAATI Certified Mandarin-English interpreter based in
              Australia, with over nine years of professional interpreting
              experience.
            </p>
            <div className="about-hero-pills">
              <span>NAATI Certified</span>
              <span>AASW-accredited social worker</span>
              <span>Registered counsellor</span>
            </div>
          </div>

          <div className="about-hero-image-wrap">
            <img
              src={aboutHeroImage}
              alt="QingConnect professional interpreting and communication support"
              className="about-hero-image"
            />
          </div>
        </div>

        <div className="about-story-stack">
          <article className="about-story-card about-story-card-wide">
            <h2>Interdisciplinary experience</h2>
            <p>
              Qing is also an AASW-accredited social worker and registered
              counsellor, bringing a strong interdisciplinary background across
              legal, insurance, and healthcare settings. Over the past three
              years, she has completed more than a thousand interpreting
              assignments for major Australian insurance companies,
              investigation firms, rehabilitation providers, law firms,
              government and non-government agencies, private practitioners,
              hospitals, and court-related proceedings.
            </p>
          </article>

          <div className="about-story-row">
            <article className="about-story-card">
              <h2>Deep system knowledge</h2>
              <p>
                Through this extensive experience, Qing has developed in-depth
                knowledge of the Australian insurance system, particularly in
                relation to physical and psychological injury claims arising
                from motor vehicle accidents and workplace injuries.
              </p>
            </article>

            <article className="about-story-card">
              <h2>Language and cultural bridging</h2>
              <p>
                She also works closely with psychologists and psychiatrists to
                support Mandarin-speaking clients, bridging both language and
                cultural gaps to enable clearer communication, more accurate
                assessments, and a stronger sense of understanding.
              </p>
            </article>
          </div>

          <article className="about-story-card about-story-card-wide">
            <h2>How QingConnect supports clients and services</h2>
            <p>
              QingConnect provides professional Mandarin-English interpreting
              and communication support across a range of complex and sensitive
              settings, including workers’ compensation and personal injury
              matters, family violence cases, as well as My Aged Care and
              NDIS-related services.
            </p>
            <p>
              The service supports clear, accurate, and culturally informed
              communication between clients and service providers, ensuring that
              Mandarin-speaking clients can understand their rights, express
              their needs with confidence, and engage meaningfully in
              decision-making processes.
            </p>
          </article>
        </div>

        <div className="about-values-section">
          <div className="about-values-header">
            <div className="about-values-heading">
              <h2>Our Professional Values</h2>
              <p>
                As a NAATI-certified interpreter and AUSIT member, QingConnect
                adheres to the AUSIT Code of Ethics.
              </p>
            </div>

            <div className="about-values-badge">
              <img
                src={valuesImage}
                alt="Professional values guiding QingConnect services"
                className="about-values-image"
              />
            </div>
          </div>

          <div className="about-values-cards">
            <article className="about-value-card">
              <h3>Confidentiality</h3>
              <p>Respecting privacy and handling sensitive information with care.</p>
            </article>
            <article className="about-value-card">
              <h3>Impartiality</h3>
              <p>Maintaining neutrality across legal, medical and professional settings.</p>
            </article>
            <article className="about-value-card">
              <h3>Accuracy</h3>
              <p>Delivering clear and faithful communication between all parties.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
