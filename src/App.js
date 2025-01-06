// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box ,Typography} from "@mui/material";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

// Components
import Nav from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Extras from "./components/Extras";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Navbar stays on top across all pages */}
      <Nav />

      {/* Main Content Area with Padding */}
      <Box
        sx={{
          paddingTop: "80px",   // Adjust based on navbar height
          paddingBottom: "60px", // Adjust based on footer height
        }}
      >
        <Routes>
          {/* The root path "/" loads About by default */}
          <Route path="/" element={<About />} />

          {/* Other routes */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/extras" element={<Extras />} />

          {/* Catch-all Route for 404 - Optional */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>

      {/* Footer remains visible across all pages */}
      <Footer />
    </Router>
  );
}

// Optional: 404 Component
function NotFound() {
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h4">404 - Page Not Found</Typography>
      <Typography variant="body1">Sorry, the page you're looking for doesn't exist.</Typography>
    </Box>
  );
}

export default App;
