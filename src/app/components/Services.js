"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { FaCode, FaPaintBrush, FaChartLine, FaCogs, FaRobot, FaVideo } from "react-icons/fa";

const ACCENT = "#3B82F6";
const ORANGE = "#F97316";
const DARK = "#131313";
const CARD_BG = "#181818";
const TEXT = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const SERVICES = [
  {
    num: "01",
    icon: <FaCode size={22} />,
    title: "Web Development",
    desc: "Custom, high-performance websites built to showcase your business professionally and convert visitors into customers.",
  },
  {
    num: "02",
    icon: <FaPaintBrush size={22} />,
    title: "Landing Page Optimization",
    desc: "Landing pages designed to capture leads and maximize conversions with data-driven layouts and clear calls-to-action.",
  },
  {
    num: "03",
    icon: <FaChartLine size={22} />,
    title: "Marketing Automation",
    desc: "Automate your follow-ups, emails, and notifications so no lead is lost and your sales process runs on autopilot.",
  },
  {
    num: "04",
    icon: <FaRobot size={22} />,
    title: "AI Chatbot Development",
    desc: "Intelligent chatbots that engage visitors instantly, answer questions, qualify leads, and book appointments automatically.",
  },
  {
    num: "05",
    icon: <FaVideo size={22} />,
    title: "Short Ad Videos",
    desc: "High-impact, short-form videos perfect for social media ads that grab attention and drive traffic fast.",
  },
  {
    num: "06",
    icon: <FaCogs size={22} />,
    title: "AI Automation",
    desc: "Streamline repetitive tasks and business processes using AI to save time, reduce errors, and increase efficiency.",
  },
];

export default function Services() {
  return (
    <Box
      id="services"
      sx={{
        backgroundColor: DARK,
        px: { xs: "20px", sm: "32px", md: "48px", lg: "72px" },
        py: { xs: "72px", md: "100px", lg: "120px" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <Box sx={{
        position: "absolute",
        top: "-80px", left: "-80px",
        width: "500px", height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
        animation: "orb-drift 16s ease-in-out infinite",
      }} />
      <Box sx={{
        position: "absolute",
        bottom: "-60px", right: "-60px",
        width: "360px", height: "360px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 65%)",
        pointerEvents: "none",
        animation: "orb-drift 20s ease-in-out infinite reverse",
      }} />

      {/* ── Header ── */}
      <Box sx={{ position: "relative", zIndex: 1, mb: { xs: "48px", md: "72px" } }}>
        <Typography sx={{
          fontFamily: FB, fontSize: "13px", fontWeight: 700,
          color: ACCENT, letterSpacing: "2px", textTransform: "uppercase",
          mb: "16px",
        }}>
          What We Do
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
            color: TEXT, letterSpacing: "-2px", lineHeight: 1.06,
          }}>
            Services built for<br />
            <Box component="span" sx={{ color: ORANGE }}>modern businesses.</Box>
          </Typography>

          <Typography sx={{
            fontFamily: FB, fontSize: { xs: "16px", md: "17px" },
            color: "#555", lineHeight: 1.75,
            maxWidth: { xs: "100%", md: "280px" },
          }}>
            End-to-end digital solutions from strategy through execution —
            everything your brand needs online.
          </Typography>
        </Box>
      </Box>

      {/* ── Cards Grid ── */}
      <Box sx={{
        position: "relative", zIndex: 1,
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: { xs: "16px", md: "18px" },
      }}>
        {SERVICES.map((s, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: CARD_BG,
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "18px",
              p: { xs: "28px", md: "32px" },
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              cursor: "default",
              "&:hover": {
                backgroundColor: "#1E1E1E",
                border: "1px solid rgba(59,130,246,0.2)",
                transform: "translateY(-4px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                "& .svc-icon": {
                  backgroundColor: ACCENT,
                  color: "#fff",
                  transform: "scale(1.1) rotate(-6deg)",
                },
                "& .svc-num": { color: ACCENT },
              },
            }}
          >
            {/* Top row: icon + number */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <Box
                className="svc-icon"
                sx={{
                  width: "52px", height: "52px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(59,130,246,0.1)",
                  color: ACCENT,
                  display: "flex", justifyContent: "center", alignItems: "center",
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                }}
              >
                {s.icon}
              </Box>

              <Typography
                className="svc-num"
                sx={{
                  fontFamily: FD, fontWeight: 800,
                  fontSize: "13px", letterSpacing: "1px",
                  color: "rgba(255,255,255,0.15)",
                  transition: "color 0.3s",
                }}
              >
                {s.num}
              </Typography>
            </Box>

            {/* Text */}
            <Box>
              <Typography sx={{
                fontFamily: FD, fontWeight: 700,
                fontSize: { xs: "18px", md: "20px" },
                color: TEXT, letterSpacing: "-0.3px",
                mb: "10px", lineHeight: 1.3,
              }}>
                {s.title}
              </Typography>
              <Typography sx={{
                fontFamily: FB, fontSize: { xs: "15px", md: "16px" },
                color: "#666", lineHeight: 1.7,
              }}>
                {s.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
