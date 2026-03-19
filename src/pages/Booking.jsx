import { useState } from 'react'

const recipientEmail = 'christinacq2010@hotmail.com'

const initialForm = {
  name: '',
  email: '',
  requestedTime: '',
  deliveryMode: '',
  message: '',
}

function Booking() {
  const [formData, setFormData] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `QingConnect booking enquiry from ${formData.name || 'website visitor'}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Date or Time Request: ${formData.requestedTime}`,
      `Delivery Mode: ${formData.deliveryMode}`,
      '',
      'Message:',
      formData.message,
    ].join('\n')

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="page-section booking-page">
      <div className="container">
        <div className="booking-hero-simple">
          <h1 className="booking-title">Bookings & Enquiries</h1>
          <p className="booking-lead">
            QingConnect provides professional Mandarin-English interpreting
            services Australia-wide, with flexible delivery via telephone and
            video conferencing.
          </p>
          <p className="booking-lead-secondary">
            All bookings can be made by submitting a service request form. Once
            your request is received, confirmation will be provided based on
            availability.
          </p>
        </div>

        <div className="booking-guidelines booking-guidelines-refined">
          <article className="booking-guideline-card booking-guideline-card-primary">
            <div className="booking-guideline-heading">
              <h3>Booking Notice</h3>
            </div>
            <div className="booking-guideline-body">
              <p>
                For standard bookings exceeding one hour, a minimum of 24 hours’
                notice is required.
              </p>
              <p>
                For short teleconference bookings under 30 minutes, please
                allow at least 2 hours’ notice.
              </p>
              <p>
                For urgent requests, please indicate “URGENT” in the service
                request form.
              </p>
            </div>
          </article>

          <article className="booking-guideline-card booking-guideline-card-fees">
            <div className="booking-guideline-heading">
              <h3>Fees</h3>
            </div>
            <div className="booking-guideline-body">
              <p>
                Interpreting services are charged at an hourly rate, with time
                calculated in minimum blocks where applicable.
              </p>
              <p>
                For detailed fee information or a tailored quote, please
                contact us directly.
              </p>
            </div>
          </article>

          <article className="booking-guideline-card booking-guideline-card-cancellations">
            <div className="booking-guideline-heading">
              <h3>Cancellations</h3>
            </div>
            <div className="booking-guideline-body">
              <p>
                Cancellations or changes to bookings should be made as early
                as possible.
              </p>
              <p>Fees may apply for late cancellations or missed appointments.</p>
            </div>
          </article>
        </div>

        <div className="booking-form-shell">
          <div className="booking-form-header booking-form-header-simple">
            <p className="booking-form-enquiry">ENQUIRIES</p>
            <p className="booking-form-enquiry-copy">
              For any booking or fee enquiries, please contact:
            </p>
          </div>

          <form className="booking-form-card booking-form-card-refined" onSubmit={handleSubmit}>
            <div className="booking-form-grid">
              <label>
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </label>

              <label>
                <span>Date or Time Request</span>
                <input
                  type="text"
                  name="requestedTime"
                  value={formData.requestedTime}
                  onChange={handleChange}
                  placeholder="Preferred date, time, or timeframe"
                />
              </label>

              <label>
                <span>Delivery Mode</span>
                <input
                  type="text"
                  name="deliveryMode"
                  value={formData.deliveryMode}
                  onChange={handleChange}
                  placeholder="Telephone / video conferencing"
                />
              </label>

              <label className="booking-form-full">
                <span>Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please include context, participants, language needs, and whether the request is urgent."
                  required
                />
              </label>
            </div>

            <button type="submit" className="booking-submit-button">
              Submit Request
            </button>
            <p className="booking-form-note">
              Submitting will open your default email app addressed to {recipientEmail}.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking
