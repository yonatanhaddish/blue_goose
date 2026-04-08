"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { FaLaptopCode, FaShoppingCart, FaChartPie, FaExternalLinkAlt } from "react-icons/fa";

const ACCENT = "#3B82F6";
const DARK = "#131313";
const CARD_BG = "#181818";
const TEXT = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const PROJECTS = [
  {
    category: "Logistics & Fleet",
    title: "CB Transportation",
    desc: "A professional, scalable web presence for a transportation client — showcasing fleet capabilities and streamlining logistics inquiries.",
    tech: ["React", "Next.js", "Material UI"],
    icon: <FaLaptopCode size={44} />,
    live: true,
    url: "https://www.cbtransportationcanada.com/",
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(99,179,255,0.08) 50%, transparent 80%)",
    iconColor: "#3B82F6",
    accentColor: "#3B82F6",
  },
  {
    category: "Retail Platform",
    title: "Aura E-Commerce",
    desc: "A high-converting digital storefront with seamless checkout integration, dynamic inventory management, and mobile-first design.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    icon: <FaShoppingCart size={44} />,
    live: false,
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(192,132,252,0.08) 50%, transparent 80%)",
    iconColor: "#A855F7",
    accentColor: "#A855F7",
  },
  {
    category: "SaaS Dashboard",
    title: "Metric Flow",
    desc: "An intuitive analytics platform with real-time data visualization and customizable reporting for enterprise teams.",
    tech: ["React", "Chart.js", "Express"],
    icon: <FaChartPie size={44} />,
    live: false,
    gradient: "linear-gradient(135deg, rgba(20,184,166,0.18) 0%, rgba(94,234,212,0.08) 50%, transparent 80%)",
    iconColor: "#14B8A6",
    accentColor: "#14B8A6",
  },
];

export default function OurWork() {
  return (
    <Box
      id="our-work"
      sx={{
        backgroundColor: DARK,
        px: { xs: "24px", md: "48px", lg: "72px" },
        py: { xs: "80px", md: "120px" },
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <Box sx={{
        position: "absolute", bottom: "-80px", right: "-80px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
        animation: "orb-drift 18s ease-in-out infinite",
      }} />

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          gap: "24px", mb: "64px",
          position: "relative", zIndex: 1,
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: FB, fontSize: "13px", fontWeight: 700, color: ACCENT, letterSpacing: "2px", textTransform: "uppercase", mb: "14px" }}>
            Featured Work
          </Typography>
          <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: { xs: "38px", md: "56px" }, color: TEXT, letterSpacing: "-1.5px", lineHeight: 1.08 }}>
            Projects we're<br />
            <Box component="span" sx={{ color: ACCENT }}>proud of.</Box>
          </Typography>
        </Box>
        <Typography sx={{ fontFamily: FB, fontSize: "17px", color: "#555", lineHeight: 1.75, maxWidth: "300px" }}>
          Digital experiences engineered for forward-thinking brands.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          gap: "18px",
          position: "relative", zIndex: 1,
        }}
      >
        {PROJECTS.map((p, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: CARD_BG,
              borderRadius: "22px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex", flexDirection: "column",
              transition: "all 0.35s ease",
              cursor: "default",
              "&:hover": {
                transform: "translateY(-8px)",
                border: `1px solid ${p.accentColor}33`,
                boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 40px ${p.accentColor}12`,
                "& .p-icon": { transform: "scale(1.15)", filter: `drop-shadow(0 6px 16px ${p.accentColor}66)` },
                "& .p-header": { backgroundImage: p.gradient.replace("0.18", "0.28").replace("0.08", "0.14") },
              },
            }}
          >
            {/* Visual header */}
            <Box
              className="p-header"
              sx={{
                height: "190px",
                backgroundImage: p.gradient,
                backgroundColor: "rgba(255,255,255,0.025)",
                display: "flex", justifyContent: "center", alignItems: "center",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                transition: "background-image 0.35s ease",
              }}
            >
              {/* Inner grid dots */}
              <Box sx={{
                position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                pointerEvents: "none",
              }} />

              <Box
                className="p-icon"
                sx={{
                  color: p.iconColor,
                  transition: "transform 0.35s ease, filter 0.35s ease",
                  position: "relative", zIndex: 1,
                }}
              >
                {p.icon}
              </Box>

              {/* Project number badge */}
              <Box sx={{
                position: "absolute", top: "14px", left: "14px",
                backgroundColor: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px", px: "10px", py: "5px",
              }}>
                <Typography sx={{ fontFamily: FD, fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.35)", letterSpacing: "0.5px" }}>
                  {String(i + 1).padStart(2, "0")}
                </Typography>
              </Box>

              {!p.live && (
                <Box
                  sx={{
                    position: "absolute", top: "14px", right: "14px",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "100px", px: "10px", py: "5px",
                  }}
                >
                  <Typography sx={{ fontFamily: FB, fontSize: "10px", fontWeight: 700, color: "#555", letterSpacing: "0.5px" }}>
                    IN PROGRESS
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Content */}
            <Box sx={{ p: { xs: "24px", md: "28px" }, display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Typography sx={{ fontFamily: FB, fontSize: "13px", fontWeight: 700, color: p.accentColor, letterSpacing: "1.5px", textTransform: "uppercase", mb: "8px", opacity: 0.9 }}>
                {p.category}
              </Typography>
              <Typography sx={{ fontFamily: FD, fontWeight: 700, fontSize: "23px", color: TEXT, letterSpacing: "-0.4px", mb: "12px" }}>
                {p.title}
              </Typography>
              <Typography sx={{ fontFamily: FB, fontSize: "16px", color: "#666", lineHeight: 1.7, mb: "24px", flexGrow: 1 }}>
                {p.desc}
              </Typography>

              {/* Tech chips */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px", mb: "24px" }}>
                {p.tech.map((t) => (
                  <Box
                    key={t}
                    sx={{
                      px: "10px", py: "5px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "6px",
                      fontFamily: FB, fontSize: "13px", fontWeight: 600, color: "#666",
                    }}
                  >
                    {t}
                  </Box>
                ))}
              </Box>

              {/* Link */}
              {p.live ? (
                <Box
                  component="a"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "inline-flex", alignItems: "center", gap: "7px",
                    fontFamily: FB, fontSize: "15px", fontWeight: 700,
                    color: p.accentColor, textDecoration: "none",
                    transition: "gap 0.2s",
                    "&:hover": { gap: "10px" },
                  }}
                >
                  View Live Site <FaExternalLinkAlt size={10} />
                </Box>
              ) : (
                <Typography sx={{ fontFamily: FB, fontSize: "15px", fontWeight: 600, color: "#3A3A3A" }}>
                  Coming soon
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
