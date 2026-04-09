"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const ACCENT = "#3B82F6";
const ORANGE = "#F97316";
const DARK = "#131313";
const TEXT = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const REVIEWS = [
  {
    name: "Sarah Mitchell",
    role: "CEO, NovaTech Solutions",
    initials: "SM",
    color: "#3B82F6",
    rating: 5,
    text: "Blue Goose transformed our online presence completely. The team was responsive, creative, and delivered ahead of schedule. Our conversion rate jumped 40% in the first month alone.",
  },
  {
    name: "James Okafor",
    role: "Founder, Aura Retail",
    initials: "JO",
    color: "#A855F7",
    rating: 5,
    text: "Working with Blue Goose felt like having an in-house team that genuinely cared. They nailed our brand vision and built something we're truly proud of.",
  },
  {
    name: "Priya Nair",
    role: "Head of Marketing, Metric Flow",
    initials: "PN",
    color: "#14B8A6",
    rating: 5,
    text: "The attention to detail is unmatched. From initial wireframes to launch day, every step was professional and polished. Highly recommend for any serious project.",
  },
  {
    name: "Daniel Chen",
    role: "Operations Director, CB Transportation",
    initials: "DC",
    color: "#F59E0B",
    rating: 5,
    text: "Our website used to be an afterthought. Now it's our strongest sales tool. Blue Goose understood our industry and built something that speaks directly to our clients.",
  },
  {
    name: "Amara Williams",
    role: "Co-Founder, Luminary Studio",
    initials: "AW",
    color: "#EC4899",
    rating: 5,
    text: "Fast, talented, and a pleasure to work with. We had a tight deadline and a complex vision — Blue Goose delivered both on time and beyond expectations.",
  },
  {
    name: "Tom Bergström",
    role: "CTO, DataPulse",
    initials: "TB",
    color: "#22C55E",
    rating: 5,
    text: "The technical quality of their work is exceptional. Clean code, solid architecture, and a UI our users actually love. Best agency we've partnered with, period.",
  },
];

export default function Reviews() {
  return (
    <Box
      id="reviews"
      sx={{
        backgroundColor: DARK,
        px: { xs: "20px", sm: "32px", md: "48px", lg: "72px" },
        py: { xs: "72px", md: "100px", lg: "120px" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs */}
      <Box sx={{
        position: "absolute", top: "-60px", right: "-60px",
        width: "480px", height: "480px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)",
        pointerEvents: "none", animation: "orb-drift 16s ease-in-out infinite",
      }} />
      <Box sx={{
        position: "absolute", bottom: "-80px", left: "-80px",
        width: "380px", height: "380px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 65%)",
        pointerEvents: "none", animation: "orb-drift 20s ease-in-out infinite reverse",
      }} />

      {/* ── Header ── */}
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "flex-end" },
        gap: { xs: "16px", md: "32px" },
        mb: { xs: "48px", md: "64px" },
        position: "relative", zIndex: 1,
      }}>
        <Box>
          <Typography sx={{
            fontFamily: FB, fontSize: "13px", fontWeight: 700,
            color: ACCENT, letterSpacing: "2px",
            textTransform: "uppercase", mb: "16px",
          }}>
            Client Reviews
          </Typography>
          <Typography sx={{
            fontFamily: FD, fontWeight: 800,
            fontSize: { xs: "36px", sm: "44px", md: "52px", lg: "58px" },
            color: TEXT, letterSpacing: "-2px", lineHeight: 1.06,
          }}>
            Don't take our word<br />
            <Box component="span" sx={{ color: ORANGE }}>for it.</Box>
          </Typography>
        </Box>
        <Typography sx={{
          fontFamily: FB, fontSize: { xs: "16px", md: "17px" },
          color: "#555", lineHeight: 1.75,
          maxWidth: { xs: "100%", md: "280px" },
        }}>
          Real feedback from real clients who trusted us to build their digital presence.
        </Typography>
      </Box>

      {/* ── Cards ── */}
      <Box sx={{
        position: "relative", zIndex: 1,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
        gap: { xs: "16px", md: "18px" },
      }}>
        {REVIEWS.map((r, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: "#161616",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "22px",
              p: { xs: "28px", md: "32px" },
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              cursor: "default",
              "&:hover": {
                border: `1px solid ${r.color}33`,
                transform: "translateY(-4px)",
                boxShadow: `0 20px 48px rgba(0,0,0,0.5)`,
                "& .rv-quote": { color: r.color, opacity: 1 },
                "& .rv-avatar": { backgroundColor: r.color },
              },
            }}
          >
            {/* Top: stars + quote icon */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box sx={{ display: "flex", gap: "3px" }}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <FaStar key={j} size={14} color={j === 4 ? ORANGE : ACCENT} />
                ))}
              </Box>
              <FaQuoteLeft
                className="rv-quote"
                size={22}
                style={{ color: "rgba(255,255,255,0.08)", opacity: 0.6, transition: "color 0.3s ease, opacity 0.3s ease" }}
              />
            </Box>

            {/* Review text */}
            <Typography sx={{
              fontFamily: FB,
              fontSize: { xs: "14px", md: "15px" },
              color: "#888",
              lineHeight: 1.8,
              flexGrow: 1,
            }}>
              "{r.text}"
            </Typography>

            {/* Divider */}
            <Box sx={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)" }} />

            {/* Reviewer */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Box
                className="rv-avatar"
                sx={{
                  width: "42px", height: "42px", borderRadius: "12px",
                  backgroundColor: `${r.color}22`,
                  border: `1px solid ${r.color}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  transition: "background-color 0.3s ease",
                }}
              >
                <Typography sx={{
                  fontFamily: FD, fontWeight: 800, fontSize: "13px",
                  color: r.color,
                }}>
                  {r.initials}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{
                  fontFamily: FD, fontWeight: 700, fontSize: "15px",
                  color: TEXT, letterSpacing: "-0.2px",
                }}>
                  {r.name}
                </Typography>
                <Typography sx={{
                  fontFamily: FB, fontSize: "12px",
                  color: "#555", fontWeight: 500, mt: "1px",
                }}>
                  {r.role}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
