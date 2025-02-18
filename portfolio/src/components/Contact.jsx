import { forwardRef } from "react";
import { Box, Typography, Grid, Paper, IconButton, Button } from "@mui/material";
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

const Contact = forwardRef((props, ref) => {
  const handleDownload = () => {
    const resumeUrl = "/Pranav-Pardeshi-CV.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Pranav-Pardeshi-CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box ref={ref} id="contact" sx={{ textAlign: "center", py: 8, px: 2 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Contact Me
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {contactDetails.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 3,
                  borderRadius: 3,
                  boxShadow: 5,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                {item.icon}
                <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
                  {item.text}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 3 }}>
        {socialLinks.map((social, index) => (
          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} key={index}>
            <IconButton href={social.link} target="_blank" sx={{ color: "#333", fontSize: "30px" }}>
              {social.icon}
            </IconButton>
          </motion.div>
        ))}
      </Box>

      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
        <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "#1976d2",
            color: "white",
            fontWeight: "bold",
            px: 3,
            py: 1.5,
            fontSize: "1rem",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
          onClick={handleDownload}
        >
          Download Resume
        </Button>
      </motion.div>
    </Box>
  );
});

export default Contact;
