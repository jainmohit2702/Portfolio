import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
        {/* GitHub Icon */}
        <a
          href="https://github.com/jainmohit2702"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaGithub style={styles.icon} />
        </a>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/mohit-2702-jain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaLinkedin style={styles.icon} />
        </a>
        {/* Tableau Icon */}
        <a
          href="https://public.tableau.com/app/profile/mohit.jain3059/vizzes"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <SiTableau style={styles.icon} />
        </a>
      </div>
      <p style={styles.text}>© 2025. All rights reserved</p>
    </footer>
  );
}

// Inline styles
const styles = {
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "60px", // Match the navbar's 60px height
    display: "flex",
    flexDirection: "column", // Arrange icons and text vertically
    alignItems: "center", // Centers items horizontally
    justifyContent: "center",
    backgroundColor: "#cee8ff",
    color: "#1F3A5F",
    zIndex: 999,
  },
  iconContainer: {
    display: "flex",
    gap: "15px", // Space between icons
    marginBottom: "5px", // Space between icons and text
  },
  iconLink: {
    textDecoration: "none",
  },
  icon: {
    fontSize: "24px",
    color: "#000", // Black color for icons
    transition: "color 0.3s ease", // Smooth hover transition
  },
  iconHover: {
    color: "#1F3A5F", // Optional hover color
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
};

export default Footer;
