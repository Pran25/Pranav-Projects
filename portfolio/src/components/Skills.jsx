import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

const skills = ["ReactJS", "Spring Boot", "Java", "JavaScript", "MySQL","AITools", "GitHub", "CSS", "Bootstrap", "Hibernate"];

const getRandomPosition = () => ({
  x: Math.random() * 100 - 50, 
  y: Math.random() * 100 - 50, 
});

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#F5F5F5",
        py: 8,
        position: "relative",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        My Skills
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "600px",
          position: "relative",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, ...getRandomPosition() }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{ margin: "10px" }}
          >
            <Chip
              label={skill}
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                padding: "10px",
                color: "white",
                backgroundColor: "#333",
              }}
              color="primary"
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
