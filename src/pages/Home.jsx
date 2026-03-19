import heroImage from '../assets/image.png'
import challengeImage from '../assets/image copy.png'
import bridgingImage from '../assets/image copy 2.png'

function Home({ navigate }) {
  return (
    <>
      <section className="page-section hero hero-home">
        <div className="container hero-home-header">
          <p className="section-kicker hero-top-kicker">
            QingConnect Interpreting & Communication Support
          </p>
        </div>

        <div className="container hero-home-frame">
          <div className="hero-home-grid">
            <div className="hero-home-copy">
              <h1>Connecting Language, Culture and Understanding</h1>
              <p className="hero-text">
                QingConnect supports clear, accurate and effective communication
                between Mandarin-speaking clients and professional services in
                Australia.
              </p>
              <div className="hero-buttons hero-buttons-inline">
                <button type="button" className="btn" onClick={() => navigate('/booking')}>
                  Book a Service
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate('/about')}
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="home-hero-image-wrap">
              <img
                src={heroImage}
                alt="Professional interpreting service in a calm consultation setting"
                className="home-hero-image"
              />
            </div>
          </div>

          <div className="hero-bottom-strip">
            <div className="hero-note hero-note-inline">
              <span>Mandarin-English support</span>
              <span>Legal, medical, insurance, NDIS and aged care</span>
              <span>NAATI certified support</span>
              <span>Culturally informed communication</span>
            </div>
            <div className="hero-metrics">
              <article className="intro-band-item">
                <span className="intro-band-number">9+ years</span>
                <p>Professional interpreting experience in Australia.</p>
              </article>
              <article className="intro-band-item">
                <span className="intro-band-number">1000+</span>
                <p>Assignments across legal, insurance, healthcare and community services.</p>
              </article>
              <article className="intro-band-item">
                <span className="intro-band-number">Australia-wide</span>
                <p>Telephone and video support with flexible service delivery.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-soft-green">
        <div className="container">
          <div className="section-title-row">
            <p className="section-kicker">Common Communication Challenges</p>
            <div className="section-title-line" />
          </div>
          <div className="challenges-layout">
            <div className="challenges-box">
              <p>
                Unclear communication can easily lead to misunderstandings,
                frustration, and unnecessary delays in professional settings.
              </p>
              <p>
                When language and cultural differences are not clearly
                addressed, important information may not be fully understood or
                accurately expressed.
              </p>
              <p>
                QingConnect supports clear, accurate and effective
                communication between Mandarin-speaking clients and professional
                services in Australia.
              </p>
            </div>

            <div className="challenges-image-wrap">
              <img
                src={challengeImage}
                alt="Supportive communication in a professional meeting"
                className="challenges-image"
              />
            </div>
          </div>

          <div className="challenge-points">
            <article className="challenge-point">
              <h3>Misunderstanding</h3>
              <p>Important details can be missed when language barriers are not handled carefully.</p>
            </article>
            <article className="challenge-point">
              <h3>Stress and pressure</h3>
              <p>Clients may struggle to explain complex issues clearly during emotionally demanding situations.</p>
            </article>
            <article className="challenge-point">
              <h3>Cultural nuance</h3>
              <p>Meaning is not only about words. Context and cultural communication style also matter.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-title-row">
            <p className="section-kicker">Our Services</p>
            <div className="section-title-line" />
          </div>
          <div className="services-stack">
            <article className="service-detail-card">
              <div className="service-card-header">
                <span className="service-card-label">01</span>
                <h2 className="service-detail-title">Professional Interpreting</h2>
              </div>
              <div className="service-card-layout">
                <div>
                  <p>
                    Mandarin-English interpreting for professional environments
                    including:
                  </p>
                  <ul className="service-list">
                    <li>Legal consultations</li>
                    <li>Insurance investigations</li>
                    <li>Medical &amp; mental health appointments</li>
                    <li>My Aged Care &amp; NDIS service providers</li>
                    <li>Workplace and professional meetings</li>
                  </ul>
                </div>
                <div className="service-highlight-box">
                  <p>
                    Our goal is to support accurate communication and ensure
                    that both parties fully understand each other.
                  </p>
                  <p>
                    QingConnect brings interdisciplinary expertise and strong
                    understanding of Australian social and insurance systems.
                  </p>
                </div>
              </div>
            </article>

            <article className="service-detail-card preparation-card">
              <div className="service-card-header">
                <span className="service-card-label">02</span>
                <h2 className="service-detail-title">Communication Preparation Support</h2>
              </div>
              <div className="preparation-flow">
                <div className="prep-step">
                  <strong>Organise</strong>
                  <p>Support with background information and relevant details.</p>
                </div>
                <div className="prep-step">
                  <strong>Clarify</strong>
                  <p>Timelines and key concerns are structured more clearly before meetings.</p>
                </div>
                <div className="prep-step">
                  <strong>Prepare</strong>
                  <p>Clients can communicate more confidently and efficiently in the allocated time.</p>
                </div>
              </div>
              <div className="preparation-copy">
                <p>
                  For Mandarin-speaking clients preparing to meet with lawyers,
                  insurers, investigators, medical practitioners, or mental
                  health professionals, it can sometimes be difficult to
                  organise and communicate important information due to the
                  complexity of the situation and the impact of physical or
                  emotional stress.
                </p>
                <p>
                  This service focuses on communication preparation only and
                  does not provide legal, medical, or other professional advice.
                </p>
              </div>
            </article>

            <article className="service-detail-card cultural-card">
              <div className="cultural-card-copy">
                <div className="service-card-header">
                  <span className="service-card-label">03</span>
                  <h2 className="service-detail-title">Cultural and Language Bridging</h2>
                </div>
                <p>
                  In addition to language interpreting, QingConnect supports
                  clearer understanding between professionals and Mandarin-
                  speaking clients by helping address cultural and communication
                  differences.
                </p>
                <p>
                  This helps improve trust, clarity and efficiency in both
                  parties&apos; interactions and gives conversations more structure
                  and confidence.
                </p>
                <div className="cultural-tags">
                  <span>Trust</span>
                  <span>Clarity</span>
                  <span>Efficiency</span>
                  <span>Cultural understanding</span>
                </div>
              </div>

              <div className="cultural-card-visual">
                <div className="cultural-card-media">
                  <img
                    src={bridgingImage}
                    alt="Warm and supportive communication service"
                    className="cultural-card-image"
                  />
                </div>
                <p className="cultural-card-quote">
                  Your smile is the best reflection of our service.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
