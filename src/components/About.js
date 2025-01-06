// import React from "react";
// import { Box, Typography } from "@mui/material";
// import AnimatedText from "./AnimatedText"; // import your AnimatedText component
// import { Container, Row, Col } from "react-bootstrap";
// // import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function About() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         mt: "120px",
//         p: 2,
//         pl: "200px", // Left padding
//         pr: "200px", // Right padding
//         color: "white",
//       }}
//     >
//       {/* Left side: Text */}
//       <Box sx={{ mr: 4 }}>
//         <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#cee8ff" }}>
//           Hi there!
//           <span className="wave" role="img" aria-labelledby="wave">
//             👋🏻
//           </span>
//         </Typography>

//         <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
//           I'm Mohit Jain
//         </Typography>

//         <Typography variant="h4" sx={{ fontWeight: "bold", color: "#cee8ff" }}>
//           <AnimatedText text="I'm a Software Developer." />
//         </Typography>

//       </Box>

//       {/* Right side: Image */}
//       <Box sx={{ maxWidth: "400px" }}>
//         {/* Since it's in the public folder, we can reference it via /about.png */}
//         <img
//           src="/about.png"
//           alt="About"
//           style={{ width: "100%", height: "auto" }}
//         />
//       </Box>
//       <Container fluid className="home-about-section" id="about">
//       <Container>
//         <Row>
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//               LET ME <span className="purple"> INTRODUCE </span> MYSELF
//             </h1>
//             <p className="home-about-body">
//             Hi, I’m Anuj Sharma, a data and machine learning professional passionate about turning raw data into impactful insights. 
//               <br />
//               <br />With expertise in
//               <i>
//                 <b className="purple"> Python, SQL, Power BI,and machine learning. </b>
//               </i>
//               <br />
//               <br />
//               I deliver solutions that drive decision-making and optimize processes.

//               From predictive modeling to designing dashboards that tell compelling stories, I excel at crafting data-driven strategies to solve real-world challenges. Explore my portfolio to see how I blend advanced analytics with business intelligence to create measurable impact.

//               <i>
                
               
//               </i>
//               <br />
//               <br />
//               <b className="purple">Let’s unlock the potential of data together!</b>
              
                
//             </p>
//           </Col>
//           <Col md={4} className="myAvtar">
//             <Tilt>
//             <img 
//   src="/avatar.svg" 
//   className="img-fluid" 
//   alt="avatar" 
// />

//             </Tilt>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               {/* <li className="social-icons">
//                 <a
//                   href="https://twitter.com/Soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiOutlineTwitter />
//                 </a>
//               </li> */}
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/sharmaanuj10/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               {/* <li className="social-icons">
//                 <a
//                   href="https://www.instagram.com/soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li> */}
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
      
//     </Box>
//   );
// }

// export default About;


import React from "react";
import { Box, Typography,Container,Link} from "@mui/material";
import AnimatedText from "./AnimatedText";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,  // uncomment if needed
  // AiFillInstagram,   // uncomment if needed
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <React.Fragment>
      {/* ====== TOP SECTION ====== */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "120px",
          p: 2,
          pl: "200px", // Left padding
          pr: "200px", // Right padding
          color: "white",
        }}
      >
        {/* Left side: Text */}
        <Box sx={{ mr: 4, flex: 1 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#cee8ff" }}
          >
            Hi there!
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            I'm Mohit Jain
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#cee8ff" }}>
            <AnimatedText text="I'm a Software Developer." />
          </Typography>
        </Box>

        {/* Right side: about.png */}
        <Box sx={{ maxWidth: "400px", flex: 1 }}>
          <img
            src="/about.png"
            alt="About"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>

      {/* ====== INTRODUCE MYSELF SECTION ====== */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "120px",
          p: 2,
          pl: "200px", // same left padding
          pr: "200px", // same right padding
          color: "white",
        }}
      >
        {/* Left side: The "Introduce" text */}
        <Box sx={{ mr: 4, flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: "2.6rem", // similar to 2.6em
              mb: 2,
              color:"cee8ff"
            }}
          >
            <span style={{ color: "#cee8ff" } }className="purple"> LET ME INTRODUCE MYSELF</span> 
          </Typography>

          <Typography variant="body1" sx={{ fontSize: "1.15rem", lineHeight: 1.6 }}>
            Hi, I’m Mohit Jain, as a Data Analyst with 3+ years of experience and a Master's in Information Systems from the University of Maryland, I specialize in transforming complex data into actionable insights.
            <br />
            <br />
            With expertise in
            <span style={{ color: "#cee8ff", fontStyle: "italic", fontWeight: "bold" }}>
          {" "}
          Python, SQL, Tableau, and AWS.
  </span>
            <br />
            <br />
            I build interactive dashboards, optimize data processes, and conduct predictive analyses to drive strategic decisions. I’m passionate about solving real-world challenges through data and eager to contribute to innovative organizations.
            <br />
            <br />
            {/* <b className="purple">Let’s unlock the potential of data together!</b> */}
          </Typography>

          {/* Social Links */}
          <Box sx={{ mt: 3, textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              FIND ME ON
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Feel free to <span style={{ color: "#cee8ff" }}>connect </span>with me
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" }, // Center on small screens
                gap: 2,
              }}
            >
              {/* GitHub */}
              <Link
                href="https://github.com/jainmohit2702"
                target="_blank"
                rel="noreferrer"
                sx={{ color: "white", transition: "color 0.3s", "&:hover": { color: "#cee8ff" } }}
              >
                <AiFillGithub size={30} />
              </Link>
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/mohit-2702-jain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noreferrer"
                sx={{ color: "white", transition: "color 0.3s", "&:hover": { color: "#cee8ff" } }}
              >
                <FaLinkedinIn size={30} />
              </Link>
              {/* Add more icons as needed */}
            </Box>
          </Box>
        </Box>

        {/* Right side: avatar.svg */}
        <Box
      sx={{
        maxWidth: "300px", // Reduced maxWidth from 400px to 200px
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Vertically center the image
        margin: "auto", // Center the Box within its parent
      }}
    >
      <Tilt
        options={{
          max: 25, // Adjust the tilt intensity
          scale: 1.05, // Slightly scale the image on hover
          speed: 400, // Tilt speed
        }}
        style={{ width: '100%', height: '100%' }} // Ensure Tilt doesn't exceed Box's size
      >
        <img
          src="/Photo.png"
          alt="avatar"
          style={{
            width: '100%', // Make the image take the full width of the Box
            height: 'auto', // Maintain aspect ratio
            borderRadius: '8px', // Optional: rounded corners
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: subtle shadow
          }}
        />
      </Tilt>
    </Box>
      </Box>
    </React.Fragment>
  );
}

export default About;



// // About.js
// import React from "react";
// import { Box, Typography, Container, Link } from "@mui/material";
// import AnimatedText from "./AnimatedText";
// import Tilt from "react-parallax-tilt";
// import { AiFillGithub } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function About({ color }) {
//   return (
//     <Container maxWidth="lg" id="about">
//       {/* ====== TOP SECTION ====== */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mt: "120px",
//           p: 2,
//           pl: { xs: "20px", md: "100px", lg: "200px" }, // Responsive left padding
//           pr: { xs: "20px", md: "100px", lg: "200px" }, // Responsive right padding
//           color: "white",
//           flexDirection: { xs: "column", md: "row" }, // Stack on small screens
//         }}
//       >
//         {/* Left side: Text */}
//         <Box sx={{ mr: { md: 4 }, flex: 1, mb: { xs: 4, md: 0 } }}>
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{ fontWeight: "bold", color: "#cee8ff" }}
//           >
//             Hi there!
//             <span className="wave" role="img" aria-labelledby="wave">
//               👋🏻
//             </span>
//           </Typography>

//           <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
//             I'm Mohit Jain
//           </Typography>

//           <Typography variant="h4" sx={{ fontWeight: "bold", color: "#cee8ff" }}>
//             <AnimatedText text="I'm a Software Developer." />
//           </Typography>
//         </Box>

//         {/* Right side: about.png */}
//         <Box sx={{ maxWidth: "400px", flex: 1 }}>
//           <img
//             src="/about.png"
//             alt="About"
//             style={{ width: "100%", height: "auto" }}
//           />
//         </Box>
//       </Box>

//       {/* ====== INTRODUCE MYSELF SECTION ====== */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mt: "120px",
//           p: 2,
//           pl: { xs: "20px", md: "100px", lg: "200px" }, // Same responsive left padding
//           pr: { xs: "20px", md: "100px", lg: "200px" }, // Same responsive right padding
//           color: "white",
//           flexDirection: { xs: "column", md: "row" }, // Stack on small screens
//         }}
//       >
//         {/* Left side: The "Introduce" text */}
//         <Box sx={{ mr: { md: 4 }, flex: 1, mb: { xs: 4, md: 0 } }}>
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               fontSize: "2.6rem",
//               mb: 2,
//               color: "#cee8ff", // Set the desired color
//             }}
//           >
//             LET ME <span style={{ color: "#cee8ff" }}>INTRODUCE</span> MYSELF
//           </Typography>

//           <Typography variant="body1" sx={{ fontSize: "1.15rem", lineHeight: 1.6 }}>
//             Hi, I’m Anuj Sharma, a data and machine learning professional
//             passionate about turning raw data into impactful insights.
//             <br />
//             <br />
//             With expertise in
//             <span style={{ color: "#cee8ff", fontStyle: "italic", fontWeight: "bold" }}>
//               {" "}
//               Python, SQL, Power BI, and machine learning.
//             </span>
//             <br />
//             <br />
//             I deliver solutions that drive decision-making and optimize
//             processes. From predictive modeling to designing dashboards that
//             tell compelling stories, I excel at crafting data-driven strategies
//             to solve real-world challenges. Explore my portfolio to see how I
//             blend advanced analytics with business intelligence to create
//             measurable impact.
//             <br />
//             <br />
//             <span style={{ color: "#cee8ff", fontWeight: "bold" }}>Let’s unlock the potential of data together!</span>
//           </Typography>

//           {/* Social Links */}
//           <Box sx={{ mt: 3 }}>
//             <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
//               FIND ME ON
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 2 }}>
//               Feel free to <span style={{ color: "#cee8ff" }}>connect </span>with me
//             </Typography>
//             <Box sx={{ display: "flex", gap: 2 }}>
//               {/* GitHub */}
//               <Link
//                 href="https://github.com/soumyajit4419"
//                 target="_blank"
//                 rel="noreferrer"
//                 sx={{ color: "white" }}
//               >
//                 <AiFillGithub size={30} />
//               </Link>
//               {/* LinkedIn */}
//               <Link
//                 href="https://www.linkedin.com/in/sharmaanuj10/"
//                 target="_blank"
//                 rel="noreferrer"
//                 sx={{ color: "white" }}
//               >
//                 <FaLinkedinIn size={30} />
//               </Link>
//               {/* Add more icons as needed */}
//             </Box>
//           </Box>
//         </Box>

//         {/* Right side: avatar.svg */}
//         <Box sx={{ maxWidth: "400px", flex: 1 }}>
//           <Tilt>
//             <img src="/avatar.svg" className="img-fluid" alt="avatar" />
//           </Tilt>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default About;
