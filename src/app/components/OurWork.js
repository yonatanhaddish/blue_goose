"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { FaLaptopCode, FaShoppingCart, FaChartPie, FaExternalLinkAlt } from "react-icons/fa";

const ACCENT = "#E8562F";
const DARK = "#131313";
const CARD_BG = "#1A1A1A";
const TEXT = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const PROJECTS = [
  {
    category: "Logistics & Fleet",
    title: "CB Transportation",
    desc: "A professional, scalable web presence for a transportation client — showcasing fleet capabilities and streamlining logistics inquiries.",
    tech: ["React", "Next.js", "Material UI"],
    icon: <FaLaptopCode size={40} color={ACCENT} />,
    live: true,
    url: "https://www.cbtransportationcanada.com/",
  },
  {
    category: "Retail Platform",
    title: "Aura E-Commerce",
    desc: "A high-converting digital storefront with seamless checkout integration, dynamic inventory management, and mobile-first design.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    icon: <FaShoppingCart size={40} color={ACCENT} />,
    live: false,
  },
  {
    category: "SaaS Dashboard",
    title: "Metric Flow",
    desc: "An intuitive analytics platform with real-time data visualization and customizable reporting for enterprise teams.",
    tech: ["React", "Chart.js", "Express"],
    icon: <FaChartPie size={40} color={ACCENT} />,
    live: false,
  },
];

export default function OurWork() {
  return (
    <Box
      id="our-work"
      sx={{ backgroundColor: DARK, px: { xs: "24px", md: "48px", lg: "72px" }, py: { xs: "80px", md: "120px" } }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          gap: "24px", mb: "64px",
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: FB, fontSize: "11px", fontWeight: 700, color: ACCENT, letterSpacing: "2px", textTransform: "uppercase", mb: "14px" }}>
            Featured Work
          </Typography>
          <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: { xs: "34px", md: "50px" }, color: TEXT, letterSpacing: "-1.5px", lineHeight: 1.08 }}>
            Projects we're<br />
            <Box component="span" sx={{ color: ACCENT }}>proud of.</Box>
          </Typography>
        </Box>
        <Typography sx={{ fontFamily: FB, fontSize: "15px", color: "#555", lineHeight: 1.75, maxWidth: "280px" }}>
          Digital experiences engineered for forward-thinking brands.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          gap: "16px",
        }}
      >
        {PROJECTS.map((p, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: CARD_BG,
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex", flexDirection: "column",
              transition: "all 0.3s ease",
              cursor: "default",
              "&:hover": {
                transform: "translateY(-6px)",
                border: "1px solid rgba(232,86,47,0.25)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                "& .p-icon-bg": { backgroundColor: "rgba(232,86,47,0.12)" },
              },
            }}
          >
            {/* Visual header */}
            <Box
              className="p-icon-bg"
              sx={{
                height: "180px",
                backgroundColor: "rgba(255,255,255,0.03)",
                display: "flex", justifyContent: "center", alignItems: "center",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                transition: "background 0.3s",
              }}
            >
              {p.icon}
              {!p.live && (
                <Box
                  sx={{
                    position: "absolute", top: "14px", right: "14px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "100px", px: "10px", py: "4px",
                  }}
                >
                  <Typography sx={{ fontFamily: FB, fontSize: "10px", fontWeight: 600, color: "#555", letterSpacing: "0.5px" }}>
                    IN PROGRESS
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Content */}
            <Box sx={{ p: { xs: "24px", md: "28px" }, display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Typography sx={{ fontFamily: FB, fontSize: "11px", fontWeight: 700, color: ACCENT, letterSpacing: "1.5px", textTransform: "uppercase", mb: "8px" }}>
                {p.category}
              </Typography>
              <Typography sx={{ fontFamily: FD, fontWeight: 700, fontSize: "20px", color: TEXT, letterSpacing: "-0.4px", mb: "12px" }}>
                {p.title}
              </Typography>
              <Typography sx={{ fontFamily: FB, fontSize: "14px", color: "#666", lineHeight: 1.7, mb: "24px", flexGrow: 1 }}>
                {p.desc}
              </Typography>

              {/* Tech chips */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px", mb: "24px" }}>
                {p.tech.map((t) => (
                  <Box
                    key={t}
                    sx={{
                      px: "10px", py: "4px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "6px",
                      fontFamily: FB, fontSize: "11px", fontWeight: 600, color: "#777",
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
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    fontFamily: FB, fontSize: "13px", fontWeight: 700,
                    color: ACCENT, textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  View Live Site <FaExternalLinkAlt size={10} />
                </Box>
              ) : (
                <Typography sx={{ fontFamily: FB, fontSize: "13px", fontWeight: 600, color: "#444" }}>
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
