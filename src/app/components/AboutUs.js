"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";

const ACCENT = "#3B82F6";
const ORANGE = "#F97316";
const DARK = "#131313";
const BG = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const PILLARS = [
  {
    icon: <FaLaptopCode size={20} />,
    title: "What We Do",
    body: "We design and build websites, landing pages, AI chatbots, marketing automation, and short ad videos — everything a modern business needs to grow online.",
  },
  {
    icon: <FaUsers size={20} />,
    title: "Who We Serve",
    body: "From local businesses to growing startups, we partner with entrepreneurs who want a serious digital presence without the agency bloat.",
  },
  {
    icon: <FaMapMarkerAlt size={20} />,
    title: "Where We're Based",
    body: "Proudly Toronto-based, working with clients across Canada and beyond. Remote-first, always responsive.",
  },
  {
    icon: <FaCalendarAlt size={20} />,
    title: "Our Story",
    body: "Founded in 2026 with one goal: make high-quality digital work accessible to businesses that deserve it. We obsess over details so you don't have to.",
  },
];

const STATS = [
  { target: 80, suffix: " +", label: "Projects Delivered", color: ORANGE },
  { target: 100, suffix: " %", label: "Client Satisfaction", color: ORANGE },
  {
    target: null,
    display: "< 1hr",
    label: "Avg. Response Time",
    color: ORANGE,
  },
  { target: 2026, suffix: "", label: "Est. Toronto, ON", color: ORANGE },
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
        fontSize: { xs: "36px", md: "44px" },
        color,
        lineHeight: 1,
        letterSpacing: "-1.5px",
        mb: "8px",
      }}
    >
      {count}
      {suffix}
    </Typography>
  );
}

export default function AboutUs() {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: BG,
        px: { xs: "20px", sm: "32px", md: "48px", lg: "72px" },
        py: { xs: "72px", md: "100px", lg: "120px" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Ambient orb */}
      <Box
        sx={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "orb-drift 14s ease-in-out infinite",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* ── Header ── */}
        <Box sx={{ mb: { xs: "48px", md: "72px" } }}>
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
            About Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-end" },
              gap: { xs: "16px", md: "48px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: FD,
                fontWeight: 800,
                fontSize: { xs: "36px", sm: "44px", md: "52px", lg: "58px" },
                color: DARK,
                letterSpacing: "-2px",
                lineHeight: 1.06,
                maxWidth: "600px",
              }}
            >
              We build digital products
              <br />
              <Box component="span" sx={{ color: ACCENT }}>
                that actually work.
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: FB,
                fontSize: { xs: "16px", md: "17px" },
                color: "#666",
                lineHeight: 1.8,
                maxWidth: { xs: "100%", md: "300px" },
              }}
            >
              Iron Goose Digital is a Toronto-based agency obsessed with one
              thing — helping businesses grow through smart, beautiful digital
              products.
            </Typography>
          </Box>
        </Box>

        {/* ── Main content: visual card + pillars ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: "24px", lg: "24px" },
            mb: { xs: "24px", md: "24px" },
            alignItems: "stretch",
          }}
        >
          {/* Left — brand card */}
          <Box
            sx={{
              backgroundColor: DARK,
              borderRadius: "24px",
              p: { xs: "36px", md: "48px" },
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Grid texture */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                pointerEvents: "none",
              }}
            />
            {/* Glow bottom-right */}
            <Box
              sx={{
                position: "absolute",
                bottom: "-100px",
                right: "-100px",
                width: "380px",
                height: "380px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />
            {/* Glow top-left */}
            <Box
              sx={{
                position: "absolute",
                top: "-60px",
                left: "-60px",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            {/* ── Brand identity row ── */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pb: "32px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: FD,
                      fontWeight: 800,
                      fontSize: { xs: "20px", md: "22px" },
                      color: "#F5F3EF",
                      letterSpacing: "-0.5px",
                      lineHeight: 1.15,
                    }}
                  >
                    Iron Goose Digital
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: FB,
                      fontSize: "13px",
                      color: "#555",
                      mt: "3px",
                    }}
                  >
                    Toronto, ON · Est. 2024
                  </Typography>
                </Box>
              </Box>

              {/* Available badge */}
              <Box
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  alignItems: "center",
                  gap: "7px",
                  border: "1px solid rgba(74,222,128,0.2)",
                  borderRadius: "100px",
                  px: "12px",
                  py: "7px",
                  backgroundColor: "rgba(74,222,128,0.06)",
                }}
              >
                <Box
                  sx={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#4ADE80",
                    animation: "pulse-dot 2.5s ease-in-out infinite",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: FB,
                    fontSize: "12px",
                    color: "#4ADE80",
                    fontWeight: 600,
                  }}
                >
                  Available
                </Typography>
              </Box>
            </Box>

            {/* ── Tagline ── */}
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                sx={{
                  fontFamily: FD,
                  fontWeight: 800,
                  fontSize: { xs: "26px", md: "30px" },
                  color: "#F5F3EF",
                  letterSpacing: "-0.8px",
                  lineHeight: 1.2,
                  mb: "14px",
                }}
              >
                Not just another agency.{" "}
                <Box component="span" sx={{ color: ORANGE }}>
                  A growth partner.
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: FB,
                  fontSize: { xs: "15px", md: "16px" },
                  color: "#666",
                  lineHeight: 1.8,
                }}
              >
                We combine design, technology, and strategy to deliver digital
                experiences that turn visitors into loyal customers — on time,
                every time.
              </Typography>
            </Box>

            {/* ── Checklist ── */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {[
                "Custom websites built to convert",
                "AI-powered tools & automation",
                "Clear communication, no fluff",
                "Fast turnaround, lasting results",
              ].map((point) => (
                <Box
                  key={point}
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <FaCheckCircle
                    size={16}
                    color={ACCENT}
                    style={{ flexShrink: 0 }}
                  />
                  <Typography
                    sx={{
                      fontFamily: FB,
                      fontSize: { xs: "14px", md: "15px" },
                      color: "#888",
                      lineHeight: 1.5,
                    }}
                  >
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* ── Bottom: location + mobile available badge ── */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
                pt: "24px",
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaMapMarkerAlt size={13} color="#555" />
                <Typography
                  sx={{
                    fontFamily: FB,
                    fontSize: "13px",
                    color: "#555",
                    fontWeight: 500,
                  }}
                >
                  Serving clients across Canada & beyond
                </Typography>
              </Box>
              {/* Mobile available badge */}
              <Box
                sx={{
                  display: { xs: "inline-flex", sm: "none" },
                  alignItems: "center",
                  gap: "7px",
                  border: "1px solid rgba(74,222,128,0.2)",
                  borderRadius: "100px",
                  px: "12px",
                  py: "7px",
                  backgroundColor: "rgba(74,222,128,0.06)",
                }}
              >
                <Box
                  sx={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#4ADE80",
                    animation: "pulse-dot 2.5s ease-in-out infinite",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: FB,
                    fontSize: "12px",
                    color: "#4ADE80",
                    fontWeight: 600,
                  }}
                >
                  Available
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right — pillars grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: "16px",
            }}
          >
            {PILLARS.map((p, i) => (
              <Box
                key={i}
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "18px",
                  p: { xs: "24px", md: "28px" },
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  transition: "all 0.25s ease",
                  cursor: "default",
                  "&:hover": {
                    borderColor: ACCENT,
                    boxShadow: "0 8px 32px rgba(59,130,246,0.1)",
                    transform: "translateY(-3px)",
                    "& .pillar-icon": {
                      backgroundColor: ACCENT,
                      color: "#fff",
                    },
                  },
                }}
              >
                <Box
                  className="pillar-icon"
                  sx={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(59,130,246,0.08)",
                    color: ACCENT,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                    transition: "all 0.25s ease",
                  }}
                >
                  {p.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: FD,
                      fontWeight: 700,
                      fontSize: { xs: "16px", md: "17px" },
                      color: DARK,
                      mb: "8px",
                      letterSpacing: "-0.2px",
                    }}
                  >
                    {p.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: FB,
                      fontSize: { xs: "14px", md: "15px" },
                      color: "#666",
                      lineHeight: 1.7,
                    }}
                  >
                    {p.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Stats bar ── */}
        <Box
          sx={{
            backgroundColor: DARK,
            borderRadius: "20px",
            p: { xs: "32px 24px", md: "44px 56px" },
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: { xs: "32px 16px", md: "0" },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              pointerEvents: "none",
            }}
          />

          {STATS.map((s, i) => (
            <Box
              key={i}
              sx={{
                textAlign: "center",
                position: "relative",
                zIndex: 1,
                borderRight: {
                  md:
                    i < STATS.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                },
                px: { md: "24px" },
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
                    lineHeight: 1,
                    letterSpacing: "-1.5px",
                    mb: "8px",
                  }}
                >
                  {s.display}
                </Typography>
              )}
              <Typography
                sx={{
                  fontFamily: FB,
                  fontSize: { xs: "14px", md: "15px" },
                  color: "#555",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
