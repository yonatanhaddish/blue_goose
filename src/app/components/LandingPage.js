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
  { target: 100, suffix: "%", label: "Client Satisfaction", color: ORANGE },
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
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.floor(eased * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
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
        fontSize: { xs: "36px", md: "44px" },
        color,
        letterSpacing: "-2px",
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
      sx={{ backgroundColor: DARK, position: "relative", overflow: "hidden" }}
    >
      {/* ── Grid texture ── */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* ── Orbs ── */}
      <Box
        sx={{
          position: "absolute",
          top: "-240px",
          left: "-240px",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "orb-drift 18s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-160px",
          right: "-160px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "orb-drift 14s ease-in-out infinite reverse",
        }}
      />

      {/* ── Background image (top-right) ── */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: "220px", sm: "300px", md: "420px", lg: "500px" },
          height: { xs: "220px", sm: "300px", md: "420px", lg: "500px" },
          pointerEvents: "none",
          zIndex: 0,
          maskImage:
            "radial-gradient(circle at top right, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at top right, black 30%, transparent 75%)",
        }}
      >
        <Image
          src="/images/landing_page.jpeg"
          alt=""
          fill
          sizes="500px"
          style={{ objectFit: "cover", opacity: 0.18 }}
          priority
        />
      </Box>

      {/* ── Watermark logo ── */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          width: { xs: "320px", sm: "480px", md: "680px", lg: "820px" },
          height: { xs: "320px", sm: "480px", md: "680px", lg: "820px" },
          opacity: 0.035,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Image
          src="/images/logo.png"
          alt=""
          fill
          sizes="820px"
          style={{ objectFit: "contain" }}
          priority
        />
      </Box>

      {/* ── Hero ── */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: "calc(100vh - 68px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: { xs: "20px", sm: "40px", md: "60px", lg: "80px" },
          pt: { xs: "40px", sm: "52px", md: "64px" },
          pb: { xs: "80px", sm: "96px", md: "104px" },
          "@media (max-height: 680px) and (min-width: 900px)": {
            pt: "20px",
            pb: "64px",
          },
        }}
      >
        {/* Badge */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid rgba(249,115,22,0.3)",
            backgroundColor: "rgba(249,115,22,0.08)",
            borderRadius: "100px",
            px: "18px",
            py: "8px",
            mb: { xs: "24px", md: "32px" },
            animation: "fade-up 0.6s ease both",
            animationDelay: "0.05s",
            "@media (max-height: 680px)": { mb: "14px" },
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
              letterSpacing: "0.4px",
            }}
          >
            Toronto-Based Digital Agency
          </Typography>
        </Box>

        {/* Headline */}
        <Typography
          sx={{
            fontFamily: FD,
            fontWeight: 800,
            fontSize: {
              xs: "36px",
              sm: "52px",
              md: "68px",
              lg: "84px",
              xl: "100px",
            },
            lineHeight: 0.95,
            letterSpacing: { xs: "-2px", sm: "-3px", md: "-5px", lg: "-6px" },
            color: "#F5F3EF",
            mb: { xs: "16px", md: "20px" },
            maxWidth: { xs: "100%", md: "900px", lg: "1100px" },
            animation: "fade-up 0.7s ease both",
            animationDelay: "0.15s",
            "@media (max-height: 680px)": {
              fontSize: "42px",
              mb: "12px",
              letterSpacing: "-1.5px",
            },
          }}
        >
          Built Like Iron.
          <Box
            component="span"
            sx={{
              display: "block",
              background: `linear-gradient(135deg, ${ACCENT} 0%, #60A5FA 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: { xs: "-6px", md: "-12px" },
                left: "50%",
                transform: "translateX(-50%)",
                width: { xs: "80px", md: "120px" },
                height: { xs: "3px", md: "4px" },
                background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
                borderRadius: "4px",
              },
            }}
          >
            Made to Fly.
          </Box>
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            fontFamily: FB,
            fontSize: { xs: "15px", sm: "16px", md: "18px" },
            color: "#555",
            lineHeight: 1.8,
            maxWidth: { xs: "100%", sm: "480px", md: "540px" },
            mb: { xs: "32px", md: "44px" },
            animation: "fade-up 0.7s ease both",
            animationDelay: "0.25s",
            "@media (max-height: 680px)": { mb: "20px", fontSize: "14px" },
          }}
        >
          We design, build, and launch high-performance digital products for
          businesses that want to grow faster — and look great doing it.
        </Typography>

        {/* CTAs */}
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            mb: { xs: "48px", md: "64px" },
            animation: "fade-up 0.7s ease both",
            animationDelay: "0.35s",
            "@media (max-height: 680px)": { mb: "28px" },
          }}
        >
          <Box
            onClick={() => go("contact")}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              px: { xs: "24px", md: "32px" },
              py: { xs: "13px", md: "16px" },
              backgroundColor: ORANGE,
              color: "#fff",
              borderRadius: "14px",
              fontFamily: FB,
              fontWeight: 700,
              fontSize: { xs: "14px", md: "16px" },
              cursor: "pointer",
              transition: "all 0.25s",
              boxShadow: "0 4px 28px rgba(249,115,22,0.35)",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 16px 48px rgba(249,115,22,0.5)",
                "& .arrow": { transform: "translateX(5px)" },
              },
              "& .arrow": { transition: "transform 0.2s" },
            }}
          >
            Start a Project <FaArrowRight size={13} className="arrow" />
          </Box>

          <Box
            onClick={() => go("our-work")}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              px: { xs: "24px", md: "32px" },
              py: { xs: "13px", md: "16px" },
              border: "1.5px solid rgba(255,255,255,0.12)",
              borderRadius: "14px",
              fontFamily: FB,
              fontWeight: 600,
              fontSize: { xs: "14px", md: "16px" },
              color: "#888",
              cursor: "pointer",
              transition: "all 0.25s",
              backgroundColor: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(12px)",
              "&:hover": {
                borderColor: "rgba(255,255,255,0.3)",
                color: "#F5F3EF",
                backgroundColor: "rgba(255,255,255,0.08)",
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
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "18px",
            overflow: "hidden",
            animation: "fade-up 0.7s ease both",
            animationDelay: "0.45s",
            "@media (max-height: 680px)": { display: "none" },
          }}
        >
          {STATS.map((s, i) => (
            <Box
              key={s.label}
              sx={{
                flex: 1,
                px: { xs: "24px", md: "40px" },
                py: { xs: "18px", md: "22px" },
                textAlign: "center",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
              }}
            >
              {s.target !== null ? (
                <CountUp target={s.target} suffix={s.suffix} color={s.color} />
              ) : (
                <Typography
                  sx={{
                    fontFamily: FD,
                    fontWeight: 800,
                    fontSize: { xs: "36px", md: "44px" },
                    color: s.color,
                    letterSpacing: "-2px",
                    lineHeight: 1,
                  }}
                >
                  {s.display}
                </Typography>
              )}
              <Typography
                sx={{
                  fontFamily: FB,
                  fontSize: { xs: "11px", md: "13px" },
                  color: "#555",
                  mt: "6px",
                  fontWeight: 600,
                }}
              >
                {s.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Marquee ticker ── */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          py: "14px",
          overflow: "hidden",
          backgroundColor: "rgba(19,19,19,0.8)",
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
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
