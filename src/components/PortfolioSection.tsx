import b1 from "@images/b1.png"
import b2 from "@images/b2.png"
import b3 from "@images/b3.png"
import b4 from "@images/b4.png"
import b5 from "@images/b5.png"

export default function PortfolioSection() {
  const images = [
    { label: "b1", src: b1 },
    { label: "b2", src: b2 },
    { label: "b3", src: b3 },
    { label: "b4", src: b4 },
    { label: "b5", src: b5 }
  ]
  return (
    <>
      <section id="portfolio">
        <div className="container col">
          <div className="content">
            <div className="content-title">
              <div className="section">OUR PORTFOLIO</div>
              <div className="title">Current Projects</div>
              <span></span>
            </div>
            <div className="content-desc">
              <p>
                We are currently involved in active construction works across residential,
                commercial, and institutional developments.
              </p>
              <p>
                Our focus remains on responsible execution, regulatory compliance,
                quality workmanship, and timely delivery for every project entrusted to us.
              </p>
            </div>
          </div>
          <div className="content content-img">
            {images.map((image, index) => (
              <div key={index} className="img">
                <img src={image.src} alt={image.label} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}