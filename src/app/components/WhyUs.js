"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import {
  FaRocket,
  FaShieldAlt,
  FaHandshake,
  FaLightbulb,
  FaClock,
  FaTrophy,
} from "react-icons/fa";

const ACCENT = "#3B82F6";
const DARK = "#131313";
const CARD_BG = "#181818";
const TEXT = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const whyUsData = [
  {
    icon: <FaRocket size={18} />,
    title: "Fast Delivery",
    description:
      "Agile process, zero bloat. Your project ships on time — every time — without sacrificing quality.",
    stat: "2×",
    statLabel: "Faster than avg.",
  },
  {
    icon: <FaShieldAlt size={18} />,
    title: "Reliable & Secure",
    description:
      "Security is baked in from day one. Your business data and your customers' trust are always protected.",
    stat: "99.9%",
    statLabel: "Uptime guaranteed",
  },
  {
    icon: <FaHandshake size={18} />,
    title: "Client-First",
    description:
      "We listen before we build. Every solution is shaped around your unique goals — not a template.",
    stat: "100%",
    statLabel: "Satisfaction rate",
  },
  {
    icon: <FaLightbulb size={18} />,
    title: "Innovative Thinking",
    description:
      "We stay ahead of digital trends so you don't have to. Fresh ideas, cutting-edge execution, every step.",
    stat: "50+",
    statLabel: "Technologies mastered",
  },
  {
    icon: <FaClock size={18} />,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always in your corner — available around the clock to resolve any issue.",
    stat: "<1hr",
    statLabel: "Avg. response time",
  },
  {
    icon: <FaTrophy size={18} />,
    title: "Proven Track Record",
    description:
      "Dozens of successful launches across multiple industries. We have the results to back it up.",
    stat: "80+",
    statLabel: "Projects delivered",
  },
];

function WhyUs() {
  return (
    <Box
      id="why-us"
      sx={{
        px: { xs: "24px", md: "48px", lg: "72px" },
        py: { xs: "80px", md: "120px" },
        backgroundColor: "#0E0E0E",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <Box sx={{
        position: "absolute",
        top: "30%", right: "-100px",
        width: "500px", height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
        animation: "orb-drift 12s ease-in-out infinite",
      }} />

      {/* Header */}
      <Box sx={{ mb: "72px", position: "relative", zIndex: 1 }}>
        <Typography
          sx={{
            fontFamily: FB,
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "2px",
            color: ACCENT,
            textTransform: "uppercase",
            mb: "14px",
          }}
        >
          Why Blue Goose
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: FD,
              fontWeight: 800,
              fontSize: { xs: "38px", md: "56px" },
              color: TEXT,
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              maxWidth: "480px",
            }}
          >
            We don't just build —{" "}
            <Box component="span" sx={{ color: ACCENT }}>we partner.</Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: FB,
              fontSize: "17px",
              color: "#555",
              lineHeight: 1.75,
              maxWidth: "320px",
              textAlign: { xs: "left", md: "right" },
            }}
          >
            Here's what sets us apart from every other agency promising the world.
          </Typography>
        </Box>
      </Box>

      {/* Cards Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(3, 1fr)",
          },
          gap: "1px",
          backgroundColor: "rgba(255,255,255,0.06)",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {whyUsData.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: { xs: "32px", md: "40px" },
              backgroundColor: CARD_BG,
              transition: "all 0.25s ease",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                backgroundColor: "#202020",
                "& .why-icon": {
                  backgroundColor: ACCENT,
                  color: "#fff",
                  transform: "scale(1.08)",
                },
                "& .why-stat": {
                  color: ACCENT,
                },
                "& .why-ghost": {
                  opacity: 1,
                },
              },
            }}
          >
            {/* Ghost number watermark */}
            <Typography
              className="why-ghost"
              sx={{
                position: "absolute",
                bottom: "-12px",
                right: "20px",
                fontFamily: FD,
                fontWeight: 800,
                fontSize: "90px",
                color: "rgba(255,255,255,0.025)",
                lineHeight: 1,
                letterSpacing: "-4px",
                pointerEvents: "none",
                userSelect: "none",
                transition: "opacity 0.3s ease",
                opacity: 0,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </Typography>

            {/* Icon + Stat Row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: "24px",
              }}
            >
              <Box
                className="why-icon"
                sx={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(59,130,246,0.1)",
                  color: ACCENT,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "all 0.25s ease",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography
                  className="why-stat"
                  sx={{
                    fontFamily: FD,
                    fontWeight: 800,
                    fontSize: "28px",
                    color: TEXT,
                    lineHeight: 1,
                    letterSpacing: "-0.5px",
                    transition: "color 0.25s ease",
                  }}
                >
                  {item.stat}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: FB,
                    fontSize: "13px",
                    color: "#444",
                    fontWeight: 600,
                    mt: "2px",
                  }}
                >
                  {item.statLabel}
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                fontFamily: FD,
                fontWeight: 700,
                fontSize: "19px",
                color: TEXT,
                mb: "10px",
                letterSpacing: "-0.2px",
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: FB,
                color: "#666",
                lineHeight: 1.65,
                fontSize: "16px",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default WhyUs;
