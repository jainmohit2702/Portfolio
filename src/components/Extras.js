import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton, Link } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { styled } from "@mui/system";
import Particle from "./Particle"; // Assuming you have a Particle component

// Styled Components for Customization
const ProjectSection = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(3), // Reduced gap between navbar and section
  paddingBottom: theme.spacing(5),
  backgroundColor: "#1F3A5F",
}));

const ProjectHeading = styled(Typography)(({ theme }) => ({
  color: "#cee8ff",
  fontSize: "2rem",
  fontWeight: "bold",
  paddingTop: theme.spacing(1),
  textAlign: "center",
  marginBottom: theme.spacing(2), // Reduced gap between title and cards
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300, // Reduced card size
  margin: "auto",
  backgroundColor: "transparent",
  boxShadow: "0 4px 6px rgba(255, 255, 255, 0.3)", // Consistent, reduced shadow
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  height: '100%', // Ensures uniform height across cards
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2), // Consistent padding inside the card
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 4px 4px 5px rgba(145, 197, 249, 0.97)",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 140,
  backgroundSize: "contain",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1), // Reduced margin between image and title
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
      title: "AWS Certified Cloud Practitioner",
      ghLink: "https://cp.certmetrics.com/amazon/en/public/verify/credential/8e1c281c115841e4934834491c670dcb",
      image: "/AWS_Certification.png", // Unique image for AWS
    },
    {
      title: "Tableau Desktop Specialist",
      ghLink: "https://www.credly.com/badges/a36ffe61-75b0-46e4-a07f-19e29aaea2ac/linked_in_profile",
      image: "/tableau.png", // Unique image for Tableau
    },
    {
      title: "IBM Applied Data Science Specialist ",
      ghLink: "https://coursera.org/share/9e7112b0a08f8319fadabeefffada9e7",
      image: "/coursera.webp", // Unique image for Coursera
    },
  ];

  return (
    <ProjectSection maxWidth="lg">
      <Particle />
      <ProjectHeading variant="h3">
        My Certifications
      </ProjectHeading>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {projectData.slice(0, 3).map((project, index) => ( // Limit to 3 cards
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Link href={project.ghLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <StyledCard>
                <div>
                  <StyledCardMedia
                    image={project.image} // Dynamic image for each project
                    title={project.title}
                  />
                  <CardContent sx={{ textAlign: "center" }}> {/* Center align the title */}
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#cee8ff", marginBottom: "3px" }} // Reduced margin between title and icons
                    >
                      {project.title}
                    </Typography>
                  </CardContent>
                </div>
                <CardActions sx={{ justifyContent: "center", paddingBottom: 0 }}> {/* Reduced padding on bottom */}
                  {/* Center the icons */}
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
            </Link>
          </Grid>
        ))}
      </Grid>
    </ProjectSection>
  );
}

export default Extras;
