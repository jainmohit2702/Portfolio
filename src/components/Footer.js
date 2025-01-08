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
    alignItems: "center", // Vertically center the items
    backgroundColor: "#cee8ff",
    color: "#1F3A5F",
    zIndex: 999,
    paddingLeft: "30px", // Padding for the icons on the left
    paddingRight: "30px", // Padding for the text on the right
    justifyContent: "space-between", // Ensures space between icons and text
  },
  iconContainer: {
    display: "flex",
    gap: "15px", // Space between icons
    justifyContent: "flex-start", // Align icons to the left
  },
  iconLink: {
    textDecoration: "none",
  },
  icon: {
    fontSize: "24px",
    color: "#000", // Black color for icons
    transition: "color 0.3s ease", // Smooth hover transition
  },
  text: {
    margin: 0,
    fontSize: "14px",
    textAlign: "right", // Align text to the right side
    paddingLeft: "30px", // Padding on the left to balance with icons' padding
    paddingRight: "65px", // Padding on the right for text
    flex: 1, // Ensures the text takes up the available space between the icons
  },
};

export default Footer;
