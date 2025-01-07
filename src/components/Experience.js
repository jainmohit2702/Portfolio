// // Experience.js
// import React from "react";
// import {
//   Container,
//   Box,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Chip,
//   Avatar,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function Experience() {
//   // Sample Experience Data
//   const experiences = [
//     {
//       company: "University of Maryland",
//       position: "Data Engineer Intern ",
//       duration: "2024-2024",
//       image: "/company.png", // Ensure this image exists in the public folder
//       tags: ["Frontend"],
//       responsibilities: [
//         "Engineered an ETL pipeline integrating GIS data and GCP Places API to extract, transform, and analyze MySQL databases, generating JSON outputs for web dashboards and increasing data throughput by 30%.",
//         "Restructured REST APIs with AWS Lambda and API Gateway, adopting a serverless architecture to reduce server costs, optimize API calls, and improve cloud infrastructure, saving $1K per quarter.",
//         " Migrated 10TB MariaDB to AWS RDS, enhancing cloud infrastructure to reduce downtime and prevent database crashes.",
//       ],
//       technologies: ["ETL", "MySQL", "AWS","AWS LAMBDA","AWS API GATEWAY","Serverless Architecture","Data Migration"],
//     },
//     {
//       company: "University of Maryland",
//       position: "Data Analyst - GA",
//       duration: "Aug 2023 - May 2024",
//       image: "/company.png", // Ensure this image exists in the public folder
//       tags: ["Data Science"],
//       responsibilities: [
//         "Implemented data transformation techniques using Excel (VLOOKUP, VBA, Macros, Pivot Tables), reducing manual workload by 45% and boosting data accuracy by 30%",
//         "Designed and maintained Tableau dashboards for real-time data visualization, increasing reporting efficiency by 20%.",
//         "Analyzed large-scale data sets with SQL and Python, optimizing shift scheduling and resource allocation while establishing KPIs for actionable insights.",
//       ],
//       technologies: ["Python", "Excel", "Power BI","MySQL","Tableau","Data Analytics","Data Visualization"],
//     },
//     {
//       company: " Tata Consultancy Services",
//       position: "Data Analyst ",
//       duration: " May 2021 − Jul 2023",
//       image: "/company.png", // Ensure this image exists in the public folder
//       tags: ["Full Stack"],
//       responsibilities: [
//         " Built Power BI dashboards for stakeholders across cross-functional teams, integrating KPIs (Key Performance Indicators), driving data storytelling, reducing ad-hoc reporting requests, and saving 16 man-hours per month.",
//         " Led a team of 5 analysts to integrate an AI-driven moderation system using AWS Lambda, overseeing UAT and boosting moderation rate by 40% through data modeling and predictive modeling.",
//         " Collaborated with the database team to optimize SQL queries, improve indexing, and perform cluster upgrades in MongoDB, resulting in annual cost savings of $10,000 and reducing operational expenditures by 50%",
//       ],
//       technologies: ["MongoDB", "Agile","PowerBI","Jira","Git","Service Now"],
//     },
//     {
//       company: "Strategic Solutions International",
//       position: "Business Intelligence Intern",
//       duration: "Jan 2018 - Feb 2019",
//       image: "/company.png", // Ensure this image exists in the public folder
//       tags: ["Data Science"],
//       responsibilities: [
//         "Coordinated strategic business and requirements gathering for 30+ government contracts, conducting requirement analysis and executing risk analysis, which led to a 15% reduction in project risks.",
//         "Performed financial analysis and capacity planning, increasing profitability by 25%. ",
//         " Identified process improvements through gap analysis and supported decision-making with detailed business process documentation.",
//       ],
//       technologies: ["Financial Analysis", "Capacity Planning", "Process Improvement","Risk Analysis"],
//     },
//     // Add more experience entries as needed
//   ];

//   return (
//     <Container
//       maxWidth="md" // Reverted back to 'md' to maintain original size
//       id="experience"
//       sx={{
//         py: { xs: 4, md: 8 }, // Vertical padding
//         pl: { xs: 2, sm: 4, md: 6 }, // Left padding
//         pr: { xs: 2, sm: 4, md: 6 }, // Right padding
//         boxSizing: "border-box",
//         marginLeft: 0, // Align Container to the left
//         marginRight: "auto", // Prevent centering
//       }}
//     >
//       {/* Header Section */}
//       <Box sx={{ textAlign: "left", mb: 4 }}>
//         {/* Title */}
        
//         {/* Subtitle: "My Professional Journey" */}
//         <Typography
//           variant="h4" // Kept as h4 for larger text
//           sx={{
//             color: "#cee8ff",
//             fontWeight: "bold",
//             mb: 4,
//             fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" }, // Increased font size
//             textAlign: "left", // Ensures left alignment
//           }}
//         >
//           My Professional Journey
//         </Typography>
//       </Box>

//       {/* Accordion Section */}
//       <Box>
//         {experiences.map((exp, index) => (
//           <Accordion
//             key={index}
//             sx={{
//               backgroundColor: "#acc2ef",
//               color: "#1F3A5F",
//               mb: 2,
//               "&::before": {
//                 display: "none", // Remove the default divider line
//               },
//               boxShadow: "none", // Optional: Remove shadow for a flatter look
//               "&:not(:last-child)": {
//                 borderBottom: "1px solid #ccc", // Optional: Add bottom border except for the last accordion
//               },
//             }}
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon sx={{ color: "#1F3A5F" }} />}
//               aria-controls={`panel${index}-content`}
//               id={`panel${index}-header`}
//               sx={{
//                 "& .MuiAccordionSummary-content": {
//                   margin: 0, // Remove default margin
//                 },
//               }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <Avatar
//                   src={exp.image}
//                   alt={exp.company}
//                   sx={{ width: 56, height: 56, mr: 2 }}
//                 />
//                 <Box>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1F3A5F" }}>
//                     {exp.company}
//                   </Typography>
//                   <Typography variant="subtitle2" sx={{ color: "#1F3A5F" }}>
//                     {exp.position} &middot; {exp.duration}
//                   </Typography>
//                 </Box>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Box>
//                 <Typography
//                   variant="subtitle1"
//                   sx={{ mb: 1, color: "#1F3A5F", fontWeight: "bold", textAlign: "left" }}
//                 >
//                   Responsibilities:
//                 </Typography>
//                 <ul style={{ paddingLeft: "20px", color: "#1F3A5F" }}>
//                   {exp.responsibilities.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </Box>
//               <Box sx={{ mt: 2 }}>
//                 <Typography
//                   variant="subtitle1"
//                   sx={{ mb: 1, color: "#1F3A5F", fontWeight: "bold", textAlign: "left" }}
//                 >
//                   Technologies:
//                 </Typography>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                   {exp.technologies.map((tech, idx) => (
//                     <Chip
//                       key={idx}
//                       label={tech}
//                       sx={{
//                         backgroundColor: "#1F3A5F",
//                         color: "#FFFFFF",
//                         "&:hover": {
//                           backgroundColor: "#3D5A80",
//                         },
//                       }}
//                       size="small"
//                     />
//                   ))}
//                 </Box>
//               </Box>
//             </AccordionDetails>
//           </Accordion>
//         ))}
        
        
//       </Box>
      
      
//     </Container>
    
//   );
// }



// import React from "react";
// import {
//   Container,
//   Box,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Chip,
//   Avatar,
//   Grid,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// // Experience Data
// const experiences = [
//   {
//     company: "University of Maryland",
//     position: "Data Engineer Intern",
//     duration: "2024-2024",
//     image: "/UMD.webp", // Ensure this image exists in the public folder
//     responsibilities: [
//       "Engineered an ETL pipeline integrating GIS data and GCP Places API to extract, transform, and analyze MySQL databases, generating JSON outputs for web dashboards and increasing data throughput by 30%.",
//       "Restructured REST APIs with AWS Lambda and API Gateway, adopting a serverless architecture to reduce server costs, optimize API calls, and improve cloud infrastructure, saving $1K per quarter.",
//       "Migrated 10TB MariaDB to AWS RDS, enhancing cloud infrastructure to reduce downtime and prevent database crashes.",
//     ],
//     technologies: ["ETL", "MySQL", "AWS", "AWS Lambda", "Serverless Architecture"],
//   },
//   {
//           company: "University of Maryland",
//           position: "Data Analyst - GA",
//           duration: "Aug 2023 - May 2024",
//           image: "/UMD.webp", // Ensure this image exists in the public folder
//           tags: ["Data Science"],
//           responsibilities: [
//             "Implemented data transformation techniques using Excel (VLOOKUP, VBA, Macros, Pivot Tables), reducing manual workload by 45% and boosting data accuracy by 30%",
//             "Designed and maintained Tableau dashboards for real-time data visualization, increasing reporting efficiency by 20%.",
//             "Analyzed large-scale data sets with SQL and Python, optimizing shift scheduling and resource allocation while establishing KPIs for actionable insights.",
//           ],
//           technologies: ["Python", "Excel", "Power BI","MySQL","Tableau","Data Analytics","Data Visualization"],
//         },
//         {
//           company: " Tata Consultancy Services",
//           position: "Data Analyst ",
//           duration: " May 2021 − Jul 2023",
//           image: "/tcs.svg", // Ensure this image exists in the public folder
//           tags: ["Full Stack"],
//           responsibilities: [
//             " Built Power BI dashboards for stakeholders across cross-functional teams, integrating KPIs (Key Performance Indicators), driving data storytelling, reducing ad-hoc reporting requests, and saving 16 man-hours per month.",
//             " Led a team of 5 analysts to integrate an AI-driven moderation system using AWS Lambda, overseeing UAT and boosting moderation rate by 40% through data modeling and predictive modeling.",
//             " Collaborated with the database team to optimize SQL queries, improve indexing, and perform cluster upgrades in MongoDB, resulting in annual cost savings of $10,000 and reducing operational expenditures by 50%",
//           ],
//           technologies: ["MongoDB", "Agile","PowerBI","Jira","Git","Service Now"],
//         },
//         {
//           company: "Strategic Solutions International",
//           position: "Business Intelligence Intern",
//           duration: "Jan 2018 - Feb 2019",
//           image: "/SSG.png", // Ensure this image exists in the public folder
//           tags: ["Data Science"],
//           responsibilities: [
//             "Coordinated strategic business and requirements gathering for 30+ government contracts, conducting requirement analysis and executing risk analysis, which led to a 15% reduction in project risks.",
//             "Performed financial analysis and capacity planning, increasing profitability by 25%. ",
//             " Identified process improvements through gap analysis and supported decision-making with detailed business process documentation.",
//           ],
//           technologies: ["Financial Analysis", "Capacity Planning", "Process Improvement","Risk Analysis"],
//         },
//         // Add more experience entries as needed
      
    
//   // Add more experiences here...
// ];

// export default function Experience() {
//   return (
//     <Container
//       maxWidth="md"
//       sx={{
//         py: { xs: 4, md: 8 },
//         pl: { xs: 2, sm: 4, md: 6 },
//         pr: { xs: 2, sm: 4, md: 6 },
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Header Section */}
//       <Box sx={{ textAlign: "left", mb: 4 }}>
//         <Typography
//           variant="h4"
//           sx={{
//             color: "#cee8ff",
//             fontWeight: "bold",
//             mb: 4,
//             fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
//           }}
//         >
//           My Professional Journey
//         </Typography>
//       </Box>

//       {/* Accordion Section */}
//       <Box>
//         {experiences.map((exp, index) => (
//           <Accordion
//             key={index}
//             sx={{
//               backgroundColor: "#acc2ef",
//               color: "#1F3A5F",
//               mb: 2,
//               "&::before": {
//                 display: "none",
//               },
//             }}
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon sx={{ color: "#1F3A5F" }} />}
//               aria-controls={`panel${index}-content`}
//               id={`panel${index}-header`}
//             >
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <Avatar src={exp.image} alt={exp.company} sx={{ width: 56, height: 56, mr: 2 }} />
//                 <Box>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1F3A5F" }}>
//                     {exp.company}
//                   </Typography>
//                   <Typography variant="subtitle2" sx={{ color: "#1F3A5F" }}>
//                     {exp.position} &middot; {exp.duration}
//                   </Typography>
//                 </Box>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Box>
//                 <Typography
//                   variant="subtitle1"
//                   sx={{ mb: 1, color: "#1F3A5F", fontWeight: "bold", textAlign: "left" }}
//                 >
//                   Responsibilities:
//                 </Typography>
//                 <ul style={{ paddingLeft: "20px", color: "#1F3A5F" }}>
//                   {exp.responsibilities.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </Box>
//               <Box sx={{ mt: 2 }}>
//                 <Typography
//                   variant="subtitle1"
//                   sx={{ mb: 1, color: "#1F3A5F", fontWeight: "bold", textAlign: "left" }}
//                 >
//                   Technologies:
//                 </Typography>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                   {exp.technologies.map((tech, idx) => (
//                     <Chip
//                       key={idx}
//                       label={tech}
//                       sx={{
//                         backgroundColor: "#1F3A5F",
//                         color: "#FFFFFF",
//                         "&:hover": {
//                           backgroundColor: "#3D5A80",
//                         },
//                       }}
//                       size="small"
//                     />
//                   ))}
//                 </Box>
//               </Box>
//             </AccordionDetails>
//           </Accordion>
//         ))}
//       </Box>

      
//     </Container>
//   );
// }




import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import { FaRegHandshake, FaBriefcase } from "react-icons/fa"; // Importing FaBriefcase icon for the link
import { styled } from "@mui/system";
import Particle from "./Particle"; // Assuming you have a Particle component

// Styled Components for Customization
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "0 4px 5px 3px rgba(255, 255, 255, 0.5)", // White glow border
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  position: "relative", // For absolute positioning of the icon at the bottom
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 4px 4px 5px rgba(255, 255, 255, 0.7)", // White glow on hover
  },
}));

const StyledIconButton = styled('a')(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  position: "absolute",
  bottom: "16px", // Position the icon at the bottom center
  left: "50%",
  transform: "translateX(-50%)", // Center the icon horizontally
  '&:hover': {
    color: "#6c63ff", // Adjust color on hover
  },
}));

// Experience Data
const experiences = [
  {
    company: "Techsolvo",
    position: "Business Intelligence Intern",
    duration: "Jun 2020–Apr 2021",
    image: "/ssi.jpg", // Ensure this image exists in the public folder
    responsibilities: [
      "I refined Python ETL scripts to integrate data into PostgreSQL, cutting load time by 1.5 hours. Using SQL and Tableau, I analyzed pricing trends to guide strategic decisions.",
      "Using SQL and Tableau, I analyzed pricing trends to guide strategic decisions.",
      "I also created a Random Forest model with 85% accuracy, improving financial forecasting and planning."
    ],
    technologies: ["Python", "PostgreSQL", "Tableau", "ETL"],
    linkedin: "https://www.linkedin.com/in/mohit-2702-jain/",
  },
  {
    company: "Tata Consultancy Services",
    position: "Data Analyst",
    duration: "May 2021 − Jul 2023",
    image: "/tcs.svg", // Ensure this image exists in the public folder
    responsibilities: [
      "I built Power BI dashboards to simplify reporting.",
      "I coordinated Agile sprints via Jira, overseeing a team that integrated an AI-driven moderation system with AWS, boosting efficiency by 40% and reducing costs through optimized SQL queries and MongoDB upgrades."
    ],
    technologies: ["MongoDB", "Agile", "PowerBI", "Jira", "Git", "Service Now"],
    linkedin: "https://www.linkedin.com/in/mohit-2702-jain/",
  },
  {
    company: "University of Maryland",
    position: "Data Analyst - GA",
    duration: "Aug 2023 - May 2024",
    image: "/UMD.webp", // Ensure this image exists in the public folder
    responsibilities: [
      "I used Excel (VLOOKUP, Pivot Tables) to transform data for process improvements.",
      "Tableau dashboards provided real-time insights, increasing reporting efficiency by 20%.",
      "Additionally, SQL and Python analyses identified process bottlenecks, improving operations."
    ],
    technologies: ["Python", "Excel", "Power BI", "MySQL", "Tableau", "Data Analytics", "Data Visualization"],
    linkedin: "https://www.linkedin.com/in/mohit-2702-jain/",
  },
  {
    company: "Strategic Solutions International",
    position: "Business Intelligence Intern",
    duration: "Jun 2024–Aug 2024",
    image: "/ssi.jpg", // Ensure this image exists in the public folder
    responsibilities: [
      "I streamlined contract requirements using Excel, boosting profitability by $500K and improving risk management.",
      "My documentation efforts raised government contract wins by 25%, while capacity planning ensured more efficient budgeting and resource allocation."
    ],
    technologies: ["Financial Analysis", "Capacity Planning", "Process Improvement", "Risk Analysis"],
    linkedin: "https://www.linkedin.com/in/mohit-2702-jain/",
  },
  // New fifth card
  {
    company: "University of Maryland",
    position: "Data Engineer Intern",
    duration: "2024-2024",
    image: "/UMD.webp", // Ensure this image exists in the public folder
    responsibilities: [
      "I built an ETL pipeline integrating GIS data and GCP, generating JSON outputs for dashboards.",
      "I also implemented serverless APIs via AWS, lowering costs, and migrated MariaDB to RDS to reduce downtime and enhance overall data reliability."
    ],
    technologies: ["ETL", "MySQL", "AWS", "AWS Lambda", "Serverless Architecture"],
    link: "https://balto.umd.edu/people/",
    linkedin: "https://www.linkedin.com/in/mohit-2702-jain/",
  }
];

export default function Experience() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 4, md: 8 },
        pl: { xs: 2, sm: 4, md: 6 },
        pr: { xs: 2, sm: 4, md: 6 },
        boxSizing: "border-box",
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: "left", mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#cee8ff",
            fontWeight: "bold",
            mb: 4,
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          }}
        >
          My Professional Journey
        </Typography>
      </Box>

      {/* Job Cards Section */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {experiences.map((exp, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <StyledCard
              sx={{
                minHeight: index === experiences.length - 1 ? "600px" : "auto", // Make the last card taller if needed
              }}
            >
              <a href={exp.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div>
                  <CardMedia
                    component="img"
                    height="140"
                    image={exp.image} // Image for the company
                    alt={exp.company}
                    sx={{
                      backgroundSize: "contain",
                      maxHeight: "150px", // Ensure image fits within the card
                      objectFit: "contain",
                      marginTop: "16px",
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#cee8ff" }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {exp.position} &middot; {exp.duration}
                    </Typography>
                  </CardContent>
                </div>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Box sx={{ textAlign: "left", color: "white", marginBottom: "16px" }}>
                    {/* Responsibilities */}
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#cee8ff" }}>
                      Responsibilities:
                    </Typography>
                    <ul style={{ paddingLeft: "20px", color: "#cee8ff" }}>
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    {/* Gap between Responsibilities and Technologies */}
                    <Box sx={{ mt: 2 }} />

                    {/* Technologies */}
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#cee8ff" }}>
                      Technologies:
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, backgroundColor: "#1F3A5F", padding: "8px", borderRadius: "8px" }}>
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
                            borderRadius: "12px", // Rounded corners for technologies
                            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", // White glow around technologies
                          }}
                          size="small"
                        />
                      ))}
                    </Box>
                  </Box>
                  {/* Last Card Special Icon */}
                  {index === experiences.length - 1 && (
                    <StyledIconButton
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBriefcase
                        style={{
                          fontSize: "30px",
                          color: "white",
                        }}
                      />
                    </StyledIconButton>
                  )}
                </CardActions>
              </a>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
