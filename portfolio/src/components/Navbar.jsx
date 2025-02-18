import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const menuItems = [
  { label: "Home", to: "hero" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact Me", to: "contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#1976D2",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            padding: "5px 0",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: { xs: 2, md: 3 },
            }}
          >
          
            <motion.div whileHover={{ scale: 1.1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Pranav Pardeshi
              </Typography>
            </motion.div>

           
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {menuItems.map((item) => (
                <motion.div whileHover={{ scale: 1.1 }} key={item.to}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70} 
                  >
                    <Button sx={{ color: "white", fontWeight: "bold" }}>
                      {item.label}
                    </Button>
                  </ScrollLink>
                </motion.div>
              ))}
            </Box>

           
            <IconButton
              edge="end"
              color="inherit"
              sx={{ display: { md: "none" } }}
              onClick={handleMenuToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </motion.div>

   
      <Drawer anchor="right" open={mobileOpen} onClose={handleMenuToggle}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.to}
              onClick={() => setMobileOpen(false)} 
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListItemText primary={item.label} />
                </motion.div>
              </ScrollLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
