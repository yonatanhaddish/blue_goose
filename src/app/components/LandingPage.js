"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const ACCENT = "#3B82F6";
const ORANGE = "#F97316";
const BG = "#F5F3EF";
const DARK = "#131313";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const TICKER = [
  "Web Development", "Landing Pages", "AI Chatbots",
  "Marketing Automation", "Short Ad Videos", "AI Automation",
];

const STATS = [
  { value: "80+", label: "Projects Delivered", color: ACCENT },
  { value: "100%", label: "Satisfaction", color: ACCENT },
  { value: "<1hr", label: "Response Time", color: ORANGE },
];

export default function Landingpage() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box sx={{ backgroundColor: BG, overflow: "hidden", position: "relative" }}>

      {/* Dot grid */}
      <Box sx={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.065) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Orbs */}
      <Box sx={{
        position: "absolute", top: "-120px", left: "-120px",
        width: "700px", height: "700px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 60%)",
        pointerEvents: "none", zIndex: 0,
        animation: "orb-drift 16s ease-in-out infinite",
      }} />
      <Box sx={{
        position: "absolute", bottom: "-40px", right: "-80px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 60%)",
        pointerEvents: "none", zIndex: 0,
        animation: "orb-drift 12s ease-in-out infinite reverse",
      }} />

      {/* ── Hero ── */}
      <Box sx={{
        position: "relative", zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        minHeight: "calc(100vh - 68px)",
        justifyContent: "center",
        px: { xs: "20px", sm: "32px", md: "48px", lg: "72px" },
        py: { xs: "80px", md: "100px" },
        gap: "0",
      }}>

        {/* Eyebrow badge */}
        <Box sx={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: "100px",
          px: "16px", py: "8px",
          mb: "36px",
          backgroundColor: "rgba(59,130,246,0.06)",
          backdropFilter: "blur(8px)",
        }}>
          <Box sx={{
            width: "7px", height: "7px", borderRadius: "50%",
            backgroundColor: ACCENT,
            animation: "pulse-dot 2s ease-in-out infinite",
          }} />
          <Typography sx={{
            fontFamily: FB, fontSize: "14px", fontWeight: 600,
            color: ACCENT, letterSpacing: "0.2px",
          }}>
            Toronto-Based Digital Agency
          </Typography>
        </Box>

        {/* Headline */}
        <Typography sx={{
          fontFamily: FD, fontWeight: 800,
          fontSize: { xs: "48px", sm: "64px", md: "80px", lg: "96px", xl: "108px" },
          lineHeight: 0.98,
          letterSpacing: { xs: "-2px", md: "-4px" },
          color: DARK,
          mb: "32px",
          maxWidth: "1000px",
        }}>
          Websites That Work.{" "}
          <Box component="span" sx={{
            color: ORANGE,
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: { xs: "-2px", md: "-6px" },
              left: 0, width: "100%", height: { xs: "3px", md: "5px" },
              background: `linear-gradient(90deg, ${ORANGE}, rgba(249,115,22,0.2))`,
              borderRadius: "4px",
            },
          }}>
            Brands That Fly.
          </Box>
        </Typography>

        {/* Subheading */}
        <Typography sx={{
          fontFamily: FB,
          fontSize: { xs: "17px", md: "20px" },
          color: "#666", lineHeight: 1.75,
          maxWidth: { xs: "100%", md: "560px" },
          mb: "48px",
        }}>
          We design, build, and launch high-performance digital products for
          businesses that want to grow faster — and look great doing it.
        </Typography>

        {/* CTAs */}
        <Box sx={{
          display: "flex", gap: "14px", flexWrap: "wrap",
          justifyContent: "center", mb: "64px",
        }}>
          <Box
            onClick={() => go("contact")}
            sx={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              px: { xs: "28px", md: "36px" }, py: { xs: "15px", md: "17px" },
              backgroundColor: DARK, color: BG,
              borderRadius: "14px",
              fontFamily: FB, fontWeight: 700,
              fontSize: { xs: "15px", md: "17px" },
              cursor: "pointer", transition: "all 0.25s",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
              "&:hover": {
                backgroundColor: ACCENT,
                transform: "translateY(-3px)",
                boxShadow: "0 12px 36px rgba(59,130,246,0.35)",
              },
            }}
          >
            Start a Project <FaArrowRight size={13} />
          </Box>

          <Box
            onClick={() => go("our-work")}
            sx={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              px: { xs: "28px", md: "36px" }, py: { xs: "15px", md: "17px" },
              border: "1.5px solid rgba(0,0,0,0.12)", borderRadius: "14px",
              fontFamily: FB, fontWeight: 600,
              fontSize: { xs: "15px", md: "17px" },
              color: DARK, cursor: "pointer", transition: "all 0.25s",
              backgroundColor: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                borderColor: ACCENT,
                color: ACCENT,
                backgroundColor: "rgba(59,130,246,0.04)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <Box sx={{
              width: "28px", height: "28px", borderRadius: "50%",
              backgroundColor: DARK, display: "flex",
              alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <FaPlay size={8} color="#fff" style={{ marginLeft: "2px" }} />
            </Box>
            View Our Work
          </Box>
        </Box>

        {/* Stats row */}
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "16px", sm: "0" },
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: "20px",
          px: { xs: "28px", md: "48px" },
          py: { xs: "20px", md: "24px" },
          width: { xs: "100%", sm: "auto" },
        }}>
          {STATS.map((s, i) => (
            <React.Fragment key={s.label}>
              <Box sx={{ textAlign: "center", px: { xs: "0", sm: "32px" } }}>
                <Typography sx={{
                  fontFamily: FD, fontWeight: 800,
                  fontSize: { xs: "28px", md: "32px" },
                  color: s.color, letterSpacing: "-1px", lineHeight: 1,
                }}>
                  {s.value}
                </Typography>
                <Typography sx={{
                  fontFamily: FB, fontSize: "14px",
                  color: "#888", mt: "4px", fontWeight: 500,
                }}>
                  {s.label}
                </Typography>
              </Box>
              {i < STATS.length - 1 && (
                <Box sx={{
                  width: { xs: "40px", sm: "1px" },
                  height: { xs: "1px", sm: "40px" },
                  backgroundColor: "rgba(0,0,0,0.08)",
                  flexShrink: 0,
                }} />
              )}
            </React.Fragment>
          ))}
        </Box>

      </Box>

      {/* ── Marquee ticker ── */}
      <Box sx={{
        backgroundColor: DARK, py: "18px",
        overflow: "hidden",
        position: "relative", zIndex: 1,
      }}>
        <Box className="marquee-track">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((item, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Typography sx={{
                fontFamily: FB, fontSize: "12px", fontWeight: 700,
                color: "#555", px: "28px", letterSpacing: "2.5px",
                textTransform: "uppercase", whiteSpace: "nowrap",
                transition: "color 0.2s",
                "&:hover": { color: ACCENT },
              }}>
                {item}
              </Typography>
              <Box sx={{
                width: "5px", height: "5px", borderRadius: "50%",
                backgroundColor: i % 2 === 0 ? ACCENT : ORANGE, flexShrink: 0,
              }} />
            </Box>
          ))}
        </Box>
      </Box>

    </Box>
  );
}
