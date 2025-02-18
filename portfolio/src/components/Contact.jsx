import { Box, Button, Typography, Grid, Paper, IconButton, Container } from "@mui/material";
import { Phone, Email, LocationOn, LinkedIn, GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";

const contactDetails = [
  { icon: <Phone fontSize="large" />, text: "+91 9834276435" },
  { icon: <Email fontSize="large" />, text: "pranavpardeshi64@gmail.com" },
  { icon: <LocationOn fontSize="large" />, text: "Pune, India" },
];

const socialLinks = [
  { icon: <LinkedIn fontSize="large" />, link: "https://www.linkedin.com/in/pranavpardeshi25/" },
  { icon: <GitHub fontSize="large" />, link: "https://github.com/Pran25" },
];

const Contact = () => {
  const handleDownload = () => {
    const resumeUrl = `Pranav_Pardeshi_CV.pdf`; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Pranav-Pardeshi-CV.pdf");
    link.click();
  };

  return (
    <Box
    id="contact"
    sx={{
      py: 8,
      px: 2,
      background: "linear-gradient(to right, #1976D2, #21CBF3)",
      color: "white",
      width: "100%", 
    }}
  >
    <Container>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, textAlign: "center" }}>
        Get In Touch
      </Typography>
  
      <Grid container spacing={4} justifyContent="center">
        {contactDetails.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Paper
                elevation={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  color: "#333",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                {item.icon}
                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold", textAlign: "center" }}>
                  {item.text}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
  
      <Box sx={{ mt: 6, display: "flex", justifyContent: "center", gap: 3 }}>
        {socialLinks.map((social, index) => (
          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} key={index}>
            <IconButton
              href={social.link}
              target="_blank"
              sx={{ color: "#fff", fontSize: "36px", transition: "all 0.3s ease" }}
            >
              {social.icon}
            </IconButton>
          </motion.div>
        ))}
      </Box>
  
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1976D2",
              color: "white",
              fontWeight: "bold",
              px: 4,
              py: 2,
              fontSize: "1.1rem",
              borderRadius: "25px",
              "&:hover": { backgroundColor: "#388e3c" },
            }}
            onClick={handleDownload}
          >
            My Resume
          </Button>
        </motion.div>
  
        <Box sx={{ mt: 4, width: "100%", maxWidth: "800px", mx: "auto" }}>
          <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: "bold", textAlign: "center" }}>
            Let's connect and explore potential job opportunities! I am an enthusiastic fresher eager to contribute my skills and grow in the field.
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
  
  );
};

export default Contact;
