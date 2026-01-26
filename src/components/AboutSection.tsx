import about from "@images/about-us.png"

export default function AboutSection() {
  return (
    <>
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <img src={about} alt="About" />
          </div>
          <div className="about-content">
            <div className="content">ABOUT US</div>
            <div className="content pf">Driven by Experience Built on Trust.</div>
            <div className="content">
              <p>
                We deliver professionally managed construction solutions for residential,
                commercial, and institutional developments.
              </p>
              <p>
                Our work is driven by structured planning, technical expertise,
                and a strong commitment to quality and accountability.
                We collaborate closely with clients, consultants,
                and authorities to ensure efficient execution and
                dependable project outcomes.
              </p>
            </div>
            <div className="content">
              <div className="list">Strong project governance</div>
              <div className="list">Experienced construction management</div>
              <div className="list">Commitment to-safety, quality, and timely delivery</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}