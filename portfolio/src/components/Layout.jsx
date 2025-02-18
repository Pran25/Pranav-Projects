import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./Contact"; // Keep Contact always visible
import Skills from "./Skills"; // Keep Skills always visible
import { Box } from "@mui/material";
import Projects from "./Projects";

const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Outlet /> 
      <Projects/>
      <Skills /> 
      <Contact />
    </Box>
  );
};

export default Layout;
