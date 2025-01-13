// // src/components/Nav.js
// import React from "react";
// import { Link } from "react-router-dom";
// import ProfileArray from "./ProfileArray";
// import { TbDownload } from "react-icons/tb";

// // Importing additional icons for navigation buttons
// import { AiOutlineInfo } from "react-icons/ai"; // About
// import { FaBriefcase, FaFolderOpen, FaStar } from "react-icons/fa"; // Experience, Projects, Extras
// import "./Nav.css"; // Import the CSS file

// const TbIcons = require("react-icons/tb");

// function Nav() {
//   const profile = ProfileArray();

//   const TbLetterComponents = [];
//   for (let i = 0; i < profile.logo.length; i++) {
//     const letter = profile.logo[i];
//     const IconComponent = TbIcons[`TbLetter${letter}`];
//     if (IconComponent) {
//       TbLetterComponents.push(IconComponent);
//     }
//   }

//   return (
//     <nav style={styles.navbar}>
//       {/* Logo */}
//       <div style={styles.logo}>
//         <Link to="/" style={styles.logoLink}>
//           {TbLetterComponents.map((Icon, index) => (
//             <Icon key={index} style={styles.logoIcon} />
//           ))}
//         </Link>
//       </div>

//       {/* Download Resume Button */}
//       <div className="downloadButtonContainer">
//         <a href="/resume.pdf" download className="downloadButton" aria-label="Download Resume">
//           <TbDownload className="downloadIcon" />
//           Download Resume
//         </a>
//       </div>

//       {/* Navigation Links */}
//       <div style={styles.links}>
//         <Link to="/" className="navLink">
//           <AiOutlineInfo className="navIcon" />
//           About
//         </Link>
//         <Link to="/experience" className="navLink">
//           <FaBriefcase className="navIcon" />
//           Experience
//         </Link>
//         <Link to="/projects" className="navLink">
//           <FaFolderOpen className="navIcon" />
//           Projects
//         </Link>
//         <Link to="/extras" className="navLink">
//           <FaStar className="navIcon" />
//           Certifications
//         </Link>
//       </div>
//     </nav>
//   );
// }

// const styles = {
//   navbar: {
//     position: "fixed",
//     top: 0,
//     width: "100%",
//     height: "60px",
//     backgroundColor: "#cee8ff",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 20px",
//     zIndex: 999,
//   },
//   logo: {
//     display: "flex",
//     alignItems: "center",
//   },
//   logoLink: {
//     textDecoration: "none",
//     color: "#fff",
//     display: "flex",
//   },
//   logoIcon: {
//     fontSize: "24px",
//     marginRight: "4px",
//   },
//   links: {
//     display: "flex",
//     gap: "20px",
//     marginRight: "80px", // Shift the links container left
//   },
// };

// export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import ProfileArray from "./ProfileArray";


import { FaUser } from "react-icons/fa"; // Changed to FaUser icon
import { TbDownload } from "react-icons/tb";

// Importing additional icons for navigation buttons
import { AiOutlineInfo } from "react-icons/ai"; // About
import { FaBriefcase, FaFolderOpen, FaStar } from "react-icons/fa"; // Experience, Projects, Extras
import "./Nav.css"; // Import the CSS file

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
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" className="logoLink">
          {TbLetterComponents.map((Icon, index) => (
            <Icon key={index} className="logoIcon" />
          ))}
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="links">
        <Link to="/" className="navLink">
        <FaUser className="navIcon" />
          About
        </Link>
        <Link to="/experience" className="navLink">
          <FaBriefcase className="navIcon" />
          Experience
        </Link>
        <Link to="/projects" className="navLink">
          <FaFolderOpen className="navIcon" />
          Projects
        </Link>
        <Link to="/extras" className="navLink">
          <FaStar className="navIcon" />
          Certifications
        </Link>
      </div>

      {/* Download Resume Button */}
      <div className="downloadButtonContainer">
        <a href="/Resume.pdf" download className="downloadButton" aria-label="Download Resume">
          <TbDownload className="downloadIcon" />
          Download Resume
        </a>
      </div>
    </nav>
  );
}

export default Nav;

