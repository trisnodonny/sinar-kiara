import p1 from "@images/current-projects/p1.png"
import p2 from "@images/current-projects/p2.png"
import p3 from "@images/current-projects/p3.png"
import p4 from "@images/current-projects/p4.png"
import p5 from "@images/current-projects/p5.png"

export default function PortfolioSection() {
  const images = [
    { label: "Conrad Hotel", src: p1 },
    { label: "Malaysia Baptist Convention", src: p2 },
    { label: "Life Centre", src: p3 },
    { label: "BYD Showroom", src: p4 },
    { label: "Yanu Hills (10 Units Bungalow)", src: p5 }
  ]
  return (
    <>
      <section id="portfolio" className="bg-lightgray">
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
                <div className="img-label">
                  <span>{image.label}</span>
                </div>
                <img src={image.src} alt={image.label} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}