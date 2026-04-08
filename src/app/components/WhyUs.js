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
        px: { xs: "24px", md: "60px", lg: "80px", xl: "120px" },
        py: { xs: "80px", md: "120px" },
        backgroundColor: "#001e3c",
        width: "100%",
      }}
    >
      {/* Header */}
      <Box sx={{ mb: "72px" }}>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "2px",
            color: "#64b5f6",
            textTransform: "uppercase",
            mb: "12px",
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
              fontWeight: "800",
              fontSize: { xs: "30px", md: "44px" },
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              maxWidth: "480px",
            }}
          >
            We don't just build — we{" "}
            <span style={{ color: "#64b5f6" }}>partner.</span>
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#8899aa",
              lineHeight: 1.7,
              maxWidth: "340px",
              textAlign: { xs: "left", md: "right" },
            }}
          >
            Here's what sets us apart from every other agency promising the
            world.
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
          backgroundColor: "rgba(255,255,255,0.07)",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {whyUsData.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: { xs: "32px", md: "40px" },
              backgroundColor: "#001e3c",
              transition: "all 0.25s ease",
              cursor: "default",
              "&:hover": {
                backgroundColor: "#002a52",
                "& .why-icon": {
                  backgroundColor: "#64b5f6",
                  color: "#001e3c",
                },
                "& .why-stat": {
                  color: "#64b5f6",
                },
              },
            }}
          >
            {/* Icon + Number Row */}
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
                  backgroundColor: "rgba(100,181,246,0.12)",
                  color: "#64b5f6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "all 0.25s ease",
                }}
              >
                {item.icon}
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography
                  className="why-stat"
                  sx={{
                    fontWeight: "800",
                    fontSize: "24px",
                    color: "#ffffff",
                    lineHeight: 1,
                    letterSpacing: "-0.5px",
                    transition: "color 0.25s ease",
                  }}
                >
                  {item.stat}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#556677",
                    fontWeight: "600",
                    mt: "2px",
                  }}
                >
                  {item.statLabel}
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "17px",
                color: "#ffffff",
                mb: "10px",
                letterSpacing: "-0.2px",
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                color: "#8899aa",
                lineHeight: 1.65,
                fontSize: "14px",
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
