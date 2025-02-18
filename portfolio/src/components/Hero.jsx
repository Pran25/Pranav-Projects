import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const handleClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open("https://github.com/Pran25", "_blank");
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(to right, #1976D2, #21CBF3)",
        color: "#fff",
        px: 2,
        width: "100%", 
        overflowX: "hidden", 
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" fontWeight="bold">
          Hi, I'm Pranav 👋
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, maxWidth: "600px" }}>
          A passionate Full-Stack Developer who loves to build awesome projects.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: "1.2rem",
            borderRadius: "50px",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={handleClick}
        >
          View My Work
        </Button>
      </motion.div>
    </Box>
  );
};

export default Hero;
