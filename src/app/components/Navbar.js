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
            width: "44px", height: "44px", borderRadius: "11px",
            overflow: "hidden", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Image src="/images/logo.png" alt="Iron Goose" width={44} height={44} style={{ objectFit: "contain" }} priority />
          </Box>
          <Typography sx={{
            fontFamily: FD, fontWeight: 800, fontSize: "24px",
            letterSpacing: "-0.5px",
          }}>
            <Box component="span" sx={{ color: ACCENT }}>Iron</Box>
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
                px: "12px", py: "7px",
                fontFamily: FB, fontWeight: 500, fontSize: "14.5px", color: "#666",
                cursor: "pointer",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: ACCENT,
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                },
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
            width: "46px", height: "46px", borderRadius: "11px",
            border: "1.5px solid rgba(0,0,0,0.12)",
            backgroundColor: "transparent",
            transition: "all 0.2s ease",
            "&:hover": { backgroundColor: DARK, color: BG, borderColor: DARK },
          }}
        >
          <MenuIcon sx={{ fontSize: "24px" }} />
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
            backgroundColor: DARK,
            boxShadow: "-12px 0 60px rgba(0,0,0,0.3)",
            border: "none",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", p: "28px" }}>

          {/* Drawer header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "48px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box sx={{ width: "38px", height: "38px", flexShrink: 0 }}>
                <Image src="/images/logo.png" alt="Iron Goose" width={38} height={38} style={{ objectFit: "contain" }} />
              </Box>
              <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: "20px", letterSpacing: "-0.4px" }}>
                <Box component="span" sx={{ color: ACCENT }}>Iron</Box>
                <Box component="span" sx={{ color: "#F97316" }}> Goose</Box>
              </Typography>
            </Box>
            <IconButton
              onClick={() => setOpen(false)}
              size="small"
              sx={{
                width: "34px", height: "34px", borderRadius: "9px",
                color: "#666", border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.05)",
                transition: "all 0.2s ease",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)", color: BG },
              }}
            >
              <CloseIcon sx={{ fontSize: "15px" }} />
            </IconButton>
          </Box>

          {/* Nav items */}
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            {NAV.slice(0, -1).map((item, i) => (
              <Box
                key={item}
                onClick={() => go(item)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: "17px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "& .num": { color: "#333", fontFamily: FB, fontSize: "11px", fontWeight: 600, letterSpacing: "0.5px", transition: "color 0.2s", minWidth: "24px" },
                  "& .label": { color: "#777", fontFamily: FD, fontSize: "20px", fontWeight: 700, letterSpacing: "-0.4px", transition: "color 0.2s", flexGrow: 1 },
                  "& .arrow": { color: "transparent", fontSize: "16px", transition: "all 0.2s", transform: "translateX(-6px)" },
                  "&:hover .num": { color: ACCENT },
                  "&:hover .label": { color: BG },
                  "&:hover .arrow": { color: ACCENT, transform: "translateX(0px)" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                  <span className="num">0{i + 1}</span>
                  <span className="label">{item}</span>
                </Box>
                <span className="arrow">→</span>
              </Box>
            ))}
          </Box>

          {/* CTA */}
          <Box
            onClick={() => go("Contact Us")}
            sx={{
              mt: "32px", py: "15px",
              backgroundColor: ACCENT, color: "#fff",
              borderRadius: "14px", textAlign: "center",
              fontFamily: FB, fontWeight: 700, fontSize: "15px",
              cursor: "pointer", transition: "all 0.2s ease",
              boxShadow: "0 4px 24px rgba(59,130,246,0.25)",
              "&:hover": { backgroundColor: "#2563EB", boxShadow: "0 8px 32px rgba(59,130,246,0.4)" },
            }}
          >
            Let's Talk
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
