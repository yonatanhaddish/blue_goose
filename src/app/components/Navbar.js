"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { GiGoose } from "react-icons/gi";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["About Us", "Services", "Why Us", "Our Work", "Contact"];

const style = {
  navbar_box: {
    borderBottom: "solid #0048BB 2px",
    display: "flex",
    height: "70px",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    // Add padding for better spacing on different screen sizes
    paddingLeft: { xs: "20px", md: "40px" },
    paddingRight: { xs: "20px", md: "40px" },
    backgroundColor: "white",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo_box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    gap: "10px", // Adds space between the goose and the text
  },
  navlist: {
    // Hidden on extra-small (mobile) screens, Flex on medium (desktop) screens
    display: { xs: "none", md: "flex" },
    width: "60%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  typo: {
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#0048BB",
    },
  },
  // New style for the hamburger button
  hamburger_btn: {
    display: { xs: "flex", md: "none" }, // Visible on mobile, hidden on desktop
    color: "#0048BB",
  },
};

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // The content inside the side drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <GiGoose size={30} color="#0048BB" />
        <Typography variant="h6" sx={{ color: "#0048BB", fontWeight: "bold" }}>
          Blue Goose
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{ style: style.typo }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={style.navbar_box}>
        <Box sx={style.logo_box}>
          <GiGoose size={40} color="#0048BB" />
          <Typography
            sx={{ color: "#0048BB", fontSize: "20px", fontWeight: "bold" }}
          >
            Blue Goose
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box sx={style.navlist}>
          {navItems.map((item) => (
            <Typography key={item} sx={style.typo}>
              {item}
            </Typography>
          ))}
        </Box>

        {/* Mobile Hamburger Icon */}
        <IconButton
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={style.hamburger_btn}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Mobile Drawer Component */}
      <Drawer
        anchor="right" // Opens from the right side
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
