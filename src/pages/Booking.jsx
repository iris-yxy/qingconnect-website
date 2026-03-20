import { useState } from 'react'

const formName = 'booking-enquiry'

const initialForm = {
  name: '',
  email: '',
  requestedTime: '',
  deliveryMode: '',
  message: '',
}

function Booking({ copy }) {
  const [formData, setFormData] = useState(initialForm)
  const [submitState, setSubmitState] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setSubmitState('submitting')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': formName,
          ...formData,
        }).toString(),
      })

      if (!response.ok) {
        throw new Error('Netlify form submission failed')
      }

      setFormData(initialForm)
      setSubmitState('success')
    } catch {
      setSubmitState('error')
    }
  }

  return (
    <section className="page-section booking-page">
      <div className="container">
        <div className="booking-hero-simple">
          <h1 className="booking-title">{copy.title}</h1>
          <p className="booking-lead">{copy.lead}</p>
          <p className="booking-lead-secondary">{copy.leadSecondary}</p>
        </div>

        <div className="booking-guidelines booking-guidelines-refined">
          {copy.guidelines.map((item, index) => (
            <article
              key={item.title}
              className={`booking-guideline-card ${
                index === 0
                  ? 'booking-guideline-card-primary'
                  : index === 1
                    ? 'booking-guideline-card-fees'
                    : 'booking-guideline-card-cancellations'
              }`}
            >
              <div className="booking-guideline-heading">
                <h3>{item.title}</h3>
              </div>
              <div className="booking-guideline-body">
                {item.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="booking-form-shell">
          <div className="booking-form-header booking-form-header-simple">
            <p className="booking-form-enquiry">{copy.enquiryLabel}</p>
            <p className="booking-form-enquiry-copy">{copy.enquiryCopy}</p>
          </div>

          <form
            className="booking-form-card booking-form-card-refined"
            name={formName}
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value={formName} />
            <div className="booking-form-grid">
              <label>
                <span>{copy.form.fields.name.label}</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={copy.form.fields.name.placeholder}
                  required
                />
              </label>

              <label>
                <span>{copy.form.fields.email.label}</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={copy.form.fields.email.placeholder}
                  required
                />
              </label>

              <label>
                <span>{copy.form.fields.requestedTime.label}</span>
                <input
                  type="text"
                  name="requestedTime"
                  value={formData.requestedTime}
                  onChange={handleChange}
                  placeholder={copy.form.fields.requestedTime.placeholder}
                />
              </label>

              <label>
                <span>{copy.form.fields.deliveryMode.label}</span>
                <input
                  type="text"
                  name="deliveryMode"
                  value={formData.deliveryMode}
                  onChange={handleChange}
                  placeholder={copy.form.fields.deliveryMode.placeholder}
                />
              </label>

              <label className="booking-form-full">
                <span>{copy.form.fields.message.label}</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={copy.form.fields.message.placeholder}
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              className="booking-submit-button"
              disabled={submitState === 'submitting'}
            >
              {submitState === 'submitting' ? copy.form.submitting : copy.form.submit}
            </button>
            <p className="booking-form-note">{copy.form.note}</p>
            {submitState === 'success' ? (
              <p className="booking-form-status booking-form-status-success">{copy.form.success}</p>
            ) : null}
            {submitState === 'error' ? (
              <p className="booking-form-status booking-form-status-error">{copy.form.error}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking
