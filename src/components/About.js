import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import AnimatedText from "./AnimatedText";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
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
          mt: "80px", // Top margin
          mb: "80", // Bottom margin to ensure padding consistency
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
            <AnimatedText text="I'm a Data Analyst." />
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
          mt: "120px", // Top margin
          mb: "120px", // Bottom margin to ensure padding consistency
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
              color: "cee8ff",
            }}
          >
            <span
              style={{ color: "#cee8ff" }}
              className="purple"
            >
              LET ME INTRODUCE MYSELF
            </span>
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: "1.15rem", lineHeight: 1.6 }}
          >
            Hi, I’m Mohit Jain, as a Data Analyst with 3+ years of experience and
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

          {/* Social Links */}
          <Box
            sx={{ mt: 3, textAlign: { xs: "center", md: "left" }, pb: 3 }} // Added consistent bottom padding
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              FIND ME ON
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
                sx={{
                  color: "white",
                  transition: "color 0.3s",
                  "&:hover": { color: "#cee8ff" },
                }}
              >
                <AiFillGithub size={30} />
              </Link>
              {/* LinkedIn */}
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
            </Box>
          </Box>
        </Box>

        {/* Right side: avatar.svg */}
        <Box
          sx={{
            maxWidth: "300px", // Reduced maxWidth from 400px to 300px
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
            style={{ width: "100%", height: "100%" }} // Ensure Tilt doesn't exceed Box's size
          >
            <img
              src="/Photo.png"
              alt="avatar"
              style={{
                width: "100%", // Make the image take the full width of the Box
                height: "auto", // Maintain aspect ratio
                borderRadius: "8px", // Optional: rounded corners
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: subtle shadow
              }}
            />
          </Tilt>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default About;
