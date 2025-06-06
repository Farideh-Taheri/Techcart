import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
        console.log("scrollY:", window.scrollY);
        console.log("ScrollToTop mounted");
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollUp}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "30px",
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        padding: "10px",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      <FaArrowUp />
    </button>
  ) : null;
}
