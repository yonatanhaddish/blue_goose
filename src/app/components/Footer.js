"use client";

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GiGoose } from "react-icons/gi";
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const ACCENT = "#3B82F6";
const DARK = "#131313";
const TEXT = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const COMPANY = ["About Us", "Services", "Our Work", "Careers", "Contact"];
const SERVICES_LIST = ["Web Development", "UI/UX Design", "Mobile Apps", "SEO Optimization", "Technical Support"];
const SOCIALS = [FaLinkedinIn, FaTwitter, FaGithub, FaInstagram];

const ID_MAP = { Services: "services", "Our Work": "our-work", Contact: "contact" };

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (link) => {
    const id = ID_MAP[link];
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        backgroundColor: DARK,
        px: { xs: "24px", md: "48px", lg: "72px" },
        pt: { xs: "64px", md: "88px" },
        pb: { xs: "28px", md: "36px" },
      }}
    >
      {/* Main grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "2fr 1fr 1.4fr 1.4fr" },
          gap: { xs: "40px 24px", md: "0 48px" },
          pb: { xs: "48px", md: "64px" },
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Brand col */}
        <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "9px", mb: "16px" }}>
            <GiGoose size={28} color={ACCENT} />
            <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: "20px", color: TEXT, letterSpacing: "-0.4px" }}>
              Blue Goose
            </Typography>
          </Box>
          <Typography sx={{ fontFamily: FB, fontSize: "16px", color: "#555", lineHeight: 1.75, maxWidth: "260px", mb: "24px" }}>
            Premium digital solutions for businesses that want to stand out and scale.
          </Typography>
          <Box sx={{ display: "flex", gap: "7px" }}>
            {SOCIALS.map((Icon, i) => (
              <IconButton
                key={i}
                size="small"
                sx={{
                  width: "34px", height: "34px", borderRadius: "8px",
                  color: "#555", backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.2s",
                  "&:hover": { backgroundColor: ACCENT, color: "#fff", borderColor: "transparent", transform: "translateY(-2px)" },
                }}
              >
                <Icon size={13} />
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Company */}
        <Box>
          <Typography sx={{ fontFamily: FB, fontSize: "13px", fontWeight: 700, color: "#444", letterSpacing: "1.5px", textTransform: "uppercase", mb: "20px" }}>
            Company
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {COMPANY.map((link) => (
              <Typography
                key={link}
                onClick={() => go(link)}
                sx={{
                  fontFamily: FB, fontSize: "16px", color: "#555",
                  cursor: "pointer", width: "fit-content", transition: "color 0.2s",
                  "&:hover": { color: TEXT },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Services */}
        <Box>
          <Typography sx={{ fontFamily: FB, fontSize: "13px", fontWeight: 700, color: "#444", letterSpacing: "1.5px", textTransform: "uppercase", mb: "20px" }}>
            Services
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {SERVICES_LIST.map((s) => (
              <Typography
                key={s}
                sx={{
                  fontFamily: FB, fontSize: "16px", color: "#555",
                  cursor: "default", width: "fit-content", transition: "color 0.2s",
                  "&:hover": { color: TEXT },
                }}
              >
                {s}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Contact */}
        <Box>
          <Typography sx={{ fontFamily: FB, fontSize: "13px", fontWeight: 700, color: "#444", letterSpacing: "1.5px", textTransform: "uppercase", mb: "20px" }}>
            Contact
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {["hello@bluegoosedigital.com", "+1 (555) 123-4567", "Toronto, ON, Canada"].map((v) => (
              <Typography key={v} sx={{ fontFamily: FB, fontSize: "16px", color: "#555", lineHeight: 1.5 }}>
                {v}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Bottom bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          pt: "24px",
          gap: "10px",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography sx={{ fontFamily: FB, fontSize: "15px", color: "#3A3A3A" }}>
          © {year} Blue Goose Digital. All rights reserved.
        </Typography>
        <Typography sx={{ fontFamily: FB, fontSize: "15px", color: "#3A3A3A" }}>
          Designed & built in Toronto 🇨🇦
        </Typography>
      </Box>
    </Box>
  );
}
