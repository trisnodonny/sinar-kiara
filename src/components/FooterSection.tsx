export default function FooterSection() {
  const quickLinks = [
    { label: "Home", target: "home" },
    { label: "About Us", target: "about" },
    { label: "Services", target: "services" },
    { label: "Portfolio", target: "portfolio" },
    { label: "Contact", target: "contact" },
  ]

  const services = [
    { label: "Commercial Construction", target: "/" },
    { label: "Residential Development", target: "/" },
    { label: "Interior Design", target: "/" },
    { label: "Project Management", target: "/" },
  ]

  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="content">
              <div className="footer-text">
                LOGO
              </div>
              <div className="footer-desc">Crafting exceptional structures with precision, innovation, and a commitment to excellence.</div>
            </div>
            <div className="content">
              <div className="footer-text">Quick Links</div>
              <div className="footer-links">
                {quickLinks.map((ql, index) => (
                  <a key={index} href={`#${ql.target}`}>{ql.label}</a>
                ))}
              </div>
            </div>
            <div className="content">
              <div className="footer-text">Services</div>
              <div className="footer-links">
                {services.map((service, index) => (
                  <a key={index} href={service.target}>{service.label}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-cr">
            <div>© 2026 Sinar Kiara. All rights reserved.</div>
          </div>
        </div>
      </section>
    </>
  )
}