"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { GiGoose } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

const ACCENT = "#E8562F";
const BG = "#F5F3EF";
const DARK = "#131313";
const CARD_BG = "#1A1A1A";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const TICKER = [
  "Web Development", "UI/UX Design", "Mobile Apps",
  "SEO Optimization", "Technical Support", "Brand Strategy",
];

export default function Landingpage() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box sx={{ backgroundColor: BG, overflow: "hidden" }}>
      {/* ── Hero ── */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: { lg: "calc(100vh - 68px)" },
          px: { xs: "24px", md: "48px", lg: "72px" },
          py: { xs: "72px", md: "80px", lg: "0" },
          gap: { xs: "56px", lg: "48px" },
        }}
      >
        {/* Left — Text */}
        <Box sx={{ flex: 1, maxWidth: { lg: "56%" } }}>
          {/* Eyebrow badge */}
          <Box
            sx={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: "1px solid rgba(0,0,0,0.12)", borderRadius: "100px",
              px: "14px", py: "6px", mb: "32px",
            }}
          >
            <Box sx={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: ACCENT }} />
            <Typography sx={{ fontFamily: FB, fontSize: "12px", fontWeight: 600, color: "#666", letterSpacing: "0.2px" }}>
              Toronto-Based Digital Agency
            </Typography>
          </Box>

          {/* Headline */}
          <Typography
            sx={{
              fontFamily: FD, fontWeight: 800,
              fontSize: { xs: "44px", sm: "56px", md: "64px", lg: "58px", xl: "74px" },
              lineHeight: 1.04, letterSpacing: "-2.5px", color: DARK,
              mb: "28px",
            }}
          >
            Websites<br />
            That Work.<br />
            Brands That{" "}
            <Box component="span" sx={{ color: ACCENT }}>Fly.</Box>
          </Typography>

          {/* Sub */}
          <Typography
            sx={{
              fontFamily: FB, fontSize: { xs: "16px", md: "17px" },
              color: "#666", lineHeight: 1.8,
              maxWidth: "420px", mb: "44px",
            }}
          >
            We design, build, and launch high-performance digital products
            for businesses that want to grow faster and look better doing it.
          </Typography>

          {/* CTAs */}
          <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Box
              onClick={() => go("contact")}
              sx={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                px: "28px", py: "14px",
                backgroundColor: DARK, color: BG,
                borderRadius: "12px",
                fontFamily: FB, fontWeight: 700, fontSize: "14px",
                cursor: "pointer", transition: "all 0.25s",
                "&:hover": {
                  backgroundColor: ACCENT,
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 28px rgba(232,86,47,0.35)",
                },
              }}
            >
              Start a Project <FaArrowRight size={12} />
            </Box>
            <Box
              onClick={() => go("our-work")}
              sx={{
                display: "inline-flex", alignItems: "center",
                px: "28px", py: "14px",
                border: "1.5px solid rgba(0,0,0,0.13)", borderRadius: "12px",
                fontFamily: FB, fontWeight: 600, fontSize: "14px", color: DARK,
                cursor: "pointer", transition: "all 0.25s",
                "&:hover": { borderColor: DARK, backgroundColor: "rgba(0,0,0,0.04)" },
              }}
            >
              View Our Work
            </Box>
          </Box>
        </Box>

        {/* Right — Dark Visual Card */}
        <Box sx={{ flex: "0 0 auto", width: { xs: "100%", sm: "420px", lg: "400px", xl: "460px" } }}>
          <Box
            sx={{
              backgroundColor: DARK, borderRadius: "24px",
              p: { xs: "36px", md: "44px" },
              display: "flex", flexDirection: "column", alignItems: "center", gap: "24px",
              position: "relative", overflow: "hidden",
            }}
          >
            {/* Background glow */}
            <Box sx={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "280px", height: "280px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(232,86,47,0.18) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />

            {/* Goose icon */}
            <GiGoose size={88} color={ACCENT} style={{ position: "relative", zIndex: 1 }} />

            <Box sx={{ zIndex: 1, textAlign: "center" }}>
              <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: "20px", color: "#F5F3EF", letterSpacing: "-0.5px" }}>
                Blue Goose Digital
              </Typography>
              <Typography sx={{ fontFamily: FB, fontSize: "13px", color: "#666", mt: "4px" }}>
                Toronto, ON · Est. 2024
              </Typography>
            </Box>

            {/* Stats */}
            <Box sx={{ display: "flex", gap: "10px", width: "100%", zIndex: 1 }}>
              {[["80+", "Projects"], ["100%", "Satisfaction"], ["<1hr", "Response"]].map(([val, lbl]) => (
                <Box
                  key={lbl}
                  sx={{
                    flex: 1, textAlign: "center",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px", py: "14px", px: "8px",
                  }}
                >
                  <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: "18px", color: ACCENT, lineHeight: 1, letterSpacing: "-0.5px" }}>
                    {val}
                  </Typography>
                  <Typography sx={{ fontFamily: FB, fontSize: "10px", color: "#666", mt: "4px", fontWeight: 500 }}>
                    {lbl}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Available badge */}
            <Box
              sx={{
                zIndex: 1,
                display: "inline-flex", alignItems: "center", gap: "7px",
                border: "1px solid rgba(255,255,255,0.09)", borderRadius: "100px",
                px: "14px", py: "7px",
              }}
            >
              <Box sx={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#4ADE80" }} />
              <Typography sx={{ fontFamily: FB, fontSize: "12px", color: "#777", fontWeight: 500 }}>
                Available for new projects
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── Marquee ticker ── */}
      <Box
        sx={{
          backgroundColor: DARK, py: "16px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          overflow: "hidden",
        }}
      >
        <Box className="marquee-track">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((item, i) => (
            <Box
              key={i}
              sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}
            >
              <Typography
                sx={{
                  fontFamily: FB, fontSize: "12px", fontWeight: 600,
                  color: "#555", px: "28px", letterSpacing: "1.5px",
                  textTransform: "uppercase", whiteSpace: "nowrap",
                }}
              >
                {item}
              </Typography>
              <Box sx={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: ACCENT, flexShrink: 0 }} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
