import callus from "@icons/call-us.png";
import emailus from "@icons/email-us.png";
import visitus from "@icons/visit-us.png";
import businesshour from "@icons/business-hour.png";
import emailjs from "@emailjs/browser"
import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_API_URL
const MSG_API_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function ContactSection() {
    const informations = [
        {
            icon: callus,
            label: "Call Us",
            alt: 'Call us at 03 - 5612 8471',
            detail: "03 - 5612 8471"
        },
        {
            icon: emailus,
            label: "Email Us",
            alt: 'Send us an email at sinarkiarahq@gmail.com',
            detail: "sinarkiarahq@gmail.com"
        },
        {
            icon: visitus,
            label: "Visit Us",
            alt: 'Visit our office at Suite B-3A-17 Empire SOHO, Empire Shopping Gallery, Jalan SS16/1. 47500, Subang Jaya, Selangor',
            detail: `Suite B-3A-17 Empire SOHO, Empire Shopping Gallery, Jalan SS16/1. 47500, Subang Jaya, Selangor`
        },
        {
            icon: businesshour,
            label: "Business Hours",
            alt: 'Business hours are Monday to Friday, 9:00 AM to 6:00 PM',
            detail: "Monday - Friday: 9:00 AM - 6:00 PM"
        },
    ]

    const [dataInput, setDataInput] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: ""
    })

    const [allRequired, setAllRequired] = useState(true)
    const [success, setSuccess] = useState(false)

    const checkAllField = async () => {
        if (
            !dataInput.fullName ||
            !dataInput.email ||
            !dataInput.phoneNumber ||
            !dataInput.subject ||
            !dataInput.message
        ) {
            setAllRequired(false);
            setSuccess(false);
            return;
        }

        setAllRequired(true);

        try {
            const response = await emailjs.send(
                "service_0fux2qo",
                "template_38z6or8",
                {
                    fullName: dataInput.fullName,
                    email: dataInput.email,
                    phoneNumber: dataInput.phoneNumber,
                    subject: dataInput.subject,
                    message: dataInput.message,
                },
                MSG_API_KEY
            );

            console.log("SUCCESS!", response.status, response.text);
            setSuccess(true);

            // Clear form
            setDataInput({
                fullName: "",
                email: "",
                phoneNumber: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            console.error("FAILED...", error);
            setSuccess(false);
        }
    };

    useEffect(() => {
        emailjs.init(MSG_API_KEY)
    }, [])

    const sendMessage = async (ev: any) => {
        ev.preventDefault()
        await checkAllField()
    }

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
                                        <img src={info.icon} alt={info.alt} />
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
                                <input type="text" className={`${allRequired || dataInput.fullName ? "" : "required"}`}
                                    value={dataInput.fullName}
                                    onChange={(e) =>
                                        setDataInput(prev => ({
                                            ...prev,
                                            fullName: e.target.value
                                        }))
                                    }
                                />
                            </div>
                            <div className="input-box duplicate">
                                <div className="input-box">
                                    <div className="label">Email Address</div>
                                    <input type="email" className={`${allRequired || dataInput.email ? "" : "required"}`}
                                        value={dataInput.email}
                                        onChange={(e) =>
                                            setDataInput(prev => ({
                                                ...prev,
                                                email: e.target.value
                                            }))
                                        }
                                    />
                                </div>
                                <div className="input-box">
                                    <div className="label">Phone Number</div>
                                    <input type="tel" className={`${allRequired || dataInput.phoneNumber ? "" : "required"}`}
                                        value={dataInput.phoneNumber}
                                        onChange={(e) =>
                                            setDataInput(prev => ({
                                                ...prev,
                                                phoneNumber: e.target.value
                                            }))
                                        }
                                    />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="label">Subject</div>
                                <input type="text" className={`${allRequired || dataInput.subject ? "" : "required"}`}
                                    value={dataInput.subject}
                                    onChange={(e) =>
                                        setDataInput(prev => ({
                                            ...prev,
                                            subject: e.target.value
                                        }))
                                    }
                                />
                            </div>
                            <div className="input-box">
                                <div className="label">Message</div>
                                <textarea name="" id="" rows={12} className={`${allRequired || dataInput.message ? "" : "required"}`}
                                    value={dataInput.message}
                                    onChange={(e) =>
                                        setDataInput(prev => ({
                                            ...prev,
                                            message: e.target.value
                                        }))
                                    }
                                ></textarea>
                            </div>
                            <div className={`message ${allRequired ? "" : "error"}`}>All fields are required to proceed.</div>
                            <div className="cta-button" onClick={sendMessage}>Send Message</div>
                            <div className={`message ${success ? "success" : ""}`}>Message sent! Our team will get back to you soon</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}