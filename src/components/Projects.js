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
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/system";
import { FaProjectDiagram } from "react-icons/fa"; // Importing the React Icon for projects
import Particle from "./Particle"; // Assuming you have a Particle component

// Styled Components for Customization
const ProjectSection = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(5),
  backgroundColor: "#1F3A5F",
}));

const ProjectHeading = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "2.3rem",
  fontWeight: 500,
  paddingTop: theme.spacing(2),
  textAlign: "center",
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "center",
  marginBottom: theme.spacing(4),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "auto",
  backgroundColor: "transparent",
  boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  height: '100%', // Ensures uniform height across cards
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 4px 4px 5px rgba(129, 72, 144, 0.561)",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 140,
  backgroundSize: "contain",
  marginTop: theme.spacing(2),
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
      title: "Predictive-Analysis-of-Stock-Market-Data",
      description:
        "This repository contains an in-depth analysis of Tata Consultancy Services (TCS) stock market data over a period of 10 years, from 2013 to 2024. The objective of this analysis is to extract key performance metrics, understand stock price trends, and build predictive models for generating trading signals. This project utilizes various data analysis techniques and machine learning models to provide insights and potential trading strategies.",
      ghLink: "https://github.com/jainmohit2702/Predictive-Analysis-of-Stock-Market-Data",
    },
    {
      title: "Credit-Risk-Assessment-and-Predictive-Analysis-for-Mortgage-Lending-Optimization",
      description:
        "Implemented predictive analysis techniques to enhance credit risk assessment, optimize mortgage lending strategies, and improve risk mitigation, achieving an 83% accuracy in detecting potential loan defaults.",
      ghLink: "https://github.com/jainmohit2702/Credit-Risk-Assessment-and-Predictive-Analysis-for-Mortgage-Lending-Optimization-",
    },
    {
      title: "Tableau Projects",
      description:
        "CO2 Emissions: Explore emissions by country, region, and income. British Airways Reviews: Analyze customer feedback and satisfaction insights.",
      ghLink: "https://public.tableau.com/app/profile/mohit.jain3059/vizzes",
      tableauLink: "https://public.tableau.com/app/profile/mohit.jain3059/vizzes", // Added Tableau link
    },
  ];

  return (
    <ProjectSection maxWidth="lg">
      <Particle />
      <ProjectHeading variant="h3">
        My Recent <strong style={{ color: "#6c63ff" }}>Works</strong>
      </ProjectHeading>
      <ProjectDescription variant="subtitle1">
        Here are a few projects I've worked on recently.
      </ProjectDescription>
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
                  <Typography variant="body2" color="white">
                    {project.description}
                  </Typography>
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
                    {/* Tableau Project Icon from React Icons */}
                    <FaProjectDiagram
                      style={{
                        fontSize: "30px",  // Adjust icon size as needed
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
    </ProjectSection>
  );
}

export default Projects;
