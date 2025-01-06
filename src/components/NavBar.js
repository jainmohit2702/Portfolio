import React from "react";
import { Link } from "react-router-dom";
import ProfileArray from "./ProfileArray";
import { TbDownload } from "react-icons/tb";
import "./Nav.css"; // import the CSS file you created
const TbIcons = require("react-icons/tb");

function Nav() {
  const profile = ProfileArray();

  const TbLetterComponents = [];
  for (let i = 0; i < profile.logo.length; i++) {
    const letter = profile.logo[i];
    const IconComponent = TbIcons[`TbLetter${letter}`];
    if (IconComponent) {
      TbLetterComponents.push(IconComponent);
    }
  }

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          {TbLetterComponents.map((Icon, index) => (
            <Icon key={index} style={styles.logoIcon} />
          ))}
        </Link>
      </div>
      <div className="downloadButtonContainer">
        <a href="/resume.pdf" download className="downloadButton" aria-label="Download Resume">
          <TbDownload className="downloadIcon" />
          Download Resume
        </a>
      </div>

      {/* Navigation Links */}
      <div style={styles.links}>
        <Link to="/" className="navLink">
          About
        </Link>
        <Link to="/experience" className="navLink">
          Experience
        </Link>
        <Link to="/projects" className="navLink">
          Projects
        </Link>
        <Link to="/extras" className="navLink">
          Extras
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "#cee8ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    zIndex: 999,
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoLink: {
    textDecoration: "none",
    color: "#fff",
    display: "flex",
  },
  logoIcon: {
    fontSize: "24px",
    marginRight: "4px",
  },
  links: {
    display: "flex",
    gap: "20px",
    marginRight: "80px", // ← shift the links container left
  },
};


export default Nav;
