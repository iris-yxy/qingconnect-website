import { useState } from 'react'

const recipientEmail = 'christinacq2010@hotmail.com'

const initialForm = {
  name: '',
  email: '',
  requestedTime: '',
  deliveryMode: '',
  message: '',
}

function Booking({ copy }) {
  const [formData, setFormData] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `${copy.form.emailSubjectPrefix} ${formData.name || copy.form.emailBodyLabels.fallbackName}`
    const body = [
      `${copy.form.emailBodyLabels.name}: ${formData.name}`,
      `${copy.form.emailBodyLabels.email}: ${formData.email}`,
      `${copy.form.emailBodyLabels.requestedTime}: ${formData.requestedTime}`,
      `${copy.form.emailBodyLabels.deliveryMode}: ${formData.deliveryMode}`,
      '',
      `${copy.form.emailBodyLabels.message}:`,
      formData.message,
    ].join('\n')

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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

          <form className="booking-form-card booking-form-card-refined" onSubmit={handleSubmit}>
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

            <button type="submit" className="booking-submit-button">
              {copy.form.submit}
            </button>
            <p className="booking-form-note">{copy.form.note}</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking
