import hammer from "@icons/hammer.png"
import building from "@icons/building.png"
import scoop from "@icons/scoop.png"
import wrench from "@icons/wrench.png"
import pen from "@icons/pen.png"

export default function ServiceSection() {
  const cards = [
    {
      img: hammer,
      title: "Civil Construction Works",
      desc: "Comprehensive civil engineering solutions for infrastructure projects, including roads, bridges, and utilities."
    },
    {
      img: building,
      title: "Building Construction",
      desc: "Expert construction services for residential, commercial, and institutional buildings tailored to your needs."
    },
    {
      img: scoop,
      title: "Earthworks & Foundation Works",
      desc: "Professional excavation, grading, and foundation services ensuring solid structural integrity."
    },
    {
      img: wrench,
      title: "Renovation & Refurbishment",
      desc: "Transform existing spaces with our re novation expertise, breathing new life into your properties."
    },
    {
      img: pen,
      title: "Design & Build Projects",
      desc: "Integrated design and construction services providing seamless project delivery from concept to completion."
    },
  ]
  return (
    <>
      <section id="services" className="bg-darkblue">
        <div className="container col">
          <div className="content-title">
            <div className="section">OUR SERVICES</div>
            <div className="title fff">Comperhensive Construction Solutions</div>
            <span></span>
          </div>
          <div className="content-desc">
            <p>We provide comprehensive construction services including:</p>
          </div>
          <div className="content content-card">
            {cards.map((card, index) => (
              <div key={index} className="card">
                <div className="card-img">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="card-title">{card.title}</div>
                <div className="card-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}