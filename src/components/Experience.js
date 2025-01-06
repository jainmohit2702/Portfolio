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
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Experience Data
const experiences = [
  {
    company: "University of Maryland",
    position: "Data Engineer Intern",
    duration: "2024-2024",
    image: "/UMD.webp", // Ensure this image exists in the public folder
    responsibilities: [
      "Engineered an ETL pipeline integrating GIS data and GCP Places API to extract, transform, and analyze MySQL databases, generating JSON outputs for web dashboards and increasing data throughput by 30%.",
      "Restructured REST APIs with AWS Lambda and API Gateway, adopting a serverless architecture to reduce server costs, optimize API calls, and improve cloud infrastructure, saving $1K per quarter.",
      "Migrated 10TB MariaDB to AWS RDS, enhancing cloud infrastructure to reduce downtime and prevent database crashes.",
    ],
    technologies: ["ETL", "MySQL", "AWS", "AWS Lambda", "Serverless Architecture"],
  },
  {
          company: "University of Maryland",
          position: "Data Analyst - GA",
          duration: "Aug 2023 - May 2024",
          image: "/UMD.webp", // Ensure this image exists in the public folder
          tags: ["Data Science"],
          responsibilities: [
            "Implemented data transformation techniques using Excel (VLOOKUP, VBA, Macros, Pivot Tables), reducing manual workload by 45% and boosting data accuracy by 30%",
            "Designed and maintained Tableau dashboards for real-time data visualization, increasing reporting efficiency by 20%.",
            "Analyzed large-scale data sets with SQL and Python, optimizing shift scheduling and resource allocation while establishing KPIs for actionable insights.",
          ],
          technologies: ["Python", "Excel", "Power BI","MySQL","Tableau","Data Analytics","Data Visualization"],
        },
        {
          company: " Tata Consultancy Services",
          position: "Data Analyst ",
          duration: " May 2021 − Jul 2023",
          image: "/tcs.svg", // Ensure this image exists in the public folder
          tags: ["Full Stack"],
          responsibilities: [
            " Built Power BI dashboards for stakeholders across cross-functional teams, integrating KPIs (Key Performance Indicators), driving data storytelling, reducing ad-hoc reporting requests, and saving 16 man-hours per month.",
            " Led a team of 5 analysts to integrate an AI-driven moderation system using AWS Lambda, overseeing UAT and boosting moderation rate by 40% through data modeling and predictive modeling.",
            " Collaborated with the database team to optimize SQL queries, improve indexing, and perform cluster upgrades in MongoDB, resulting in annual cost savings of $10,000 and reducing operational expenditures by 50%",
          ],
          technologies: ["MongoDB", "Agile","PowerBI","Jira","Git","Service Now"],
        },
        {
          company: "Strategic Solutions International",
          position: "Business Intelligence Intern",
          duration: "Jan 2018 - Feb 2019",
          image: "/SSG.png", // Ensure this image exists in the public folder
          tags: ["Data Science"],
          responsibilities: [
            "Coordinated strategic business and requirements gathering for 30+ government contracts, conducting requirement analysis and executing risk analysis, which led to a 15% reduction in project risks.",
            "Performed financial analysis and capacity planning, increasing profitability by 25%. ",
            " Identified process improvements through gap analysis and supported decision-making with detailed business process documentation.",
          ],
          technologies: ["Financial Analysis", "Capacity Planning", "Process Improvement","Risk Analysis"],
        },
        // Add more experience entries as needed
      
    
  // Add more experiences here...
];

export default function Experience() {
  return (
    <Container
      maxWidth="md"
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
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1F3A5F" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar src={exp.image} alt={exp.company} sx={{ width: 56, height: 56, mr: 2 }} />
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
          { name: "PostgreSQL", color: "#336791", className: "fas fa-database" },
          { name: "Power BI", color: "#F2C811", className: "fas fa-chart-bar" },
          { name: "JIRA", color: "#0052CC", className: "fab fa-jira" },
          { name: "Git", color: "#F05032", className: "fab fa-git" },
          { name: "Confluence", color: "#172B4D", className: "fas fa-project-diagram" },
          { name: "Excel", color: "#217346", className: "fas fa-file-excel" },
          { name: "Azure", color: "#0078D4", className: "fab fa-microsoft" },
          { name: "MongoDB", color: "#47A248", className: "fas fa-leaf" },
          { name: "JavaScript", color: "#F7DF1E", className: "fab fa-js-square" },
        ].map((skill, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            {/* Icon with glowing border */}
            <i
              className={skill.className}
              style={{
                fontSize: "48px",
                color: skill.color,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                padding: "10px", // Adds space between icon and border
                borderRadius: "10px", // Rounded corners for the square
                border: `3px solid #cee8ff`, // Glowing border color
                boxShadow: "0 0 15px rgba(206, 232, 255, 0.7)", // Glowing effect
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 0 20px rgba(206, 232, 255, 1)"; // Increase glow on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 0 15px rgba(206, 232, 255, 0.7)"; // Reset glow
              }}
            ></i>
            <Typography variant="subtitle1" sx={{ mt: 1, color: "#acc2ef" }}>
              {skill.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
}
