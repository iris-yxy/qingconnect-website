import caseImage1 from '../assets/image copy 5.png'
import caseImage2 from '../assets/image copy 6.png'
import caseImage3 from '../assets/image copy 7.png'
import caseImage4 from '../assets/image copy 8.png'

const caseImages = [caseImage1, caseImage2, caseImage3, caseImage4]

function WhyChooseUs({ copy }) {
  return (
    <section className="page-section why-page">
      <div className="container">
        <div className="why-hero">
          <h1 className="why-title">{copy.title}</h1>
          <p className="why-lead">{copy.lead}</p>
        </div>

        <div className="case-study-stack">
          {copy.cases.map((item, index) => (
            <article
              key={item.number}
              className={`case-study-card ${index % 2 === 1 ? 'case-study-card-reverse' : ''}`}
            >
              <div className="case-study-image-wrap">
                <img src={caseImages[index]} alt={item.alt} className="case-study-image" />
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
