import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
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
  maxWidth: 300, // Reduced card size
  margin: "auto",
  backgroundColor: "transparent",
  boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  height: '100%',
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
  boxShadow: "0 4px 10px rgba(255, 255, 255, 0.6)",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  "&:hover": {
    color: "#6c63ff",
  },
  fontSize: "20px", // Reduced icon size
}));

function Extras() {
  // Array of Project Data with unique images for each project
  const projectData = [
    {
      title: "AWS Cloud Practitioner",
      description: "AWS Certified",
      ghLink: "https://cp.certmetrics.com/amazon/en/public/verify/credential/8e1c281c115841e4934834491c670dcb",
      image: "/aws.png", // Unique image for AWS
    },
    {
      title: "Tableau",
      description: "Tableau Certified",
      ghLink: "https://www.credly.com/badges/a36ffe61-75b0-46e4-a07f-19e29aaea2ac/linked_in_profile",
      image: "/tableau.png", // Unique image for Tableau
    },
    {
      title: "Coursera",
      description: "Coursera Certified",
      ghLink: "https://coursera.org/share/9e7112b0a08f8319fadabeefffada9e7",
      image: "/coursera.png", // Unique image for Coursera
    },
  ];

  return (
    <ProjectSection maxWidth="lg">
      <Particle />
      <ProjectHeading variant="h3">
        My Certifications <strong style={{ color: "#6c63ff" }}>Works</strong>
      </ProjectHeading>
      {/* <ProjectDescription variant="subtitle1">
        Here are a few projects I've worked on recently.
      </ProjectDescription> */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {projectData.slice(0, 3).map((project, index) => ( // Limit to 3 cards
          <Grid item key={index} xs={12} sm={6} md={4}>
            <StyledCard>
              <div>
                <StyledCardMedia
                  image={project.image} // Dynamic image for each project
                  title={project.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#cee8ff" }} // Title color set to #cee8ff
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {project.description}
                  </Typography>
                </CardContent>
              </div>
              <CardActions sx={{ justifyContent: "center" }}> {/* Center the icons */}
                <StyledIconButton
                  aria-label="Certificate"
                  href={project.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WorkspacePremiumIcon />
                </StyledIconButton>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </ProjectSection>
  );
}

export default Extras;
