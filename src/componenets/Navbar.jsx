import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Products", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        bg-gray-100 border-b-2 border-gray-300
        ${scrolled ? "shadow-lg" : "shadow-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback */}
            <div className="hidden items-center gap-2" style={{ display: "none" }}>
              <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">HS</span>
              </div>
              <span className="text-gray-800 font-bold text-xl">Home Spark</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="
    relative px-5 py-2 text-lg font-semibold text-gray-800
    hover:text-gray-900
    hover:underline
    hover:decoration-gray-500
    hover:decoration-2
    hover:underline-offset-4
  "
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* CTA Button */}
            <li className="ml-3">

            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center
              w-10 h-10 rounded-lg bg-gray-200 border border-gray-300
              transition-colors duration-200 gap-1.5 hover:bg-gray-300"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300
              ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300
              ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300
              ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
<div
  className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
  ${menuOpen ? "max-h-96" : "max-h-0 pointer-events-none"}`}
>
  <ul className="bg-gray-100 border-t border-gray-300 px-4 py-3 flex flex-col gap-2">

    {navLinks.map((link) => (
      <li key={link.label}>
        <a
          href={link.href}
          className="
            relative px-5 py-2 text-lg font-semibold text-gray-800
            inline-block
            hover:text-gray-900
            hover:underline
            hover:decoration-gray-500
            hover:decoration-2
            hover:underline-offset-4
          "
        >
          {link.label}
        </a>
      </li>
    ))}

  </ul>
</div>
    </nav>
  );
}