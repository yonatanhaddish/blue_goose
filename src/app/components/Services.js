"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { FaCode, FaPaintBrush, FaMobileAlt, FaChartLine, FaCogs } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ACCENT = "#E8562F";
const DARK = "#131313";
const ROW_BG = "#181818";
const TEXT = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const SERVICES = [
  { num: "01", icon: <FaCode size={18} />, title: "Web Development", desc: "Custom, high-performance websites built on modern stacks — fast, secure, and engineered to scale with your ambitions." },
  { num: "02", icon: <FaPaintBrush size={18} />, title: "UI/UX Design", desc: "Interfaces that convert. We craft pixel-perfect designs that delight users and serve real business goals." },
  { num: "03", icon: <FaMobileAlt size={18} />, title: "Mobile App Development", desc: "Native and cross-platform apps built for performance, reliability, and seamless user engagement." },
  { num: "04", icon: <FaChartLine size={18} />, title: "SEO Optimization", desc: "Data-driven strategies to grow organic traffic, improve search rankings, and capture the right audience." },
  { num: "05", icon: <FaCogs size={18} />, title: "Technical Support", desc: "Ongoing maintenance and monitoring to keep your products running smoothly around the clock." },
];

export default function Services() {
  return (
    <Box
      id="services"
      sx={{ backgroundColor: DARK, px: { xs: "24px", md: "48px", lg: "72px" }, py: { xs: "80px", md: "120px" } }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          gap: "24px",
          mb: "64px",
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: FB, fontSize: "11px", fontWeight: 700, color: ACCENT, letterSpacing: "2px", textTransform: "uppercase", mb: "14px" }}>
            What We Do
          </Typography>
          <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: { xs: "34px", md: "50px" }, color: TEXT, letterSpacing: "-1.5px", lineHeight: 1.08 }}>
            Services built for<br />
            <Box component="span" sx={{ color: ACCENT }}>modern businesses.</Box>
          </Typography>
        </Box>
        <Typography sx={{ fontFamily: FB, fontSize: "15px", color: "#555", lineHeight: 1.75, maxWidth: "280px" }}>
          End-to-end digital solutions from strategy through execution — everything your brand needs online.
        </Typography>
      </Box>

      {/* Service Rows */}
      <Box
        sx={{
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >
        {SERVICES.map((s, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "16px", md: "28px" },
              px: { xs: "24px", md: "40px" },
              py: { xs: "24px", md: "30px" },
              backgroundColor: ROW_BG,
              borderBottom: i < SERVICES.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              cursor: "default",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#222",
                "& .s-num": { color: ACCENT },
                "& .s-icon-box": { backgroundColor: ACCENT, color: "#fff" },
                "& .s-arrow": { opacity: 1, transform: "translateX(0) rotate(-45deg)" },
              },
            }}
          >
            {/* Number */}
            <Typography
              className="s-num"
              sx={{
                fontFamily: FD, fontWeight: 800, fontSize: "12px",
                color: "rgba(255,255,255,0.18)", letterSpacing: "1px",
                width: { xs: "auto", md: "44px" }, flexShrink: 0,
                transition: "color 0.25s",
              }}
            >
              {s.num}
            </Typography>

            {/* Icon */}
            <Box
              className="s-icon-box"
              sx={{
                width: "42px", height: "42px", borderRadius: "10px", flexShrink: 0,
                backgroundColor: "rgba(232,86,47,0.1)", color: ACCENT,
                display: "flex", justifyContent: "center", alignItems: "center",
                transition: "all 0.25s",
              }}
            >
              {s.icon}
            </Box>

            {/* Text */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography sx={{ fontFamily: FD, fontWeight: 700, fontSize: { xs: "16px", md: "18px" }, color: TEXT, letterSpacing: "-0.3px", mb: "4px" }}>
                {s.title}
              </Typography>
              <Typography sx={{ fontFamily: FB, fontSize: "14px", color: "#666", lineHeight: 1.6, display: { xs: "none", sm: "block" } }}>
                {s.desc}
              </Typography>
            </Box>

            {/* Arrow */}
            <Box
              className="s-arrow"
              sx={{
                display: { xs: "none", md: "flex" },
                width: "34px", height: "34px", flexShrink: 0,
                borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)",
                justifyContent: "center", alignItems: "center",
                color: "rgba(255,255,255,0.25)",
                opacity: 0.4, transform: "translateX(-4px) rotate(0deg)",
                transition: "all 0.25s ease",
              }}
            >
              <FaArrowRight size={11} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
