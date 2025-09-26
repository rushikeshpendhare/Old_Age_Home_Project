import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Survey", path: "/survey" },
  { title: "Gallery", path: "/gallery" },
  { title: "Admission", path: "/admission" },
  { title: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <List>
      {navLinks.map(({ title, path }) => (
        <ListItem button key={title} component={Link} to={path} onClick={toggleDrawer(false)}>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#00b894" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <img src={logo} alt="NIVARA logo" style={{ height: 50, borderRadius: "50%" }} />
            <Typography variant="h6" component="div" sx={{ marginLeft: 2, fontWeight: 700 }}>
              NIVARA <span style={{ color: "#f0f0f0" }}>Old Age Home</span>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <nav style={{ display: "flex", gap: 20 }}>
              {navLinks.map(({ title, path }, index) =>
                title === "Contact Us" ? (
                  <Button
                    key={title}
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to={path}
                    sx={{ borderRadius: 50, paddingX: 3, fontWeight: "bold" }}
                  >
                    {title}
                  </Button>
                ) : (
                  <Button
                    key={title}
                    component={Link}
                    to={path}
                    sx={{ color: "white", fontWeight: 600, textTransform: "none" }}
                  >
                    {title}
                  </Button>
                )
              )}
            </nav>
          </motion.div>

          <IconButton
            edge="end"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { sm: "none" }, color: "white" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
}
