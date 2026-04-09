"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

const ACCENT = "#3B82F6";
const ORANGE = "#F97316";
const DARK = "#131313";
const BG = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const PARTNERS = [
  { name: "Nexlayer", wordmark: "Nexlayer" },
  { name: "Stackbridge", wordmark: "Stackbridge" },
  { name: "Orion Digital", wordmark: "Orion Digital" },
  { name: "PineCode", wordmark: "PineCode" },
  { name: "Crestline IT", wordmark: "Crestline IT" },
  { name: "Harbour Labs", wordmark: "Harbour Labs" },
  { name: "Driftmark Co.", wordmark: "Driftmark Co." },
  { name: "Vault Studio", wordmark: "Vault Studio" },
];

const STATS = [
  { target: 50,  suffix: "+",  label: "Technologies & tools",  color: ACCENT },
  { target: 99.9, suffix: "%", label: "Average uptime SLA",    color: ORANGE, decimals: 1 },
  { target: 3,   suffix: "×",  label: "Faster time-to-market", color: ACCENT },
];

function CountUp({ target, suffix, decimals = 0, color, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return (
    <Typography
      ref={ref}
      sx={{
        fontFamily: FD, fontWeight: 800,
        fontSize: { xs: "32px", md: "38px" },
        color, letterSpacing: "-1.5px", lineHeight: 1,
      }}
    >
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </Typography>
  );
}

export default function OurPartners() {
  return (
    <Box
      id="partners"
      sx={{
        backgroundColor: BG,
        px: { xs: "20px", sm: "32px", md: "48px", lg: "72px" },
        py: { xs: "72px", md: "96px", lg: "112px" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "-60px",
          left: "-60px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
          animation: "orb-drift 18s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-40px",
          right: "-40px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
          animation: "orb-drift 22s ease-in-out infinite reverse",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* ── Header ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            gap: { xs: "16px", md: "32px" },
            mb: { xs: "48px", md: "64px" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: FB,
                fontSize: "13px",
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: "2px",
                textTransform: "uppercase",
                mb: "16px",
              }}
            >
              Our Partners
            </Typography>
            <Typography
              sx={{
                fontFamily: FD,
                fontWeight: 800,
                fontSize: { xs: "36px", sm: "44px", md: "52px", lg: "58px" },
                color: DARK,
                letterSpacing: "-2px",
                lineHeight: 1.06,
              }}
            >
              Trusted by agencies
              <br />
              <Box component="span" sx={{ color: ORANGE }}>
                & businesses.
              </Box>
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: FB,
              fontSize: { xs: "16px", md: "17px" },
              color: "#555",
              lineHeight: 1.75,
              maxWidth: { xs: "100%", md: "280px" },
            }}
          >
            We collaborate with IT agencies and growing businesses to deliver
            results that scale.
          </Typography>
        </Box>

        {/* ── Partner cards ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
            gap: { xs: "12px", md: "14px" },
          }}
        >
          {PARTNERS.map((p) => (
            <Box
              key={p.name}
              sx={{
                backgroundColor: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: "18px",
                py: { xs: "28px", md: "36px" },
                px: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.25s ease",
                "&:hover": {
                  border: "1px solid rgba(59,130,246,0.25)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 32px rgba(59,130,246,0.1)",
                  "& .partner-name": { color: ACCENT },
                },
              }}
            >
              <Typography
                className="partner-name"
                sx={{
                  fontFamily: FD,
                  fontWeight: 800,
                  fontSize: { xs: "16px", md: "18px" },
                  color: ACCENT,
                  letterSpacing: "-0.3px",
                  transition: "color 0.25s ease",
                  userSelect: "none",
                }}
              >
                {p.wordmark}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* ── Trust strip ── */}
        <Box
          sx={{
            mt: { xs: "40px", md: "56px" },
            pt: { xs: "32px", md: "40px" },
            borderTop: "1px solid rgba(0,0,0,0.07)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "20px", sm: "48px" },
            textAlign: "center",
          }}
        >
          {STATS.map(({ target, suffix, decimals, label, color }) => (
            <Box key={label} sx={{ textAlign: "center" }}>
              <CountUp target={target} suffix={suffix} decimals={decimals} color={color} />
              <Typography
                sx={{
                  fontFamily: FB, fontSize: "13px",
                  color: "#999", fontWeight: 600,
                  mt: "6px", letterSpacing: "0.2px",
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
