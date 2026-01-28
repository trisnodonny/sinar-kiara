import { useEffect, useState } from "react";
import sinar from "@icons/sinar-kiara.png";
import burger from "@icons/burger.png";

type NavbarProps = {
  anchor: string;
}

export default function Navbar({ anchor }: NavbarProps) {
  const links = [
    { label: "Home", target: "home" },
    { label: "About Us", target: "about" },
    { label: "Services", target: "services" },
    { label: "Portfolio", target: "portfolio" },
    { label: "Contact", target: "contact" }
  ];

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  let navBgColor = isScrolled ? "is-scrolled" : "";

  const changeBackgroundColor = () => {
    if (window.scrollY >= 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openNavbar = () => {
    setIsOpen(prev => {
      const next = !prev;

      document.body.style.overflow = next ? "hidden" : "auto";
      return next;
    });
  };

  const closeNavbar = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <div className={`navbar ${navBgColor}`}>
        <div className="navbar-container">
          <div className="nav-logo">
            <a href="/"><img src={sinar} alt="company" /></a>
          </div>
          <div className="nav-cta" onClick={openNavbar}>
            <img src={burger} alt="burger" />
          </div>
          <div className={`nav-links ${isOpen ? "is-active" : ""}`}>
            {links.map((link, index) => (
              <a
                className={`link ${anchor === link.target ? "is-active" : ""}`}
                key={index}
                href={`#${link.target}`}
                onClick={closeNavbar}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {isOpen ? (<div className="overlay"></div>) : ("")}
      </div>
    </>
  )
}