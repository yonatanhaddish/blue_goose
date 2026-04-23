"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { FaLaptopCode, FaShoppingCart, FaChartPie } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ACCENT = "#3B82F6";
const ORANGE = "#F97316";
const DARK = "#131313";
const TEXT = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const PROJECTS = [
  {
    category: "Logistics & Fleet",
    title: "CB Transportation",
    desc: "A professional, scalable web presence showcasing fleet capabilities and streamlining logistics inquiries.",
    tech: ["React", "Next.js", "Material UI"],
    icon: FaLaptopCode,
    live: true,
    url: "https://www.cbtransportationcanada.com/",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
  },
  {
    category: "Retail Platform",
    title: "Aura E-Commerce",
    desc: "A high-converting digital storefront with seamless checkout, inventory management, and mobile-first design.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    icon: FaShoppingCart,
    live: false,
    color: "#A855F7",
    bg: "rgba(168,85,247,0.08)",
  },
  {
    category: "SaaS Dashboard",
    title: "Metric Flow",
    desc: "An intuitive analytics platform with real-time data visualization and customizable reporting for enterprise teams.",
    tech: ["React", "Chart.js", "Express"],
    icon: FaChartPie,
    live: false,
    color: "#14B8A6",
    bg: "rgba(20,184,166,0.08)",
  },
];

export default function OurWork() {
  return (
    <Box
      id="our-work"
      sx={{
        backgroundColor: DARK,
        px: { xs: "20px", sm: "32px", md: "48px", lg: "72px" },
        py: { xs: "72px", md: "100px", lg: "120px" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs */}
      <Box sx={{
        position: "absolute", bottom: "-80px", right: "-80px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)",
        pointerEvents: "none", animation: "orb-drift 18s ease-in-out infinite",
      }} />
      <Box sx={{
        position: "absolute", top: "-60px", left: "-60px",
        width: "360px", height: "360px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 65%)",
        pointerEvents: "none", animation: "orb-drift 14s ease-in-out infinite reverse",
      }} />

      {/* ── Header ── */}
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "flex-end" },
        gap: { xs: "16px", md: "32px" },
        mb: { xs: "48px", md: "64px" },
        position: "relative", zIndex: 1,
      }}>
        <Box>
          <Typography sx={{
            fontFamily: FB, fontSize: "13px", fontWeight: 700,
            color: ACCENT, letterSpacing: "2px",
            textTransform: "uppercase", mb: "16px",
          }}>
            Featured Work
          </Typography>
          <Typography sx={{
            fontFamily: FD, fontWeight: 800,
            fontSize: { xs: "36px", sm: "44px", md: "52px", lg: "58px" },
            color: TEXT, letterSpacing: "-2px", lineHeight: 1.06,
          }}>
            Projects we're<br />
            <Box component="span" sx={{ color: ORANGE }}>proud of.</Box>
          </Typography>
        </Box>
        <Typography sx={{
          fontFamily: FB, fontSize: { xs: "16px", md: "17px" },
          color: "#555", lineHeight: 1.75,
          maxWidth: { xs: "100%", md: "280px" },
        }}>
          Digital experiences engineered for forward-thinking brands.
        </Typography>
      </Box>

      {/* ── Cards ── */}
      <Box sx={{
        position: "relative", zIndex: 1,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
        gap: { xs: "16px", md: "18px" },
      }}>
        {PROJECTS.map((p, i) => {
          const Icon = p.icon;
          return (
            <Box
              key={i}
              sx={{
                backgroundColor: "#161616",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "22px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                cursor: "default",
                "&:hover": {
                  transform: "translateY(-6px)",
                  border: `1px solid ${p.color}33`,
                  boxShadow: `0 24px 56px rgba(0,0,0,0.5)`,
                  "& .pw-icon-wrap": { backgroundColor: p.color, transform: "scale(1.08)", color: "#fff" },
                  "& .pw-title": { color: p.color },
                },
              }}
            >
              {/* ── Card top bar ── */}
              <Box sx={{
                px: { xs: "24px", md: "28px" },
                pt: { xs: "24px", md: "28px" },
                pb: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}>
                {/* Icon */}
                <Box
                  className="pw-icon-wrap"
                  sx={{
                    width: "54px", height: "54px",
                    borderRadius: "15px",
                    backgroundColor: p.bg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                    color: p.color,
                  }}
                >
                  <Icon size={24} className="pw-icon" style={{ transition: "color 0.3s ease" }} />
                </Box>

                {/* Status badge */}
                {p.live ? (
                  <Box sx={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    border: "1px solid rgba(74,222,128,0.2)",
                    borderRadius: "100px", px: "10px", py: "5px",
                    backgroundColor: "rgba(74,222,128,0.06)",
                  }}>
                    <Box sx={{
                      width: "6px", height: "6px", borderRadius: "50%",
                      backgroundColor: "#4ADE80",
                      animation: "pulse-dot 2s ease-in-out infinite",
                    }} />
                    <Typography sx={{ fontFamily: FB, fontSize: "11px", fontWeight: 700, color: "#4ADE80", letterSpacing: "0.3px" }}>
                      LIVE
                    </Typography>
                  </Box>
                ) : (
                  <Box sx={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "100px", px: "10px", py: "5px",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}>
                    <Typography sx={{ fontFamily: FB, fontSize: "11px", fontWeight: 700, color: "#444", letterSpacing: "0.3px" }}>
                      IN PROGRESS
                    </Typography>
                  </Box>
                )}
              </Box>

              {/* ── Card body ── */}
              <Box sx={{
                px: { xs: "24px", md: "28px" },
                py: "24px",
                display: "flex", flexDirection: "column", flexGrow: 1,
              }}>
                <Typography sx={{
                  fontFamily: FB, fontSize: "12px", fontWeight: 700,
                  color: p.color, letterSpacing: "1.5px",
                  textTransform: "uppercase", mb: "10px", opacity: 0.85,
                }}>
                  {p.category}
                </Typography>

                <Typography
                  className="pw-title"
                  sx={{
                    fontFamily: FD, fontWeight: 800,
                    fontSize: { xs: "21px", md: "23px" },
                    color: TEXT, letterSpacing: "-0.5px",
                    mb: "12px", lineHeight: 1.2,
                    transition: "color 0.3s ease",
                  }}
                >
                  {p.title}
                </Typography>

                <Typography sx={{
                  fontFamily: FB, fontSize: { xs: "14px", md: "15px" },
                  color: "#666", lineHeight: 1.75,
                  mb: "24px", flexGrow: 1,
                }}>
                  {p.desc}
                </Typography>

                {/* Tech chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px", mb: "24px" }}>
                  {p.tech.map((t) => (
                    <Box key={t} sx={{
                      px: "10px", py: "5px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "6px",
                      fontFamily: FB, fontSize: "12px", fontWeight: 600, color: "#555",
                    }}>
                      {t}
                    </Box>
                  ))}
                </Box>

                {/* Footer link */}
                <Box sx={{
                  pt: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}>
                  {p.live ? (
                    <Box
                      component="a"
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        fontFamily: FB, fontSize: "14px", fontWeight: 700,
                        color: p.color, textDecoration: "none",
                        transition: "gap 0.2s",
                        "&:hover": { gap: "12px" },
                      }}
                    >
                      View Live Site <FaArrowUpRightFromSquare size={12} />
                    </Box>
                  ) : (
                    <Typography sx={{
                      fontFamily: FB, fontSize: "14px",
                      fontWeight: 600, color: "#333",
                    }}>
                      Coming soon
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
