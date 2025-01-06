import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025. All rights reserved</p>
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
    height: "60px",              // Match the navbar's 60px height
    display: "flex",
    alignItems: "center",        // Centers text vertically
    justifyContent: "center",    // Centers text horizontally
    backgroundColor: "#cee8ff",
    color: "#1F3A5F",
    zIndex: 999, 
  },
};

export default Footer;
