function Services() {
  return (
    <section className="page-section services-page">
      <div className="container">
        <div className="services-hero">
          <div className="services-hero-copy">
            <h1 className="services-title">Who We Support</h1>
            <p className="services-lead">
              QingConnect supports two key groups: professionals working with
              Mandarin-speaking clients, and Mandarin-speaking clients preparing
              for important professional meetings.
            </p>
          </div>

          <div className="services-audience-switch">
            <a href="#professionals" className="audience-card audience-card-professionals">
              <span className="audience-label">Working with Professionals</span>
              <h2>Support for organisations working with Mandarin-speaking clients.</h2>
              <p>
                QingConnect supports organisations such as law firms, insurers,
                investigators, medical and mental health practitioners,
                rehabilitation providers, and government or private service
                providers.
              </p>
            </a>

            <a href="#clients" className="audience-card audience-card-clients">
              <span className="audience-label">Mandarin-speaking Clients</span>
              <h2>Support for clients preparing for important professional meetings.</h2>
              <p>
                QingConnect supports Mandarin-speaking clients in Australia with
                interpreting and communication preparation before important
                appointments and meetings.
              </p>
            </a>
          </div>
        </div>

        <div className="services-detail-sections">
          <section id="professionals" className="audience-section">
            <div className="audience-section-heading">
              <p className="audience-section-kicker">Working with professionals</p>
              <h2>Support for organisations working with Mandarin-speaking clients.</h2>
            </div>

            <div className="audience-section-layout">
              <article className="audience-content-card">
                <p>
                  QingConnect supports organisations that work with
                  Mandarin-speaking clients, including:
                </p>
                <ul className="audience-list">
                  <li>Law firms</li>
                  <li>Insurance companies</li>
                  <li>Investigators</li>
                  <li>Medical and mental health practitioners</li>
                  <li>Rehabilitation providers</li>
                  <li>
                    Government and non-government agencies, as well as private
                    service providers
                  </li>
                </ul>
                <p>
                  Our services help ensure that communication remains accurate,
                  respectful and efficient.
                </p>
              </article>

              <aside className="audience-side-panel">
                <div className="audience-side-card">
                  <strong>Clear communication</strong>
                  <p>Reduce misunderstanding in important professional settings.</p>
                </div>
                <div className="audience-side-card">
                  <strong>Professional support</strong>
                  <p>Suitable for legal, insurance, medical and rehabilitation contexts.</p>
                </div>
                <div className="audience-side-card">
                  <strong>Cultural understanding</strong>
                  <p>Bridge both language and communication differences with care.</p>
                </div>
              </aside>
            </div>
          </section>

          <section id="clients" className="audience-section audience-section-soft">
            <div className="audience-section-heading">
              <p className="audience-section-kicker">Supporting Mandarin-speaking clients</p>
              <h2>Help for clients preparing for important appointments and meetings.</h2>
            </div>

            <div className="audience-section-layout">
              <article className="audience-content-card">
                <p>
                  If you are a Mandarin-speaking client in Australia preparing
                  for an important meeting with a lawyer, insurer, medical and
                  mental health practitioners or other professional service
                  providers, QingConnect can support you with interpreting and
                  communication preparation.
                </p>
                <p>
                  Our services is to help you communicate your situation
                  accurately, confidently and efficiently.
                </p>
              </article>

              <aside className="audience-side-panel">
                <div className="audience-side-card audience-step-card">
                  <span>1</span>
                  <p>Clarify your situation and key points before the meeting.</p>
                </div>
                <div className="audience-side-card audience-step-card">
                  <span>2</span>
                  <p>Receive support with interpreting and communication preparation.</p>
                </div>
                <div className="audience-side-card audience-step-card">
                  <span>3</span>
                  <p>Communicate more accurately, confidently and efficiently.</p>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Services
