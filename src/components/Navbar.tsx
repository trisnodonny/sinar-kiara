import { useEffect, useState } from "react";
import sinar from "@icons/sinar-kiara.png";

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

  return (
    <>
      <div className={`navbar ${navBgColor}`}>
        <div className="navbar-container">
          <div className="nav-logo">
            <a href="/"><img src={sinar} alt="company" /></a>
          </div>
          {width < 480 ? (
            <div>mobile</div>
          ) : (
            <div className="nav-links">
              {links.map((link, index) => (
                <a
                  className={`link ${anchor === link.target ? "is-active" : ""}`}
                  key={index}
                  href={`#${link.target}`}>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}