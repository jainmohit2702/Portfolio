// Experience.js
import React from "react";
import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Avatar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Experience() {
  // Sample Experience Data
  const experiences = [
    {
      company: "Tech Innovators Inc.",
      position: "Frontend Developer",
      duration: "Jan 2023 - Present",
      image: "/tech_innovators.png", // Ensure this image exists in the public folder
      tags: ["Frontend"],
      responsibilities: [
        "Developed responsive user interfaces using React and Material-UI.",
        "Collaborated with designers to implement modern web designs.",
        "Optimized application performance, reducing load times by 30%.",
      ],
      technologies: ["React", "Material-UI", "JavaScript"],
    },
    {
      company: "Data Analytics Corp.",
      position: "Data Scientist",
      duration: "Jun 2021 - Dec 2022",
      image: "/data_analytics.png", // Ensure this image exists in the public folder
      tags: ["Data Science"],
      responsibilities: [
        "Built predictive models using Python and scikit-learn.",
        "Analyzed large datasets to extract actionable insights.",
        "Designed interactive dashboards with Power BI.",
      ],
      technologies: ["Python", "scikit-learn", "Power BI"],
    },
    {
      company: "Web Solutions LLC",
      position: "Full Stack Developer",
      duration: "Mar 2019 - May 2021",
      image: "/web_solutions.png", // Ensure this image exists in the public folder
      tags: ["Full Stack"],
      responsibilities: [
        "Developed end-to-end web applications using MERN stack.",
        "Implemented RESTful APIs and integrated third-party services.",
        "Led a team of 5 developers to deliver projects on time.",
      ],
      technologies: ["MongoDB", "Express.js", "Node.js", "React"],
    },
    {
      company: "AI Solutions Ltd.",
      position: "Machine Learning Engineer",
      duration: "Jan 2018 - Feb 2019",
      image: "/ai_solutions.png", // Ensure this image exists in the public folder
      tags: ["Data Science"],
      responsibilities: [
        "Implemented machine learning algorithms for data analysis.",
        "Worked on natural language processing projects.",
        "Collaborated with cross-functional teams to deploy ML models.",
      ],
      technologies: ["TensorFlow", "Keras", "Python"],
    },
    // Add more experience entries as needed
  ];

  return (
    <Container
      maxWidth="md" // Reverted back to 'md' to maintain original size
      id="experience"
      sx={{
        py: { xs: 4, md: 8 }, // Vertical padding
        pl: { xs: 2, sm: 4, md: 6 }, // Left padding
        pr: { xs: 2, sm: 4, md: 6 }, // Right padding
        boxSizing: "border-box",
        marginLeft: 0, // Align Container to the left
        marginRight: "auto", // Prevent centering
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: "left", mb: 4 }}>
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            color: "#1F3A5F",
            fontWeight: "bold",
            mb: 2,
            textAlign: "left", // Ensures left alignment
          }}
        >
          My Experience
        </Typography>
        {/* Subtitle: "My Professional Journey" */}
        <Typography
          variant="h4" // Kept as h4 for larger text
          sx={{
            color: "#cee8ff",
            fontWeight: "bold",
            mb: 4,
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" }, // Increased font size
            textAlign: "left", // Ensures left alignment
          }}
        >
          My Professional Journey
        </Typography>
      </Box>

      {/* Accordion Section */}
      <Box>
        {experiences.map((exp, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "#acc2ef",
              color: "#1F3A5F",
              mb: 2,
              "&::before": {
                display: "none", // Remove the default divider line
              },
              boxShadow: "none", // Optional: Remove shadow for a flatter look
              "&:not(:last-child)": {
                borderBottom: "1px solid #ccc", // Optional: Add bottom border except for the last accordion
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1F3A5F" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: 0, // Remove default margin
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  src={exp.image}
                  alt={exp.company}
                  sx={{ width: 56, height: 56, mr: 2 }}
                />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1F3A5F" }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "#1F3A5F" }}>
                    {exp.position} &middot; {exp.duration}
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 1, color: "#1F3A5F", fontWeight: "bold", textAlign: "left" }}
                >
                  Responsibilities:
                </Typography>
                <ul style={{ paddingLeft: "20px", color: "#1F3A5F" }}>
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 1, color: "#1F3A5F", fontWeight: "bold", textAlign: "left" }}
                >
                  Technologies:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {exp.technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      sx={{
                        backgroundColor: "#1F3A5F",
                        color: "#FFFFFF",
                        "&:hover": {
                          backgroundColor: "#3D5A80",
                        },
                      }}
                      size="small"
                    />
                  ))}
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
        
        
      </Box>
      
      
    </Container>
    
  );
}
