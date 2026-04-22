"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ACCENT = "#3B82F6";
const ORANGE = "#F97316";
const DARK = "#131313";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const TICKER = [
  "Web Development",
  "Landing Pages",
  "AI Chatbots",
  "Marketing Automation",
  "Short Ad Videos",
  "AI Automation",
];

const STATS = [
  { target: 80,   suffix: "+",   label: "Projects Delivered" },
  { target: 100,  suffix: "%",   label: "Client Satisfaction" },
  { target: null, display: "<1hr", label: "Response Time" },
];

function CountUp({ target, suffix, size = "32px", duration = 1600 }) {
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
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.floor(eased * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <Typography ref={ref} sx={{
      fontFamily: FD, fontWeight: 800,
      fontSize: size, color: ACCENT,
      letterSpacing: "-1px", lineHeight: 1,
    }}>
      {count}{suffix}
    </Typography>
  );
}

export default function Landingpage() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box sx={{ backgroundColor: DARK, position: "relative", overflow: "hidden" }}>

      {/* ── Grid texture ── */}
      <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      {/* ── Ambient orbs ── */}
      <Box sx={{
        position: "absolute", top: "-200px", left: "-200px",
        width: "800px", height: "800px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 60%)",
        pointerEvents: "none", zIndex: 0,
        animation: "orb-drift 18s ease-in-out infinite",
      }} />
      <Box sx={{
        position: "absolute", bottom: "-100px", right: "-100px",
        width: "640px", height: "640px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 60%)",
        pointerEvents: "none", zIndex: 0,
        animation: "orb-drift 14s ease-in-out infinite reverse",
      }} />

      {/* ── Hero ── */}
      <Box sx={{
        position: "relative", zIndex: 1,
        minHeight: "calc(100vh - 68px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: "20px", sm: "40px", md: "60px", lg: "80px" },
        pt: { xs: "40px", sm: "52px", md: "64px" },
        pb: { xs: "80px", sm: "96px", md: "100px" },
        // short-viewport (e.g. 1280×560): compress padding only
        "@media (max-height: 680px) and (min-width: 900px)": {
          pt: "20px",
          pb: "64px",
        },
      }}>

        {/* ── Two-column grid ── */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 320px" },
          gap: { xs: "40px", md: "48px", lg: "72px" },
          alignItems: "center",
        }}>

          {/* ── LEFT: copy ── */}
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
            textAlign: { xs: "center", lg: "left" },
          }}>

            {/* Badge */}
            <Box sx={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: "1px solid rgba(249,115,22,0.25)",
              backgroundColor: "rgba(249,115,22,0.08)",
              borderRadius: "100px", px: "16px", py: "7px",
              mb: "28px",
              animation: "fade-up 0.6s ease both", animationDelay: "0.1s",
              "@media (max-height: 680px)": { mb: "16px" },
            }}>
              <Box sx={{
                width: "7px", height: "7px", borderRadius: "50%",
                backgroundColor: ORANGE,
                animation: "pulse-dot 2s ease-in-out infinite",
              }} />
              <Typography sx={{
                fontFamily: FB, fontSize: "13px",
                fontWeight: 600, color: ORANGE, letterSpacing: "0.3px",
              }}>
                Toronto-Based Digital Agency
              </Typography>
            </Box>

            {/* Headline */}
            <Typography sx={{
              fontFamily: FD, fontWeight: 800,
              fontSize: { xs: "46px", sm: "62px", md: "72px", lg: "80px", xl: "96px" },
              lineHeight: 1.04,
              letterSpacing: { xs: "-2px", md: "-3px", lg: "-4px" },
              color: "#F5F3EF",
              mb: "24px",
              animation: "fade-up 0.7s ease both", animationDelay: "0.2s",
              "@media (max-height: 680px)": { fontSize: "52px", mb: "14px", letterSpacing: "-2px" },
            }}>
              Built Like Iron.
              <Box component="span" sx={{
                display: "block", color: ACCENT, position: "relative",
                mt: { xs: "2px", md: "6px" },
                "&::after": {
                  content: '""', position: "absolute",
                  bottom: { xs: "-4px", md: "-8px" }, left: 0,
                  width: "55%", height: { xs: "3px", md: "5px" },
                  background: `linear-gradient(90deg, ${ACCENT}, transparent)`,
                  borderRadius: "4px",
                },
              }}>
                Made to Fly.
              </Box>
            </Typography>

            {/* Subheading */}
            <Typography sx={{
              fontFamily: FB,
              fontSize: { xs: "15px", sm: "16px", md: "17px" },
              color: "#666", lineHeight: 1.8,
              maxWidth: { xs: "520px", lg: "460px" },
              mb: "36px",
              animation: "fade-up 0.7s ease both", animationDelay: "0.3s",
              "@media (max-height: 680px)": { mb: "20px", fontSize: "14px" },
            }}>
              We design, build, and launch high-performance digital products
              for businesses that want to grow faster — and look great doing it.
            </Typography>

            {/* CTAs */}
            <Box sx={{
              display: "flex", gap: "12px", flexWrap: "wrap",
              justifyContent: { xs: "center", lg: "flex-start" },
              animation: "fade-up 0.7s ease both", animationDelay: "0.4s",
            }}>
              <Box onClick={() => go("contact")} sx={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                px: { xs: "22px", md: "28px" }, py: { xs: "12px", md: "14px" },
                backgroundColor: ORANGE, color: "#fff",
                borderRadius: "12px", fontFamily: FB, fontWeight: 700,
                fontSize: { xs: "14px", md: "15px" },
                cursor: "pointer", transition: "all 0.25s",
                boxShadow: "0 4px 24px rgba(249,115,22,0.3)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 36px rgba(249,115,22,0.45)",
                  "& .arrow": { transform: "translateX(4px)" },
                },
                "& .arrow": { transition: "transform 0.2s" },
              }}>
                Start a Project <FaArrowRight size={12} className="arrow" />
              </Box>

              <Box onClick={() => go("our-work")} sx={{
                display: "inline-flex", alignItems: "center",
                px: { xs: "22px", md: "28px" }, py: { xs: "12px", md: "14px" },
                border: "1.5px solid rgba(255,255,255,0.1)",
                borderRadius: "12px", fontFamily: FB, fontWeight: 600,
                fontSize: { xs: "14px", md: "15px" },
                color: "#aaa", cursor: "pointer", transition: "all 0.25s",
                backgroundColor: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(10px)",
                "&:hover": {
                  borderColor: ORANGE, color: ORANGE,
                  backgroundColor: "rgba(249,115,22,0.06)",
                  transform: "translateY(-2px)",
                },
              }}>
                View Our Work
              </Box>
            </Box>

            {/* ── Stats strip — mobile / tablet only ── */}
            <Box sx={{
              display: { xs: "flex", lg: "none" },
              flexDirection: "row",
              mt: "40px",
              backgroundColor: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              overflow: "hidden",
              width: "100%",
              maxWidth: "480px",
              animation: "fade-up 0.7s ease both", animationDelay: "0.5s",
            }}>
              {STATS.map((s, i) => (
                <Box key={s.label} sx={{
                  flex: 1, py: "20px", px: "8px", textAlign: "center",
                  borderRight: i < STATS.length - 1
                    ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}>
                  {s.target !== null ? (
                    <CountUp target={s.target} suffix={s.suffix} size="26px" />
                  ) : (
                    <Typography sx={{
                      fontFamily: FD, fontWeight: 800, fontSize: "26px",
                      color: ACCENT, letterSpacing: "-1px", lineHeight: 1,
                    }}>
                      {s.display}
                    </Typography>
                  )}
                  <Typography sx={{
                    fontFamily: FB, fontSize: "11px",
                    color: "#555", mt: "6px", fontWeight: 600,
                    letterSpacing: "0.3px",
                  }}>
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>

          </Box>

          {/* ── RIGHT: stats panel — desktop only ── */}
          <Box sx={{
            display: { xs: "none", lg: "flex" },
            flexDirection: "column",
            gap: "10px",
            animation: "fade-up 0.8s ease both", animationDelay: "0.45s",
          }}>

            {/* Logo card */}
            <Box sx={{
              position: "relative",
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              p: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              mb: "2px",
            }}>
              <Box sx={{
                position: "absolute", inset: 0,
                background: "radial-gradient(circle at 50% 60%, rgba(59,130,246,0.1) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              {/* Traffic-light dots */}
              <Box sx={{ position: "absolute", top: "14px", left: "16px", display: "flex", gap: "5px" }}>
                {["rgba(255,255,255,0.15)", ORANGE, ACCENT].map((c, i) => (
                  <Box key={i} sx={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: c }} />
                ))}
              </Box>
              <Box sx={{ position: "relative", width: "100px", height: "100px" }}>
                <Image
                  src="/images/logo.png"
                  alt="Iron Goose"
                  fill
                  sizes="100px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>

            {/* Stat rows */}
            {STATS.map((s) => (
              <Box key={s.label} sx={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                px: "22px", py: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(59,130,246,0.05)",
                  borderColor: "rgba(59,130,246,0.2)",
                },
              }}>
                <Typography sx={{
                  fontFamily: FB, fontSize: "13px",
                  color: "#555", fontWeight: 500,
                }}>
                  {s.label}
                </Typography>
                {s.target !== null ? (
                  <CountUp target={s.target} suffix={s.suffix} size="30px" />
                ) : (
                  <Typography sx={{
                    fontFamily: FD, fontWeight: 800,
                    fontSize: "30px", color: ACCENT,
                    letterSpacing: "-1px", lineHeight: 1,
                  }}>
                    {s.display}
                  </Typography>
                )}
              </Box>
            ))}

          </Box>

        </Box>
      </Box>

      {/* ── Marquee ticker ── */}
      <Box sx={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        py: "14px", overflow: "hidden",
        backgroundColor: "rgba(19,19,19,0.75)",
        backdropFilter: "blur(8px)",
      }}>
        <Box className="marquee-track">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((item, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Typography sx={{
                fontFamily: FB, fontSize: "11px", fontWeight: 700,
                color: i % 2 === 0 ? ACCENT : ORANGE,
                px: "28px", letterSpacing: "2.5px",
                textTransform: "uppercase", whiteSpace: "nowrap",
              }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

    </Box>
  );
}
