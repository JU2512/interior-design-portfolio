import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Extracurricular", path: "/extracurricular" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 border-b border-border backdrop-blur-md"
      style={{ background: "rgba(255,255,255,0.85)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-heading text-lg text-foreground font-bold">Deepak Urade</span>
          <span className="font-body text-xs text-muted-foreground tracking-wide italic">Interior Design Portfolio</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm font-bold transition-colors duration-200 ${
                pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="md:hidden border-b border-border px-6 pb-6 pt-2 animate-in slide-in-from-top duration-200"
          style={{ background: "rgba(255,255,255,0.85)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 font-body text-sm font-bold border-b border-border last:border-0 ${
                pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
