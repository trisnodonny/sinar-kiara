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
      <div id="portfolio" className="portfolio">
        <div className="portfolio-container">
          <div className="portfolio-content">
            <div className="content">OUR PORTFOLIO</div>
            <div className="content pf">Current Projects</div>
            <div className="content"></div>
            <div className="content">
              <p>
                We are currently involved in active construction works across residential, commercial, and institutional developments.
              </p>
              <p>
                Our focus remains on responsible execution, regulatory compliance, quality workmanship, and timely delivery for every project entrusted to us.
              </p>
            </div>
          </div>
          <div className="portfolio-content img-content">
            {images.map((image, index) => (
              <div key={index} className="img">
                <img src={image.src} alt={image.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}