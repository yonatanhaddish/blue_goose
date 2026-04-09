"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import Image from "next/image";
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
          backgroundColor: scrolled ? "rgba(245,243,239,0.92)" : BG,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(0,0,0,0.08)" : "transparent",
          transition: "background-color 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
        }}
      >
        {/* Logo */}
        <Box
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{
            display: "flex", alignItems: "center", gap: "10px",
            cursor: "pointer", userSelect: "none",
            transition: "opacity 0.2s",
            "&:hover": { opacity: 0.8 },
          }}
        >
          <Box sx={{
            width: "34px", height: "34px", borderRadius: "9px",
            overflow: "hidden", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Image src="/images/logo.png" alt="Blue Goose" width={34} height={34} style={{ objectFit: "contain" }} />
          </Box>
          <Typography sx={{
            fontFamily: FD, fontWeight: 800, fontSize: "19px",
            letterSpacing: "-0.5px",
          }}>
            <Box component="span" sx={{ color: ACCENT }}>Blue</Box>
            <Box component="span" sx={{ color: "#F97316" }}> Goose</Box>
          </Typography>
        </Box>

        {/* Desktop links */}
        <Box sx={{
          display: "none",
          "@media (min-width: 1024px)": { display: "flex" },
          alignItems: "center", gap: "4px",
        }}>
          {NAV.slice(0, -1).map((item) => (
            <Box
              key={item}
              onClick={() => go(item)}
              sx={{
                position: "relative",
                px: "12px", py: "7px", borderRadius: "8px",
                fontFamily: FB, fontWeight: 500, fontSize: "14.5px", color: "#666",
                cursor: "pointer", transition: "color 0.2s",
                "&:hover": { color: DARK },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "3px", left: "50%",
                  width: 0, height: "1.5px",
                  backgroundColor: ACCENT,
                  transform: "translateX(-50%)",
                  transition: "width 0.25s ease",
                },
                "&:hover::after": { width: "50%" },
              }}
            >
              {item}
            </Box>
          ))}

          {/* Divider */}
          <Box sx={{ width: "1px", height: "18px", backgroundColor: "rgba(0,0,0,0.1)", mx: "8px" }} />

          {/* CTA */}
          <Box
            onClick={() => go("Contact Us")}
            sx={{
              px: "18px", py: "8px",
              backgroundColor: DARK, color: BG,
              borderRadius: "100px",
              fontFamily: FB, fontWeight: 600, fontSize: "14.5px",
              cursor: "pointer", transition: "all 0.25s",
              "&:hover": {
                backgroundColor: ACCENT,
                transform: "translateY(-1px)",
                boxShadow: "0 6px 20px rgba(59,130,246,0.3)",
              },
            }}
          >
            Contact Us
          </Box>
        </Box>

        {/* Mobile burger */}
        <IconButton
          onClick={() => setOpen(true)}
          size="small"
          sx={{
            display: "flex",
            "@media (min-width: 1024px)": { display: "none" },
            color: DARK,
            width: "38px", height: "38px", borderRadius: "10px",
            border: "1px solid rgba(0,0,0,0.09)",
            backgroundColor: "rgba(0,0,0,0.03)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.07)" },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
            backgroundColor: BG,
            boxShadow: "-8px 0 40px rgba(0,0,0,0.08)",
            border: "none",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", p: "24px" }}>

          {/* Drawer header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "36px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box sx={{ width: "30px", height: "30px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
                <Image src="/images/logo.png" alt="Blue Goose" width={30} height={30} style={{ objectFit: "contain" }} />
              </Box>
              <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: "18px", letterSpacing: "-0.4px" }}>
                <Box component="span" sx={{ color: ACCENT }}>Blue</Box>
                <Box component="span" sx={{ color: "#F97316" }}> Goose</Box>
              </Typography>
            </Box>
            <IconButton
              onClick={() => setOpen(false)}
              size="small"
              sx={{
                width: "34px", height: "34px", borderRadius: "9px",
                color: DARK, border: "1px solid rgba(0,0,0,0.09)",
                backgroundColor: "rgba(0,0,0,0.03)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.07)" },
              }}
            >
              <CloseIcon sx={{ fontSize: "16px" }} />
            </IconButton>
          </Box>

          {/* Nav items */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", flexGrow: 1 }}>
            {NAV.slice(0, -1).map((item) => (
              <Box
                key={item}
                onClick={() => go(item)}
                sx={{
                  px: "14px", py: "13px", borderRadius: "12px",
                  fontFamily: FB, fontWeight: 500, fontSize: "16px", color: "#555",
                  cursor: "pointer", transition: "all 0.18s",
                  "&:hover": {
                    color: DARK,
                    backgroundColor: "rgba(0,0,0,0.05)",
                  },
                }}
              >
                {item}
              </Box>
            ))}
          </Box>

          {/* CTA */}
          <Box
            onClick={() => go("Contact Us")}
            sx={{
              mt: "24px", py: "14px",
              backgroundColor: DARK, color: BG,
              borderRadius: "14px", textAlign: "center",
              fontFamily: FB, fontWeight: 600, fontSize: "16px",
              cursor: "pointer", transition: "all 0.2s",
              "&:hover": { backgroundColor: ACCENT, boxShadow: "0 6px 24px rgba(59,130,246,0.3)" },
            }}
          >
            Contact Us
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
