import { Box, Typography, Card, CardContent, CardActions, Button, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Lugx Store",
    description: "An eCommerce website for buying games with a downloadable receipt feature.",
    technologies: ["ReactJS", "Bootstrap", "JSON API", "CSS", "JQuery"],
    github: "https://github.com/Pran25/Pranav-Projects/tree/main/LugxStore/lugxstore",
  },
  {
    name: "MediHome",
    description: "A web application using Servlets, JSP, and Hibernate to manage hospital records.",
    technologies: ["Java", "JSP", "Hibernate", "MySQL", "Servlet"],
    github: "https://github.com/Pran25/Pranav-Projects/tree/main/MediHome",
  },
  {
    name: "Product Management System",
    description: "A full-stack project for managing product inventories.",
    technologies: ["ReactJS", "Spring Boot", "MySQL", "Hibernate"],
    github: "https://github.com/yourgithub/product-management",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        textAlign: "center",
        py: 8,
        px: 2,
        backgroundColor: "#F9F9F9",
        mt: 18, 
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        My Projects 💻
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  maxWidth: 360,
                  mx: "auto",
                  p: 2,
                  borderRadius: 3,
                  boxShadow: 5,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "translateY(-5px)" },
                  backgroundColor: "white",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {project.name}
                  </Typography>

                  <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
                    {project.description}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    {project.technologies.map((tech, idx) => (
                      <Chip key={idx} label={tech} sx={{ mr: 1, mb: 1, fontWeight: "bold" }} color="primary" />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ justifyContent: "center", mt: "auto" }}>
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        backgroundColor: "#333",
                        color: "white",
                        "&:hover": { backgroundColor: "#222" },
                      }}
                      href={project.github}
                      target="_blank"
                    >
                      View on GitHub
                    </Button>
                  </motion.div>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
