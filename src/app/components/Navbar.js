"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import { GiGoose } from "react-icons/gi";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const ACCENT = "#3B82F6";
const BG = "#F5F3EF";
const DARK = "#131313";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";
const NAV = ["Home", "About Us", "Services", "Why Us", "Our Work", "Reviews", "Contact Us"];
const ID_MAP = {
  "Home": null,
  "About Us": "about",
  "Services": "services",
  "Why Us": "why-us",
  "Our Work": "our-work",
  "Reviews": "reviews",
  "Contact Us": "contact",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (item) => {
    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(ID_MAP[item])?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: "20px", md: "48px", lg: "72px" },
          backgroundColor: scrolled ? "rgba(245,243,239,0.9)" : BG,
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(0,0,0,0.07)" : "transparent",
          transition: "all 0.35s ease",
        }}
      >
        {/* Logo */}
        <Box
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{ display: "flex", alignItems: "center", gap: "9px", cursor: "pointer", userSelect: "none" }}
        >
          <GiGoose size={30} color={ACCENT} />
          <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: "20px", color: DARK, letterSpacing: "-0.4px" }}>
            Blue Goose
          </Typography>
        </Box>

        {/* Desktop links */}
        <Box sx={{ display: "none", "@media (min-width: 1024px)": { display: "flex" }, alignItems: "center", gap: "2px" }}>
          {NAV.slice(0, -1).map((item) => (
            <Box
              key={item}
              onClick={() => go(item)}
              sx={{
                px: "13px", py: "8px", borderRadius: "8px",
                fontFamily: FB, fontWeight: 500, fontSize: "15px", color: "#555",
                cursor: "pointer", transition: "all 0.2s",
                "&:hover": { color: DARK, backgroundColor: "rgba(0,0,0,0.05)" },
              }}
            >
              {item}
            </Box>
          ))}
          {/* CTA pill */}
          <Box
            onClick={() => go("Contact Us")}
            sx={{
              ml: "10px", px: "20px", py: "9px",
              backgroundColor: DARK, color: BG,
              borderRadius: "100px",
              fontFamily: FB, fontWeight: 600, fontSize: "15px",
              cursor: "pointer", transition: "all 0.25s",
              "&:hover": { backgroundColor: ACCENT, transform: "translateY(-1px)", boxShadow: "0 6px 20px rgba(59,130,246,0.35)" },
            }}
          >
            Contact Us
          </Box>
        </Box>

        {/* Mobile burger */}
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: "flex", "@media (min-width: 1024px)": { display: "none" }, color: DARK }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: 280, backgroundColor: BG, boxShadow: "none", borderLeft: "1px solid rgba(0,0,0,0.08)" } }}
      >
        <Box sx={{ p: "28px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "40px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <GiGoose size={26} color={ACCENT} />
              <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: "19px", color: DARK }}>Blue Goose</Typography>
            </Box>
            <IconButton onClick={() => setOpen(false)} size="small" sx={{ color: DARK }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          {NAV.map((item) => (
            <Box
              key={item}
              onClick={() => go(item)}
              sx={{
                py: "16px",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                fontFamily: FB, fontWeight: 600, fontSize: "18px", color: DARK,
                cursor: "pointer", transition: "color 0.2s",
                "&:hover": { color: ACCENT },
              }}
            >
              {item}
            </Box>
          ))}
          <Box
            onClick={() => go("Contact Us")}
            sx={{
              mt: "28px", py: "14px",
              backgroundColor: DARK, color: BG,
              borderRadius: "12px", textAlign: "center",
              fontFamily: FB, fontWeight: 600, fontSize: "17px",
              cursor: "pointer", transition: "background 0.2s",
              "&:hover": { backgroundColor: ACCENT },
            }}
          >
            Contact Us
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
