"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import {
  FaRocket, FaShieldAlt, FaHandshake,
  FaLightbulb, FaClock, FaTrophy,
} from "react-icons/fa";

const ACCENT = "#3B82F6";
const ORANGE = "#F97316";
const DARK = "#131313";
const BG = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const ITEMS = [
  {
    icon: <FaRocket size={20} />,
    title: "Fast Delivery",
    description: "Agile process, zero bloat. Your project ships on time — every time — without sacrificing quality.",
    stat: "2×", statLabel: "Faster than avg.",
  },
  {
    icon: <FaShieldAlt size={20} />,
    title: "Reliable & Secure",
    description: "Security is baked in from day one. Your business data and your customers' trust are always protected.",
    stat: "99.9%", statLabel: "Uptime guaranteed",
  },
  {
    icon: <FaHandshake size={20} />,
    title: "Client-First",
    description: "We listen before we build. Every solution is shaped around your unique goals — not a template.",
    stat: "100%", statLabel: "Satisfaction rate",
  },
  {
    icon: <FaLightbulb size={20} />,
    title: "Innovative Thinking",
    description: "We stay ahead of digital trends so you don't have to. Fresh ideas, cutting-edge execution, every step.",
    stat: "50+", statLabel: "Technologies mastered",
  },
  {
    icon: <FaClock size={20} />,
    title: "24/7 Support",
    description: "Our dedicated support team is always in your corner — available around the clock to resolve any issue.",
    stat: "<1hr", statLabel: "Avg. response time",
  },
  {
    icon: <FaTrophy size={20} />,
    title: "Proven Track Record",
    description: "Dozens of successful launches across multiple industries. We have the results to back it up.",
    stat: "80+", statLabel: "Projects delivered",
  },
];

export default function WhyUs() {
  return (
    <Box
      id="why-us"
      sx={{
        px: { xs: "20px", sm: "32px", md: "48px", lg: "72px" },
        py: { xs: "72px", md: "100px", lg: "120px" },
        backgroundColor: BG,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs */}
      <Box sx={{
        position: "absolute", top: "20%", right: "-80px",
        width: "480px", height: "480px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)",
        pointerEvents: "none", animation: "orb-drift 14s ease-in-out infinite",
      }} />
      <Box sx={{
        position: "absolute", bottom: "10%", left: "-80px",
        width: "360px", height: "360px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 65%)",
        pointerEvents: "none", animation: "orb-drift 18s ease-in-out infinite reverse",
      }} />

      {/* ── Header ── */}
      <Box sx={{ mb: { xs: "48px", md: "72px" }, position: "relative", zIndex: 1 }}>
        <Typography sx={{
          fontFamily: FB, fontSize: "13px", fontWeight: 700,
          letterSpacing: "2px", color: ACCENT,
          textTransform: "uppercase", mb: "16px",
        }}>
          Why Iron Goose
        </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          gap: { xs: "16px", md: "32px" },
        }}>
          <Typography sx={{
            fontFamily: FD, fontWeight: 800,
            fontSize: { xs: "36px", sm: "44px", md: "52px", lg: "58px" },
            color: DARK, lineHeight: 1.06, letterSpacing: "-2px",
          }}>
            We don't just build —{" "}
            <Box component="span" sx={{ color: ORANGE }}>we partner.</Box>
          </Typography>
          <Typography sx={{
            fontFamily: FB, fontSize: { xs: "16px", md: "17px" },
            color: "#555", lineHeight: 1.75,
            maxWidth: { xs: "100%", md: "300px" },
            textAlign: { xs: "left", md: "right" },
          }}>
            Here's what sets us apart from every other agency promising the world.
          </Typography>
        </Box>
      </Box>

      {/* ── Cards ── */}
      <Box sx={{
        position: "relative", zIndex: 1,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
        gap: { xs: "16px", md: "18px" },
      }}>
        {ITEMS.map((item, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "20px",
              p: { xs: "28px", md: "32px" },
              display: "flex", flexDirection: "column",
              gap: "0",
              position: "relative", overflow: "hidden",
              transition: "all 0.3s ease",
              cursor: "default",
              "&:hover": {
                backgroundColor: "#fff",
                border: "1px solid rgba(59,130,246,0.25)",
                transform: "translateY(-4px)",
                boxShadow: "0 12px 40px rgba(59,130,246,0.1)",
                "& .wi-icon": { backgroundColor: ACCENT, color: "#fff", transform: "scale(1.1)" },
                "& .wi-stat": { color: ACCENT },
              },
            }}
          >
            {/* Top: icon + stat */}
            <Box sx={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", mb: "24px",
            }}>
              <Box
                className="wi-icon"
                sx={{
                  width: "50px", height: "50px", borderRadius: "14px",
                  backgroundColor: "rgba(59,130,246,0.1)",
                  color: ACCENT,
                  display: "flex", justifyContent: "center", alignItems: "center",
                  flexShrink: 0, transition: "all 0.3s ease",
                }}
              >
                {item.icon}
              </Box>

              <Box sx={{ textAlign: "right" }}>
                <Typography
                  className="wi-stat"
                  sx={{
                    fontFamily: FD, fontWeight: 800,
                    fontSize: { xs: "26px", md: "30px" },
                    color: i % 2 === 0 ? DARK : ORANGE, lineHeight: 1,
                    letterSpacing: "-1px",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.stat}
                </Typography>
                <Typography sx={{
                  fontFamily: FB, fontSize: "12px",
                  color: "#999", fontWeight: 600, mt: "3px",
                  letterSpacing: "0.2px",
                }}>
                  {item.statLabel}
                </Typography>
              </Box>
            </Box>

            {/* Divider */}
            <Box sx={{ height: "1px", backgroundColor: "rgba(0,0,0,0.07)", mb: "20px" }} />

            {/* Title + desc */}
            <Typography sx={{
              fontFamily: FD, fontWeight: 700,
              fontSize: { xs: "17px", md: "19px" },
              color: DARK, letterSpacing: "-0.3px", mb: "10px",
            }}>
              {item.title}
            </Typography>
            <Typography sx={{
              fontFamily: FB, fontSize: { xs: "14px", md: "15px" },
              color: "#555", lineHeight: 1.7,
            }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
