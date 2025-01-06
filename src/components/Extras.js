// import React from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { Box, Stack, Container, Typography, Divider } from "@mui/material";
// import ProfileArray from "./ProfileArray";

// export default function Contact({ color }) {
//   const profile = ProfileArray();

//   const linkedin = () => {
//     window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
//   };
//   const github = () => {
//     window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
//   };
//   const email = () => {
//     window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
//   };

//   return (
//     <Container maxWidth="md" sx={{ pt: 4 }} id="contact">
//       {/* Title Section */}
//       <Box
//         sx={{
//           textAlign: "center",
//           mb: { xs: 5, md: 9 }, // similar to pb in Chakra
//         }}
//       >
//         {/* Title + Divider */}
//         <Stack
//           direction="row"
//           alignItems="center"
//           justifyContent="center"
//           spacing={2}
//           sx={{ mb: 4 }}
//         >
//           <Stack direction="row" spacing={1}>
//             <Typography
//               variant="h6"
//               sx={{ color: `${color}.400`, fontWeight: 800 }}
//             >
//               04
//             </Typography>
//             <Typography variant="h6" sx={{ fontWeight: 800 }}>
//               Contact
//             </Typography>
//           </Stack>

//           <Divider
//             flexItem
//             sx={{
//               borderColor: "rgba(0, 0, 0, 0.12)", // default MUI divider color
//             }}
//           />
//         </Stack>

//         {/* Subtitle / Heading */}
//         <Typography
//           variant="h4"
//           sx={{ mb: 2, fontWeight: "bold" }}
//         >
//           Let&apos;s stay in touch!
//         </Typography>

//         {/* Text content */}
//         <Typography
//           variant="body1"
//           sx={{ color: "gray.600", fontSize: "1.125rem", mb: 1 }}
//         >
//           {profile.contact}
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{
//             color: `${color}.500`,
//             fontWeight: 600,
//             fontSize: "1.125rem",
//             mb: 2,
//           }}
//         >
//           {profile.email}
//         </Typography>

//         {/* Icon Links */}
//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             justifyContent: "center",
//             mt: 2,
//           }}
//         >
//           <FaLinkedin onClick={linkedin} size={28} color="white" />
//           <FaGithub onClick={github} size={28} color="white" />
//           <FaEnvelope onClick={email} size={28} color="white" />
//         </Box>
//       </Box>
//     </Container>
//   );
// }

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

function Extras() {
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

export default Extras;
