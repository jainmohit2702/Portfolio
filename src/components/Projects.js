// // Projects.js
// import React from "react";
// import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import { styled } from "@mui/system";
// import Particle from "./Particle"; // Assuming you have a Particle component

// // Styled Components for Customization
// const ProjectSection = styled(Container)(({ theme }) => ({
//   paddingTop: theme.spacing(15),
//   paddingBottom: theme.spacing(5),
//   backgroundColor: "#1F3A5F",
// }));

// const ProjectHeading = styled(Typography)(({ theme }) => ({
//   color: "white",
//   fontSize: "2.3rem",
//   fontWeight: 500,
//   paddingTop: theme.spacing(2),
//   textAlign: "center",
// }));

// const ProjectDescription = styled(Typography)(({ theme }) => ({
//   color: "white",
//   textAlign: "center",
//   marginBottom: theme.spacing(4),
// }));

// const StyledCard = styled(Card)(({ theme }) => ({
//   maxWidth: 345,
//   margin: "auto",
//   backgroundColor: "transparent",
//   boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)",
//   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   height: '100%', // Ensures uniform height across cards
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   "&:hover": {
//     transform: "scale(1.02)",
//     boxShadow: "0 4px 4px 5px rgba(129, 72, 144, 0.561)",
//   },
// }));

// const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
//   height: 140,
//   backgroundSize: "contain",
//   marginTop: theme.spacing(2),
// }));

// const StyledIconButton = styled(IconButton)(({ theme }) => ({
//   color: "white",
//   "&:hover": {
//     color: "#6c63ff",
//   },
// }));

// function Projects() {
//   // Array of Project Data
//   const projectData = [
//     {
//       title: "Predictive-Analysis-of-Stock-Market-Data",
//       description:
//         "This repository contains an in-depth analysis of Tata Consultancy Services (TCS) stock market data over a period of 10 years, from 2013 to 2024. The objective of this analysis is to extract key performance metrics, understand stock price trends, and build predictive models for generating trading signals. This project utilizes various data analysis techniques and machine learning models to provide insights and potential trading strategies.",
//       ghLink: "https://github.com/jainmohit2702/Predictive-Analysis-of-Stock-Market-Data",
//     },
//     {
//       title: "Credit-Risk-Assessment-and-Predictive-Analysis-for-Mortgage-Lending-Optimization",
//       description:
//         "Implemented predictive analysis techniques to enhance credit risk assessment, optimize mortgage lending strategies, and improve risk mitigation, achieving an 83% accuracy in detecting potential loan defaults.",
//       ghLink: "https://github.com/jainmohit2702/Credit-Risk-Assessment-and-Predictive-Analysis-for-Mortgage-Lending-Optimization-",
//     },
//     {
//       title: "Tableau Projects",
//       description:"CO2 Emissions: Explore emissions by country, region, and income.British Airways Reviews: Analyze customer feedback and satisfaction insights.",
//        ghLink: "https://public.tableau.com/app/profile/mohit.jain3059/vizzes",
//     },
//     // {
//     //   title: "Fraud Detection and Prevention in Credit Card Transactions",
//     //   description:
//     //     "A predictive machine learning model designed to estimate an individual's likelihood of experiencing a stroke based on their health and demographic data.",
//     //   ghLink: "https://github.com/anujsharma1506/Fraud-Detection-and-Prevention-in-Credit-Card-Transactions",
//     // },
//     // {
//     //   title: "Traffic Violation Analysis on Montgomery County",
//     //   description:
//     //     "A predictive machine learning model designed to estimate an individual's likelihood of experiencing a stroke based on their health and demographic data.",
//     //   ghLink: "https://github.com/anujsharma1506/-Traffic-Violation-Analysis-on-Montgomery-County",
//     // },
//   ];

//   return (
//     <ProjectSection maxWidth="lg">
//       <Particle />
//       <ProjectHeading variant="h3">
//         My Recent <strong style={{ color: "#6c63ff" }}>Works</strong>
//       </ProjectHeading>
//       <ProjectDescription variant="subtitle1">
//         Here are a few projects I've worked on recently.
//       </ProjectDescription>
//       <Grid container spacing={4} justifyContent="center" alignItems="stretch">
//         {projectData.map((project, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <StyledCard>
//               <div>
//                 <StyledCardMedia
//                   image="/chatify.png" // Updated image path
//                   title={project.title}
//                 />
//                 <CardContent>
//                   <Typography
//                     gutterBottom
//                     variant="h5"
//                     component="div"
//                     sx={{ color: '#cee8ff' }} // Title color set to #cee8ff
//                   >
//                     {project.title}
//                   </Typography>
//                   <Typography variant="body2" color="white">
//                     {project.description}
//                   </Typography>
//                 </CardContent>
//               </div>
//               <CardActions sx={{ justifyContent: 'center' }}> {/* Center the GitHub icon */}
//                 <StyledIconButton
//                   aria-label="GitHub"
//                   href={project.ghLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <GitHubIcon />
//                 </StyledIconButton>
//               </CardActions>
//             </StyledCard>
//           </Grid>
//         ))}
//       </Grid>
//     </ProjectSection>
//   );
// }

// export default Projects;


import React from "react";
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/system";
import { SiTableau } from "react-icons/si"; // Correctly import SiTableau
import { FaSnowflake } from "react-icons/fa"; // FaSnowflake for Snowflake icon
import { FaProjectDiagram } from "react-icons/fa"; // For project links
import Particle from "./Particle"; // Assuming you have a Particle component

// Styled Components for Customization
const ProjectSection = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2), // Reduced top padding to reduce space between the navbar and section
  paddingBottom: theme.spacing(5),
  backgroundColor: "#1F3A5F",
}));

const ProjectHeading = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "2rem",
  fontWeight: 500,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(3), // Added some bottom padding for spacing
  textAlign: "center",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "auto",
  backgroundColor: "transparent",
  boxShadow: "0 4px 6px rgba(255, 255, 255, 0.3)", // Reduced and consistent shadow
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  height: '100%', // Ensures uniform height across cards
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 4px 4px 5px rgba(145, 197, 249, 0.97)",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 140,
  backgroundSize: "contain",
  marginTop: theme.spacing(3),
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  "&:hover": {
    color: "#6c63ff",
  },
}));

function Projects() {
  // Array of Project Data
  const projectData = [
    {
      title: "Predictive Analysis of Stock Market Data",
      description: [
        "This repository contains an in-depth analysis of Tata Consultancy Services (TCS) stock market data over a period of 10 years, from 2013 to 2024.",
        "The objective of this analysis is to extract key performance metrics, understand stock price trends, and build predictive models for generating trading signals.",
        "This project utilizes various data analysis techniques and machine learning models to provide insights and potential trading strategies."
      ],
      ghLink: "https://github.com/jainmohit2702/Predictive-Analysis-of-Stock-Market-Data",
    },
    {
      title: "Credit Risk Assessment and Predictive Analysis for Mortgage Lending Optimization",
      description: [
        "Implemented predictive analysis techniques to enhance credit risk assessment, optimize mortgage lending strategies, and improve risk mitigation.",
        "Achieved an 83% accuracy in detecting potential loan defaults."
      ],
      ghLink: "https://github.com/jainmohit2702/Credit-Risk-Assessment-and-Predictive-Analysis-for-Mortgage-Lending-Optimization-",
    },
    {
      title: "Tableau Projects",
      description: [
        "CO2 Emissions: Explore emissions by country, region, and income.",
        "British Airways Reviews: Analyze customer feedback and satisfaction insights."
      ],
      ghLink: "https://public.tableau.com/app/profile/mohit.jain3059/vizzes",
      tableauLink: "https://public.tableau.com/app/profile/mohit.jain3059/vizzes", // Added Tableau link
    },
  ];

  return (
    <ProjectSection maxWidth="lg">
      <Particle />
      <ProjectHeading variant="h3"sx={{
          color: "#cee8ff",
          fontWeight: "bold",
          mb: 2,
        }}>
        My Recent Projects
      </ProjectHeading>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {projectData.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <StyledCard>
              <div>
                <StyledCardMedia
                  image="/chatify.png" // Updated image path
                  title={project.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: '#cee8ff' }} // Title color set to #cee8ff
                  >
                    {project.title}
                  </Typography>
                  <ul style={{ color: "white", paddingLeft: "20px" }}>
                    {project.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </div>
              <CardActions sx={{ justifyContent: 'center' }}> {/* Center the icons */}
                {project.tableauLink ? (  // Only for Tableau project
                  <StyledIconButton
                    aria-label="Tableau"
                    href={project.tableauLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiTableau
                      style={{
                        fontSize: "40px",  // Adjust icon size as needed
                        color: "white",  // White color for the icon
                      }}
                    />
                  </StyledIconButton>
                ) : (
                  <StyledIconButton
                    aria-label="GitHub"
                    href={project.ghLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </StyledIconButton>
                )}
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
       {/* Professional Skillset Section */}
       <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography
        variant="h4"
        sx={{
          color: "#cee8ff",
          fontWeight: "bold",
          mb: 4,
        }}
      >
        My Professional Skillset
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Skill Icons */}
        {[ 
          { name: "Python", color: "#3776AB", className: "fab fa-python" },
          { name: "MySQL", color: "#00758F", className: "fas fa-database" },
          { name: "Tableau", color: "#E97627", component: <SiTableau style={{ fontSize: "40px", color: "white" }} /> },
          { name: "Power BI", color: "#F2C811", component: <img src="/bi.png" alt="Power BI" style={{ width: "40px", height: "40px" }} /> }, // Replacing Power BI icon with bi.webp image
          { name: "Excel", color: "#217346", className: "fas fa-file-excel" },
          { name: "AWS", color: "#232F3E", component: <img src="/aws1.png" alt="AWS" style={{ width: "40px", height: "40px", filter: "invert(1)" }} /> },
          { name: "GCP", color: "#4285F4", className: "fab fa-google" },
          { name: "Snowflake", color: "#1F4F96", component: <img src="/SNOW.png" alt="Snowflake" style={{ width: "40px", height: "40px" }} /> },
          { name: "MongoDB", color: "#47A248", className: "fas fa-leaf" },
          { name: "JavaScript", color: "#F7DF1E", className: "fab fa-js-square" },
          { name: "JIRA", color: "#0052CC", className: "fab fa-jira" },
          { name: "Git", color: "#F05032", className: "fab fa-git" },
        ].map((skill, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            {/* Icon with glowing border */}
            <Box sx={{
                fontSize: "40px",
                color: skill.color,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                padding: "30px", // Adds space between icon and border
                borderRadius: "20px", // Rounded corners for the square
                border: "0.3px solid  #cee8ff", // Glowing border color
                boxShadow: "0 0 3px rgba(206, 232, 255, 0.7)", // Glowing effect
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 0 20px rgba(206, 232, 255, 1)"; // Increase glow on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 0 3px rgba(206, 232, 255, 0.7)"; // Reset glow
              }}
            >
              {skill.component || <i className={skill.className}></i>}
            </Box>
            <Typography variant="subtitle1" sx={{ mt: 1, color: "#acc2ef" }}>
              {skill.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      </Box>
    </ProjectSection>
  );
}

export default Projects;
