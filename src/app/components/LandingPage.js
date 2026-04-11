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
  { target: 80, suffix: "+", label: "Projects Delivered", color: ACCENT },
  { target: 100, suffix: "%", label: "Satisfaction", color: ACCENT },
  { target: null, display: "<1hr", label: "Response Time", color: ACCENT },
];

function CountUp({ target, suffix, color, duration = 1600 }) {
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
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <Typography
      ref={ref}
      sx={{
        fontFamily: FD,
        fontWeight: 800,
        fontSize: { xs: "28px", md: "34px" },
        color,
        letterSpacing: "-1px",
        lineHeight: 1,
      }}
    >
      {count}
      {suffix}
    </Typography>
  );
}

export default function Landingpage() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box
      sx={{ backgroundColor: DARK, overflow: "hidden", position: "relative" }}
    >
      {/* ── Subtle grid texture ── */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Ambient orbs ── */}
      <Box
        sx={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "orb-drift 18s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "orb-drift 14s ease-in-out infinite reverse",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          right: "20%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "orb-drift 22s ease-in-out infinite",
        }}
      />

      {/* ── Hero ── */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          minHeight: "calc(100vh - 68px)",
          justifyContent: "center",
          px: { xs: "20px", sm: "32px", md: "48px", lg: "72px" },
          py: { xs: "80px", md: "100px" },
          pb: { xs: "100px", md: "110px" },
        }}
      >
        {/* ── Logo — decorative top right ── */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "16px", sm: "24px", md: "32px" },
            right: { xs: "16px", sm: "-24px", md: "48px", lg: "72px" },
            width: { xs: "280px", sm: "600px", md: "460px" },
            height: { xs: "280px", sm: "600px", md: "460px" },
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <Image
            src="/images/logo.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* ── Eyebrow badge ── */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid rgba(249,115,22,0.25)",
            backgroundColor: "rgba(249,115,22,0.1)",
            borderRadius: "100px",
            px: "16px",
            py: "7px",
            mb: "32px",
            backgroundColor: "rgba(249,115,22,0.1)",
            animation: "fade-up 0.6s ease both",
            animationDelay: "0.15s",
          }}
        >
          <Box
            sx={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: ORANGE,
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
          <Typography
            sx={{
              fontFamily: FB,
              fontSize: "13px",
              fontWeight: 600,
              color: ORANGE,
              letterSpacing: "0.3px",
            }}
          >
            Toronto-Based Digital Agency
          </Typography>
        </Box>

        {/* ── Headline ── */}
        <Typography
          sx={{
            fontFamily: FD,
            fontWeight: 800,
            fontSize: {
              xs: "46px",
              sm: "62px",
              md: "70px",
              lg: "94px",
              xl: "108px",
            },
            lineHeight: { xs: 1.05, md: 1.08 },
            letterSpacing: { xs: "-2px", md: "-4px" },
            color: "#F5F3EF",
            mb: "28px",
            maxWidth: { xs: "100%", md: "760px", lg: "980px" },
            animation: "fade-up 0.7s ease both",
            animationDelay: "0.25s",
          }}
        >
          <Box component="span" sx={{ display: "block" }}>
            Built Like Iron.
          </Box>
          <Box
            component="span"
            sx={{
              display: "block",
              color: ACCENT,
              position: "relative",
              mt: { xs: "4px", md: "8px" },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: { xs: "-3px", md: "-8px" },
                left: 0,
                width: "100%",
                height: { xs: "3px", md: "5px" },
                background: `linear-gradient(90deg, ${ACCENT}, rgba(59,130,246,0.15))`,
                borderRadius: "4px",
              },
            }}
          >
            Made to Fly.
          </Box>
        </Typography>

        {/* ── Subheading ── */}
        <Typography
          sx={{
            fontFamily: FB,
            fontSize: { xs: "16px", md: "18px" },
            color: "#777",
            lineHeight: 1.8,
            maxWidth: { xs: "100%", sm: "70%", md: "520px" },
            mb: "44px",
            animation: "fade-up 0.7s ease both",
            animationDelay: "0.35s",
          }}
        >
          We design, build, and launch high-performance digital products
          <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
          for businesses that want to grow faster — and look great doing it.
        </Typography>

        {/* ── CTAs ── */}
        <Box
          sx={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
            mb: "60px",
            animation: "fade-up 0.7s ease both",
            animationDelay: "0.45s",
          }}
        >
          <Box
            onClick={() => go("contact")}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              px: { xs: "26px", md: "32px" },
              py: { xs: "14px", md: "16px" },
              backgroundColor: ORANGE,
              color: "#fff",
              borderRadius: "14px",
              fontFamily: FB,
              fontWeight: 700,
              fontSize: { xs: "15px", md: "16px" },
              cursor: "pointer",
              transition: "all 0.25s",
              boxShadow: "0 4px 28px  rgba(249,115,22,0.4)",
              "&:hover": {
                backgroundColor: "rgba(249,115,22,0.9)",
                transform: "translateY(-3px)",
                boxShadow: "0 16px 44px rgba(249,115,22,0.5)",
                "& .hero-arrow": { transform: "translateX(4px)" },
              },
              "& .hero-arrow": { transition: "transform 0.2s" },
            }}
          >
            Start a Project <FaArrowRight size={13} className="hero-arrow" />
          </Box>

          <Box
            onClick={() => go("our-work")}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              px: { xs: "26px", md: "32px" },
              py: { xs: "14px", md: "16px" },
              border: "1.5px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              fontFamily: FB,
              fontWeight: 600,
              fontSize: { xs: "15px", md: "16px" },
              color: "#aaa",
              cursor: "pointer",
              transition: "all 0.25s",
              backgroundColor: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                borderColor: ORANGE,
                color: ORANGE,
                backgroundColor: "rgba(249,115,22,0.06)",
                transform: "translateY(-2px)",
              },
            }}
          >
            View Our Work
          </Box>
        </Box>

        {/* ── Stats strip ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            px: { xs: "28px", md: "52px" },
            py: { xs: "20px", md: "24px" },
            width: { xs: "100%", sm: "auto" },
            animation: "fade-up 0.7s ease both",
            animationDelay: "0.55s",
          }}
        >
          {STATS.map((s, i) => (
            <React.Fragment key={s.label}>
              <Box
                sx={{
                  textAlign: "center",
                  px: { xs: "0", sm: "40px" },
                  py: { xs: "12px", sm: "0" },
                }}
              >
                {s.target !== null ? (
                  <CountUp
                    target={s.target}
                    suffix={s.suffix}
                    color={s.color}
                  />
                ) : (
                  <Typography
                    sx={{
                      fontFamily: FD,
                      fontWeight: 800,
                      fontSize: { xs: "28px", md: "34px" },
                      color: s.color,
                      letterSpacing: "-1px",
                      lineHeight: 1,
                    }}
                  >
                    {s.display}
                  </Typography>
                )}
                <Typography
                  sx={{
                    fontFamily: FB,
                    fontSize: "13px",
                    color: "#555",
                    mt: "6px",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
              {i < STATS.length - 1 && (
                <Box
                  sx={{
                    width: { xs: "48px", sm: "1px" },
                    height: { xs: "1px", sm: "36px" },
                    backgroundColor: "rgba(255,255,255,0.07)",
                    flexShrink: 0,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>

        {/* ── Marquee ticker — pinned to bottom of hero ── */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            py: "16px",
            overflow: "hidden",
            zIndex: 2,
            backgroundColor: "rgba(19,19,19,0.6)",
            backdropFilter: "blur(8px)",
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
                    fontFamily: FB,
                    fontSize: "11px",
                    fontWeight: 700,
                    color: i % 2 === 0 ? ACCENT : ORANGE,
                    px: "28px",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s",
                    "&:hover": { color: ACCENT },
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
