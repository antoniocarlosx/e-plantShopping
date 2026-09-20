import { useState } from "react";
import "./NavBar.css";

const NavBar = ({ links, appName, iconLink, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="navbar-header">
        <div className="nav-title">
          <div className="title-container">
            <img className="app-icon" src={iconLink} alt={appName} />
            <span id="home" className="app-name">
              {appName}
            </span>
            
          </div>
          <button
            type="button"
            className={`menu-toggler ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir Menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul className="nav-list">
            {links?.map((link) => (
              <li key={link.href} className="nav-list-item">
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">{children}</div>
      </header>
    </>
  );
};

export default NavBar;
