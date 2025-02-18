import { Box, Typography, Chip, Avatar, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const skills = ["ReactJS", "Spring Boot", "Java", "JavaScript", "MySQL", "AI Tools", "GitHub", "CSS", "Bootstrap", "Hibernate"];

const education = [
  { degree: "10th Grade", school: "Good Shepherd Academy", year: "2016-2017" },
  { degree: "12th Grade", school: "Rashtriya Vidyalay College", year: "2017-2019" },
  { degree: "Bachelor's of Computer Application", school: "SPPU", year: "2019-2022" },
  { degree: "Master's of Computer Application", school: "SPPU", year: "2022-2024" },
  { degree: "Internship", school: "SevenMentor", year: "2023-2024"}
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #1976D2, #21CBF3)",
        py: 28,
        px: 14,
        color: "white",
        width: "100%",
        overflowX: "hidden", 
      }}
    >
      <Grid container spacing={4} alignItems="center" maxWidth="1200px">
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Avatar
            src="ProfilePhoto.jpg"
            alt="Your Name"
            sx={{
              width: 150,
              height: 150,
              margin: "auto",
              mb: 2,
              border: "5px solid #fff",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, fontSize: "1.1rem" }}>
            "A full-stack developer who loves crafting interactive and dynamic web applications using ReactJS and Spring Boot. Always eager to learn and explore new technologies!"
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            My Skills
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: 2,
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Chip
                  label={skill}
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    padding: "12px",
                    color: "#fff",
                    backgroundColor: "linear-gradient(to right, #f1c40f, #f39c12)", // Light yellow/orange gradient
                    transition: "transform 0.3s, background-color 0.3s",
                    "&:hover": {
                      backgroundColor: "linear-gradient(to right, #f39c12, #f1c40f)",
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, width: "100%", maxWidth: "1200px" }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Education
        </Typography>
        <Grid container spacing={3}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  boxShadow: 3,
                  backgroundColor: "#b2dfdb", // Light teal color for education cards
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  {edu.degree}
                </Typography>
                <Typography variant="body1">{edu.school}</Typography>
                <Typography variant="body2" sx={{ mt: 1, fontStyle: "italic" }}>
                  {edu.year}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
