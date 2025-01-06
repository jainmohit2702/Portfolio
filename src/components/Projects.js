// Projects.js
import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/system";
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
      title: "Stroke Prediction Model",
      description:
        "A predictive machine learning model designed to estimate an individual's likelihood of experiencing a stroke based on their health and demographic data.",
      ghLink: "https://github.com/anujsharma1506/Stroke_Prediction_Model",
    },
    {
      title: "Customer Retention and Churn in the Airline Industry",
      description:
        "This project predicts customer churn in the airline industry using machine learning models like Random Forest and Gradient Boosting. By analyzing key factors such as travel type and loyalty points, it provides actionable insights to help airlines improve retention strategies and enhance customer satisfaction.",
      ghLink: "https://github.com/anujsharma1506/Customer-Retention-and-Churn-in-the-Airline-Industry",
    },
    {
      title: "People Analytics: Understanding Employee Performance and Retention",
      description:
        "This project uses people analytics to analyze employee performance, retention, and demographics, providing actionable insights to enhance workforce satisfaction, retention strategies, and organizational decision-making.",
      ghLink: "https://github.com/anujsharma1506/People-Analytics-Understanding-Employee-Performance-and-Retention",
    },
    {
      title: "Fraud Detection and Prevention in Credit Card Transactions",
      description:
        "A predictive machine learning model designed to estimate an individual's likelihood of experiencing a stroke based on their health and demographic data.",
      ghLink: "https://github.com/anujsharma1506/Fraud-Detection-and-Prevention-in-Credit-Card-Transactions",
    },
    {
      title: "Traffic Violation Analysis on Montgomery County",
      description:
        "A predictive machine learning model designed to estimate an individual's likelihood of experiencing a stroke based on their health and demographic data.",
      ghLink: "https://github.com/anujsharma1506/-Traffic-Violation-Analysis-on-Montgomery-County",
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
              <CardActions sx={{ justifyContent: 'center' }}> {/* Center the GitHub icon */}
                <StyledIconButton
                  aria-label="GitHub"
                  href={project.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </StyledIconButton>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </ProjectSection>
  );
}

export default Projects;
