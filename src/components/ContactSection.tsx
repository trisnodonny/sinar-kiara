import callus from "@icons/call-us.png";
import emailus from "@icons/email-us.png";
import visitus from "@icons/visit-us.png";
import businesshour from "@icons/business-hour.png";
const API_KEY = import.meta.env.VITE_API_URL

export default function ContactSection() {
    const informations = [
        {
            icon: callus,
            label: "Call Us",
            detail: "012 345 6789"
        },
        {
            icon: emailus,
            label: "Email Us",
            detail: "info@sinarkiara.com"
        },
        {
            icon: visitus,
            label: "Visit Us",
            detail: `Suite B-3A-17 Empire SOHO, Empire Shopping Gallery, Jalan SS16/1. 47500, Subang Jaya, Selangor`
        },
        {
            icon: businesshour,
            label: "Business Hours",
            detail: "Monday - Friday: 8:00 AM - 6:00 PM"
        },
    ]

    return (
        <>
            <section id="contact">
                <div className="container col">
                    <div className="content">
                        <div className="content-title">
                            <div className="section">CONTACT US</div>
                            <div className="title">Let's Build Together</div>
                            <span></span>
                        </div>
                        <div className="content-desc">
                            <p>Have a project in mind? We'd love to hear from you.
                                Reach out to us and let's discuss how we can bring your vision to life.
                            </p>
                        </div>
                    </div>
                    <div className="content content-contact">
                        <div className="content-info">
                            {informations.map((info, index) => (
                                <div key={index} className="info-card">
                                    <div className="info-card-img">
                                        <img src={info.icon} alt={info.label} />
                                    </div>
                                    <div className="info-card-text">
                                        <p className="label">{info.label}</p>
                                        <p className="detail">{info.detail}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="content-info-map">
                                <iframe
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Suite+B-3A-17+Empire+SOHO,+Empire+Shopping+Gallery,+Jalan+SS16/1,+47500,+Subang+Jaya,+Selangor`}
                                />
                            </div>
                        </div>
                        <div className="content-cta">
                            <div className="input-box">
                                <div className="label">Full Name</div>
                                <input type="text" />
                            </div>
                            <div className="input-box duplicate">
                                <div className="input-box">
                                    <div className="label">Email Address</div>
                                    <input type="text" />
                                </div>
                                <div className="input-box">
                                    <div className="label">Phone Number</div>
                                    <input type="number" />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="label">Subject</div>
                                <input type="text" />
                            </div>
                            <div className="input-box">
                                <div className="label">Message</div>
                                <textarea name="" id="" rows={12}></textarea>
                            </div>
                            <div className="cta-button">Send Message</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}