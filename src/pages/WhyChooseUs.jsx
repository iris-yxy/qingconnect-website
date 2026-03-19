import caseImage1 from '../assets/image copy 5.png'
import caseImage2 from '../assets/image copy 6.png'
import caseImage3 from '../assets/image copy 7.png'
import caseImage4 from '../assets/image copy 8.png'

const caseStudies = [
  {
    number: 'Case Example 1',
    title: 'Legal Matter – Effective Communication Under Time Pressure',
    image: caseImage1,
    alt: 'Legal matter communication support',
    text: `A Mandarin-speaking client was charged with general assault following a family dispute. When she engaged Qing through a private interpreting service, she was experiencing significant distress and was unable to clearly communicate with her lawyer due to language barriers and emotional distress. Qing assisted her in organising relevant information and clarifying the case timeline in short time. During a 30-minute initial meeting, Qing facilitated communication between the client and her nominated lawyer, enabling the lawyer to obtain a clear understanding of the matter and proceed accordingly. The case was subsequently resolved in two weeks, and the client’s immediate distress was reduced following the session.`,
  },
  {
    number: 'Case Example 2',
    title: 'Workers’ Compensation – Resolving Communication Breakdown',
    image: caseImage2,
    alt: 'Workers compensation communication support',
    text: `In a workers’ compensation matter, a Mandarin-speaking client experienced conflict with a rehabilitation consultant, resulting in repeated communication breakdowns during a one-hour session. Qing facilitated communication by supporting the client to clearly express his rehabilitation progress and intention to return to work, while also conveying the client’s concerns to the consultant. Throughout the session, Qing maintained a neutral and balanced approach. The discussion was able to continue productively, and the client’s concerns were acknowledged and addressed.`,
  },
  {
    number: 'Case Example 3',
    title: 'Forensic Assessment – Cultural and Emotional Context',
    image: caseImage3,
    alt: 'Forensic assessment communication support',
    text: `In a forensic psychological assessment requiring a court report, a Mandarin-speaking client presented with significant emotional distress and frequently used culturally specific expressions. Qing provided accurate interpretation while clarifying cultural nuances to the psychologist when required. The session was paced to accommodate the client’s emotional state, allowing the assessment to proceed effectively. The psychologist was able to complete the report within the scheduled timeframe with a clear understanding of the client’s presentation.`,
  },
  {
    number: 'Case Example 4',
    title: 'NDIS Care Planning – Complex Communication Setting',
    image: caseImage4,
    alt: 'NDIS care planning communication support',
    text: `In a home care planning meeting involving six participants, the client, who was living with dementia, was intermittently vocal, creating a challenging communication environment. During the 90-minute telephone meeting, Qing maintained clear and accurate interpretation throughout. The discussion involved detailed aspects of the Australian aged care system. Drawing on her experience and familiarity with aged care frameworks, Qing supported accurate and contextually appropriate communication between the client’s family and the care team. During the meeting, the family expressed dissatisfaction and heightened emotions. Communication was facilitated in a calm and structured manner, ensuring that the family’s concerns and the client’s specific care needs were clearly conveyed and understood. The meeting was completed efficiently within the scheduled timeframe, with all parties able to remain engaged and clear outcomes achieved.`,
  },
]

function WhyChooseUs() {
  return (
    <section className="page-section why-page">
      <div className="container">
        <div className="why-hero">
          <h1 className="why-title">Why Choose Us</h1>
          <p className="why-lead">
            Experience matters most in sensitive, complex and high-pressure
            communication settings. These case examples show how QingConnect
            supports clarity, calm and progress when conversations are
            difficult.
          </p>
        </div>

        <div className="case-study-stack">
          {caseStudies.map((item, index) => (
            <article
              key={item.number}
              className={`case-study-card ${index % 2 === 1 ? 'case-study-card-reverse' : ''}`}
            >
              <div className="case-study-image-wrap">
                <img src={item.image} alt={item.alt} className="case-study-image" />
              </div>

              <div className="case-study-copy">
                <span className="case-study-label">{item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
