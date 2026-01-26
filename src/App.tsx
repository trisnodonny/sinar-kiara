import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import PortfolioSection from "./components/PortfolioSection";

function App() {
  const [anchor, setAnchor] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const sections = ["about", "services", "portfolio", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentAnchor = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentAnchor = id;
          }
        }
      });

      setAnchor((prev) => {
        if (prev !== currentAnchor) {
          if (currentAnchor === "home") {
            window.history.replaceState(
              null,
              "",
              window.location.pathname + window.location.search
            );
          } else {
            window.history.replaceState(
              null,
              "",
              window.location.pathname +
              window.location.search +
              "#" +
              currentAnchor
            );
          }
          return currentAnchor;
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar anchor={anchor} />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
      <div id="contact" className="container">contact</div>
    </>
  )
}

export default App
