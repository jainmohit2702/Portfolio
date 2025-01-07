// import React from "react";
// import { Box, Typography, Container, Link } from "@mui/material";
// import AnimatedText from "./AnimatedText";
// import Tilt from "react-parallax-tilt";
// import { AiFillGithub } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function About() {
//   return (
//     <React.Fragment>
//       {/* ====== TOP SECTION ====== */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mt: "80px", // Top margin
//           mb: "80", // Bottom margin to ensure padding consistency
//           p: 2,
//           pl: "200px", // Left padding
//           pr: "200px", // Right padding
//           color: "white",
//         }}
//       >
//         {/* Left side: Text */}
//         <Box sx={{ mr: 4, flex: 1 }}>
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
//             <AnimatedText text="I'm a Data Analyst." />
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
//           mt: "120px", // Top margin
//           mb: "120px", // Bottom margin to ensure padding consistency
//           p: 2,
//           pl: "200px", // same left padding
//           pr: "200px", // same right padding
//           color: "white",
//         }}
//       >
//         {/* Left side: The "Introduce" text */}
//         <Box sx={{ mr: 4, flex: 1 }}>
//           {/* <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               fontSize: "2.6rem", // similar to 2.6em
//               mb: 2,
//               color: "cee8ff",
//             }} */}
          
//             {/* <span
//               style={{ color: "#cee8ff" }}
//               className="purple"
//             >
//               LET ME INTRODUCE MYSELF
//             </span> */}
//           {/* </Typography> */}

//           <Typography
//             variant="body1"
//             sx={{ fontSize: "1.15rem", lineHeight: 1.6 }}
//           >
//             Hi, I’m Mohit Jain, as a Data Analyst with 3+ years of experience and
//             a Master's in Information Systems from the University of Maryland, I
//             specialize in transforming complex data into actionable insights.
//             <br />
//             <br />
//             With expertise in
//             <span
//               style={{
//                 color: "#cee8ff",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//               }}
//             >
//               {" "}
//               Python, SQL, Tableau, and AWS.
//             </span>
//             <br />
//             <br />
//             I build interactive dashboards, optimize data processes, and conduct
//             predictive analyses to drive strategic decisions. I’m passionate
//             about solving real-world challenges through data and eager to
//             contribute to innovative organizations.
//           </Typography>

//           {/* Social Links */}
//           <Box
//             sx={{ mt: 3, textAlign: { xs: "center", md: "left" }, pb: 3 }} // Added consistent bottom padding
//           >
//             <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
//               FIND ME ON
//             </Typography>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: { xs: "center", md: "flex-start" }, // Center on small screens
//                 gap: 2,
//               }}
//             >
//               {/* GitHub */}
//               <Link
//                 href="https://github.com/jainmohit2702"
//                 target="_blank"
//                 rel="noreferrer"
//                 sx={{
//                   color: "white",
//                   transition: "color 0.3s",
//                   "&:hover": { color: "#cee8ff" },
//                 }}
//               >
//                 <AiFillGithub size={30} />
//               </Link>
//               {/* LinkedIn */}
//               <Link
//                 href="https://www.linkedin.com/in/mohit-2702-jain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
//                 target="_blank"
//                 rel="noreferrer"
//                 sx={{
//                   color: "white",
//                   transition: "color 0.3s",
//                   "&:hover": { color: "#cee8ff" },
//                 }}
//               >
//                 <FaLinkedinIn size={30} />
//               </Link>
//             </Box>
//           </Box>
//         </Box>

//         {/* Right side: avatar.svg */}
//         <Box
//           sx={{
//             maxWidth: "300px", // Reduced maxWidth from 400px to 300px
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center", // Vertically center the image
//             margin: "auto", // Center the Box within its parent
//           }}
//         >
//           <Tilt
//             options={{
//               max: 25, // Adjust the tilt intensity
//               scale: 1.05, // Slightly scale the image on hover
//               speed: 400, // Tilt speed
//             }}
//             style={{ width: "100%", height: "100%" }} // Ensure Tilt doesn't exceed Box's size
//           >
//             <img
//               src="/Photo.png"
//               alt="avatar"
//               style={{
//                 width: "100%", // Make the image take the full width of the Box
//                 height: "auto", // Maintain aspect ratio
//                 borderRadius: "8px", // Optional: rounded corners
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: subtle shadow
//               }}
//             />
//           </Tilt>
//         </Box>
//       </Box>
//     </React.Fragment>
//   );
// }

// export default About;


// import React from "react";
// import { Box, Typography, Container, Link } from "@mui/material";
// import AnimatedText from "./AnimatedText";
// import Tilt from "react-parallax-tilt";
// import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
// import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

// function About() {
//   return (
//     <React.Fragment>
//       {/* ====== TOP SECTION ====== */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mt: "80px", // Top margin
//           mb: "80", // Bottom margin to ensure padding consistency
//           p: 2,
//           pl: "200px", // Left padding
//           pr: "200px", // Right padding
//           color: "white",
//         }}
//       >
//         {/* Left side: Text */}
//         <Box sx={{ mr: 4, flex: 1 }}>
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
//             <AnimatedText text="I'm a Data Analyst." />
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
//           mt: "120px", // Top margin
//           mb: "120px", // Bottom margin to ensure padding consistency
//           p: 2,
//           pl: "200px", // same left padding
//           pr: "200px", // same right padding
//           color: "white",
//         }}
//       >
//         {/* Left side: The "Introduce" text */}
//         <Box
//           sx={{
//             mr: 4,
//             flex: 1,
//             maxWidth: "600px", // Max width for the box
//             p: 2, // Padding inside the box
//             backgroundColor: "rgba(255, 255, 255, 0.03)", // Light background for the text box
//             borderRadius: "8px", // Rounded corners
//             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
//             overflow: "hidden", // Prevents text overflow
//             height: "auto", // Ensures the box grows with the content
//             textAlign: "left", // Align text to the left inside the box
//           }}
//         >
//           <Typography
//             variant="body1"
//             sx={{ fontSize: "1.15rem", lineHeight: 1.6 }}
//           >
//             As a Data Analyst with 3+ years of experience and
//             a Master's in Information Systems from the University of Maryland, I
//             specialize in transforming complex data into actionable insights.
//             <br />
//             <br />
//             With expertise in
//             <span
//               style={{
//                 color: "#cee8ff",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//               }}
//             >
//               {" "}
//               Python, SQL, Tableau, and AWS.
//             </span>
//             <br />
//             <br />
//             I build interactive dashboards, optimize data processes, and conduct
//             predictive analyses to drive strategic decisions. I’m passionate
//             about solving real-world challenges through data and eager to
//             contribute to innovative organizations.
//           </Typography>
//         </Box>

//         {/* Right side: avatar.svg */}
//         <Box
//           sx={{
//             maxWidth: "300px", // Reduced maxWidth from 400px to 300px
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center", // Vertically center the image
//             margin: "auto", // Center the Box within its parent
//           }}
//         >
//           <Tilt
//             options={{
//               max: 25, // Adjust the tilt intensity
//               scale: 1.05, // Slightly scale the image on hover
//               speed: 400, // Tilt speed
//             }}
//             style={{ width: "100%", height: "100%" }} // Ensure Tilt doesn't exceed Box's size
//           >
//             <img
//               src="/Photo.png"
//               alt="avatar"
//               style={{
//                 width: "100%", // Make the image take the full width of the Box
//                 height: "auto", // Maintain aspect ratio
//                 borderRadius: "8px", // Optional: rounded corners
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: subtle shadow
//               }}
//             />
//           </Tilt>
//         </Box>
//       </Box>

//       {/* ====== CONTACT INFO SECTION ====== */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column", // Arrange icons vertically
//           justifyContent: "center",
//           alignItems: "center",
//           gap: 3,
//           mb: "40px",
//         }}
//       >
//         {/* "Let's Connect!" Text */}
//         <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
//           Let's Connect!
//         </Typography>

//         {/* Social Icons */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             gap: 3,
//           }}
//         >
//           {/* LinkedIn Icon */}
//           <Link
//             href="https://www.linkedin.com/in/mohit-2702-jain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
//             target="_blank"
//             rel="noreferrer"
//             sx={{
//               color: "white",
//               transition: "color 0.3s",
//               "&:hover": { color: "#cee8ff" },
//             }}
//           >
//             <FaLinkedinIn size={30} />
//           </Link>

//           {/* GitHub Icon */}
//           <Link
//             href="https://github.com/jainmohit2702"
//             target="_blank"
//             rel="noreferrer"
//             sx={{
//               color: "white",
//               transition: "color 0.3s",
//               "&:hover": { color: "#cee8ff" },
//             }}
//           >
//             <AiFillGithub size={30} />
//           </Link>

//           {/* Email Icon */}
//           <Link
//             href="mailto:example@example.com"  // Replace with a valid email
//             target="_blank"
//             rel="noreferrer"
//             sx={{
//               color: "white",
//               transition: "color 0.3s",
//               "&:hover": { color: "#cee8ff" },
//             }}
//           >
//             <AiOutlineMail size={30} />
//           </Link>

//           {/* Phone Icon */}
//           <Link
//             href="tel:+1234567890"  // Replace with a valid phone number
//             target="_blank"
//             rel="noreferrer"
//             sx={{
//               color: "white",
//               transition: "color 0.3s",
//               "&:hover": { color: "#cee8ff" },
//             }}
//           >
//             <FaPhoneAlt size={30} />
//           </Link>
//         </Box>
//       </Box>
//     </React.Fragment>
//   );
// }

// export default About;




// import React from "react";
// import { Box, Typography, Link } from "@mui/material";
// import AnimatedText from "./AnimatedText";
// import Tilt from "react-parallax-tilt";
// import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
// import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

// function About() {
//   return (
//     <React.Fragment>
//       {/* ====== TOP SECTION ====== */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mt: "0px", // Top margin
//           mb: "40px", // Bottom margin to ensure padding consistency
//           p: 2,
//           pl: "200px", // Left padding
//           pr: "200px", // Right padding
//           color: "white",
//         }}
//       >
//         {/* Left side: Text */}
//         <Box sx={{ mr: 4, flex: 1 }}>
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{ fontWeight: "bold", color: "white" }}
//           >
//             Hi there!
//             <span className="wave" role="img" aria-labelledby="wave">
//               👋🏻
//             </span>
//           </Typography>

//           <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold",color: "#cee8ff"  }}>
//             I'm Mohit Jain.
//             {/* <Typography variant="h4" sx={{ fontWeight: "bold", color: "#cee8ff" }}>
//             <AnimatedText text="I'm a Data Analyst." />
//           </Typography> */}
//           </Typography>

//           {/* <Typography variant="h4" sx={{ fontWeight: "bold", color: "#cee8ff" }}>
//             <AnimatedText text="I'm a Data Analyst." />
//           </Typography> */}
//           <Box
//           sx={{
//             mr: 4,
//             flex: 1,
//             maxWidth: "1700px", // Max width for the box
//             p: 2, // Padding inside the box
//             backgroundColor: "rgba(255, 255, 255, 0.03)", // Light background for the text box
//             borderRadius: "8px", // Rounded corners
//             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
//             overflow: "hidden", // Prevents text overflow
//             height: "auto", // Ensures the box grows with the content
//             textAlign: "left", // Align text to the left inside the box
//           }}
//         >
//           <Typography
//             variant="body1"
//             sx={{ fontSize: "1.15rem", lineHeight: 1.6 }}
//           >
//             <AnimatedText text="As a Data Analyst"/> with 3+ years of experience and
//             a Master's in Information Systems from the University of Maryland, I
//             specialize in transforming complex data into actionable insights.
//             <br />
//             <br />
//             With expertise in
//             <span
//               style={{
//                 color: "#cee8ff",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//               }}
//             >
//               {" "}
//               Python, SQL, Tableau, and AWS.
//             </span>
//             <br />
//             <br />
//             I build interactive dashboards, optimize data processes, and conduct
//             predictive analyses to drive strategic decisions. I’m passionate
//             about solving real-world challenges through data and eager to
//             contribute to innovative organizations.
//           </Typography>
//         </Box>
      
//         </Box>
        

//         {/* Right side: photo.png with Tilt effect */}
//         <Box sx={{ maxWidth: "350px", flex: 1 }}>
//           <Tilt
//             options={{
//               max: 25, // Adjust the tilt intensity
//               scale: 1.05, // Slightly scale the image on hover
//               speed: 400, // Tilt speed
//             }}
//             style={{ width: "100%", height: "100%" }} // Ensure Tilt doesn't exceed Box's size
//           >
//             <img
//               src="/Photo.png"
//               alt="About"
//               style={{
//                 width: "100%", // Make the image take the full width of the Box
//                 height: "auto", // Maintain aspect ratio
//                 borderRadius: "8px", // Optional: rounded corners
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: subtle shadow
//               }}
//             />
//           </Tilt>
//         </Box>
//       </Box>

//       {/* ====== INTRODUCE MYSELF SECTION ====== */}
//       {/* <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mt: "0", // Removed margin to bring the introduction text closer
//           mb: "120px", // Bottom margin to ensure padding consistency
//           p: 2,
//           pl: "200px", // same left padding
//           pr: "200px", // same right padding
//           color: "white",
//         }}
//       > */}
//         {/* Left side: The "Introduce" text */}
//         {/* <Box
//           sx={{
//             mr: 4,
//             flex: 1,
//             maxWidth: "600px", // Max width for the box
//             p: 2, // Padding inside the box
//             backgroundColor: "rgba(255, 255, 255, 0.03)", // Light background for the text box
//             borderRadius: "8px", // Rounded corners
//             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
//             overflow: "hidden", // Prevents text overflow
//             height: "auto", // Ensures the box grows with the content
//             textAlign: "left", // Align text to the left inside the box
//           }}
//         >
//           <Typography
//             variant="body1"
//             sx={{ fontSize: "1.15rem", lineHeight: 1.6 }}
//           >
//             As a Data Analyst with 3+ years of experience and
//             a Master's in Information Systems from the University of Maryland, I
//             specialize in transforming complex data into actionable insights.
//             <br />
//             <br />
//             With expertise in
//             <span
//               style={{
//                 color: "#cee8ff",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//               }}
//             >
//               {" "}
//               Python, SQL, Tableau, and AWS.
//             </span>
//             <br />
//             <br />
//             I build interactive dashboards, optimize data processes, and conduct
//             predictive analyses to drive strategic decisions. I’m passionate
//             about solving real-world challenges through data and eager to
//             contribute to innovative organizations.
//           </Typography>
//         </Box>
//       </Box> */}

//       {/* ====== CONTACT INFO SECTION ====== */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column", // Arrange icons vertically
//           justifyContent: "center",
//           alignItems: "center",
//           gap: 3,
//           mb: "40px",
//         }}
//       >
//         {/* "Let's Connect!" Text */}
//         <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
//           Let's Connect!
//         </Typography>

//         {/* Social Icons */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             gap: 3,
//           }}
//         >
//           {/* LinkedIn Icon */}
//           <Link
//             href="https://www.linkedin.com/in/mohit-2702-jain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
//             target="_blank"
//             rel="noreferrer"
//             sx={{
//               color: "white",
//               transition: "color 0.3s",
//               "&:hover": { color: "#cee8ff" },
//             }}
//           >
//             <FaLinkedinIn size={30} />
//           </Link>

//           {/* GitHub Icon */}
//           <Link
//             href="https://github.com/jainmohit2702"
//             target="_blank"
//             rel="noreferrer"
//             sx={{
//               color: "white",
//               transition: "color 0.3s",
//               "&:hover": { color: "#cee8ff" },
//             }}
//           >
//             <AiFillGithub size={30} />
//           </Link>

//           {/* Email Icon */}
//           <Link
//             href="mailto:example@example.com"  // Replace with a valid email
//             target="_blank"
//             rel="noreferrer"
//             sx={{
//               color: "white",
//               transition: "color 0.3s",
//               "&:hover": { color: "#cee8ff" },
//             }}
//           >
//             <AiOutlineMail size={30} />
//           </Link>

//           {/* Phone Icon */}
//           <Link
//             href="tel:+1234567890"  // Replace with a valid phone number
//             target="_blank"
//             rel="noreferrer"
//             sx={{
//               color: "white",
//               transition: "color 0.3s",
//               "&:hover": { color: "#cee8ff" },
//             }}
//           >
//             <FaPhoneAlt size={30} />
//           </Link>
//         </Box>
//       </Box>
//     </React.Fragment>
//   );
// }

// export default About;



import React from "react";
import { Box, Typography, Link } from "@mui/material";
import AnimatedText from "./AnimatedText";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

function About() {
  return (
    <React.Fragment>
      {/* ====== TOP SECTION ====== */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "0px", // Top margin
          mb: "40px", // Bottom margin to ensure padding consistency
          p: 2,
          pl: "100px", // Left padding
          pr: "100px", // Right padding
          color: "white",
        }}
      >
        {/* Left side: photo.png with Tilt effect */}
        <Box sx={{ maxWidth: "350px",  mr: 20 , display: "flex", justifyContent: "center", alignItems: "center" }}>  {/* Added margin-right for the gap */}
          <Tilt
            options={{
              max: 25, // Adjust the tilt intensity
              scale: 1.05, // Slightly scale the image on hover
              speed: 400, // Tilt speed
            }}
            style={{ width: "100%", height: "100%" }} // Ensure Tilt doesn't exceed Box's size
          >
            <img
              src="/Photo.png"
              alt="About"
              style={{
                width: "100%", // Make the image take the full width of the Box
                height: "auto", // Maintain aspect ratio
                borderRadius: "8px", // Optional: rounded corners
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: subtle shadow
              }}
            />
          </Tilt>
        </Box>

        {/* Right side: Text */}
        <Box sx={{ mr: 4, flex: 1 }}>
        <Typography
  variant="h4"
  sx={{
    fontWeight: "bold",
    color: "white",
    textAlign: "center", // Align text to the center
  }}
>
  Hi there!
  <span className="wave" role="img" aria-labelledby="wave">
    👋🏻
  </span>{" "}
  <span style={{ color: "#cee8ff" }}>I'm Mohit Jain</span>
</Typography>

          <Box
             sx={{
              mr: 4,
              flex: 1,
              maxWidth: "2400px", // Max width for the box
              p: 2, // Padding inside the box
              backgroundColor: "rgba(255, 255, 255, 0.03)", // Light background for the text box
              borderRadius: "8px", // Rounded corners
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
              overflow: "hidden", // Prevents text overflow
              height: "auto", // Ensures the box grows with the content
              textAlign: "left", // Align text to the left inside the box
              transition: "box-shadow 0.3s ease", // Smooth transition for box-shadow
              "&:hover": {
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)", // White glow on hover
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "1.15rem", lineHeight: 1.6 }}
            >
             As a Data Analyst with 3+ years of experience and
              a Master's in Information Systems from the University of Maryland, I
              specialize in transforming complex data into actionable insights.
              <br />
              <br />
              With expertise in
              <span
                style={{
                  color: "#cee8ff",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Python, SQL, Tableau, and AWS.
              </span>
              <br />
              <br />
              I build interactive dashboards, optimize data processes, and conduct
              predictive analyses to drive strategic decisions. I’m passionate
              about solving real-world challenges through data and eager to
              contribute to innovative organizations.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ====== CONTACT INFO SECTION ====== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Arrange icons vertically
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          mb: "10px",
        }}
      >
        {/* "Let's Connect!" Text */}
        <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
          Let's Connect!
        </Typography>

        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {/* LinkedIn Icon */}
          <Link
            href="https://www.linkedin.com/in/mohit-2702-jain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#cee8ff" },
            }}
          >
            <FaLinkedinIn size={30} />
          </Link>

          {/* GitHub Icon */}
          <Link
            href="https://github.com/jainmohit2702"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#cee8ff" },
            }}
          >
            <AiFillGithub size={30} />
          </Link>

          {/* Email Icon */}
          <Link
            href="mailto:mohitjain2502@gmail.com"  // Replace with a valid email
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#cee8ff" },
            }}
          >
            <AiOutlineMail size={30} />
          </Link>

          {/* Phone Icon */}
          <Link
            href="tel:240-991-3333"  // Replace with a valid phone number
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#cee8ff" },
            }}
          >
            <FaPhoneAlt size={30} />
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default About;
