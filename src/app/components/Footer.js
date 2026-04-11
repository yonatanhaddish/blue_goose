"use client";

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const ACCENT = "#3B82F6";
const ORANGE = "#F97316";
const DARK = "#131313";
const TEXT = "#F5F3EF";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const COMPANY = ["About Us", "Services", "Our Work", "Careers", "Contact"];
const SERVICES_LIST = [
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
  "SEO Optimization",
  "Technical Support",
];
const SOCIALS = [FaLinkedinIn, FaTwitter, FaGithub, FaInstagram];

const ID_MAP = {
  Services: "services",
  "Our Work": "our-work",
  Contact: "contact",
};

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (link) => {
    const id = ID_MAP[link];
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const goContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box sx={{ backgroundColor: DARK }}>
      {/* ── CTA Banner ── */}
      <Box
        sx={{
          px: { xs: "24px", md: "48px", lg: "72px" },
          py: { xs: "52px", md: "72px" },
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: { xs: "28px", md: "48px" },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: FD,
              fontWeight: 800,
              fontSize: { xs: "30px", sm: "36px", md: "44px" },
              color: TEXT,
              letterSpacing: "-1.5px",
              lineHeight: 1.08,
              mb: "12px",
            }}
          >
            Ready to start your{" "}
            <span style={{ color: ORANGE }}>next project?</span>
          </Typography>
          <Typography
            sx={{
              fontFamily: FB,
              fontSize: { xs: "15px", md: "16px" },
              color: "#777",
              lineHeight: 1.7,
            }}
          >
            Let's build something that actually moves the needle.
          </Typography>
        </Box>
        <Box
          component="button"
          onClick={goContact}
          sx={{
            flexShrink: 0,
            px: "28px",
            py: "15px",
            backgroundColor: ACCENT,
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontFamily: FB,
            fontWeight: 700,
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transition: "all 0.25s",
            boxShadow: "0 4px 24px rgba(59,130,246,0.3)",
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: "#2563EB",
              transform: "translateY(-2px)",
              boxShadow: "0 12px 36px rgba(59,130,246,0.45)",
              "& .cta-arrow": { transform: "translateX(3px)" },
            },
            "& .cta-arrow": { transition: "transform 0.2s" },
          }}
        >
          Let's Talk <FaArrowRight size={13} className="cta-arrow" />
        </Box>
      </Box>

      {/* ── Main grid + bottom bar ── */}
      <Box
        sx={{
          px: { xs: "24px", md: "48px", lg: "72px" },
          pt: { xs: "56px", md: "72px" },
          pb: { xs: "28px", md: "36px" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "2fr 1fr 1.4fr 1.4fr" },
            gap: { xs: "40px 24px", md: "0 48px" },
            pb: { xs: "48px", md: "64px" },
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Brand col */}
          <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                mb: "16px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "42px",
                  height: "42px",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Iron Goose"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: FD,
                  fontWeight: 800,
                  fontSize: "26px",
                  letterSpacing: "-0.4px",
                }}
              >
                <Box component="span" sx={{ color: ACCENT }}>
                  Iron
                </Box>
                <Box component="span" sx={{ color: "#F97316" }}>
                  {" "}
                  Goose
                </Box>
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: FB,
                fontSize: "15px",
                color: "#777",
                lineHeight: 1.8,
                maxWidth: "240px",
                mb: "28px",
              }}
            >
              Premium digital solutions for businesses that want to stand out
              and scale.
            </Typography>
            <Box sx={{ display: "flex", gap: "7px" }}>
              {SOCIALS.map((Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    color: "#666",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor: ACCENT,
                      color: "#fff",
                      borderColor: "transparent",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Icon size={14} />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Company */}
          <Box>
            <Typography
              sx={{
                fontFamily: FB,
                fontSize: "11px",
                fontWeight: 700,
                color: ORANGE,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                mb: "20px",
              }}
            >
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {COMPANY.map((link) => (
                <Box
                  key={link}
                  onClick={() => go(link)}
                  sx={{
                    fontFamily: FB,
                    fontSize: "15px",
                    color: "#777",
                    cursor: "pointer",
                    width: "fit-content",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: ACCENT,
                    },
                  }}
                >
                  {link}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Services */}
          <Box>
            <Typography
              sx={{
                fontFamily: FB,
                fontSize: "11px",
                fontWeight: 700,
                color: ORANGE,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                mb: "20px",
              }}
            >
              Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {SERVICES_LIST.map((s) => (
                <Box
                  key={s}
                  sx={{
                    fontFamily: FB,
                    fontSize: "15px",
                    color: "#777",
                    width: "fit-content",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: ACCENT,
                    },
                  }}
                >
                  {s}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography
              sx={{
                fontFamily: FB,
                fontSize: "11px",
                fontWeight: 700,
                color: ORANGE,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                mb: "20px",
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {[
                "hello@bluegoosedigital.com",
                "+1 (555) 123-4567",
                "Toronto, ON, Canada",
              ].map((v) => (
                <Box
                  key={v}
                  sx={{
                    fontFamily: FB,
                    fontSize: "15px",
                    color: "#777",
                    lineHeight: 1.6,
                    width: "fit-content",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: ACCENT,
                    },
                  }}
                >
                  {v}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            pt: "24px",
            gap: "10px",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography sx={{ fontFamily: FB, fontSize: "14px", color: "#555" }}>
            © {year} Iron Goose Digital. All rights reserved.
          </Typography>
          <Typography sx={{ fontFamily: FB, fontSize: "14px", color: "#555" }}>
            Designed & built in Toronto 🇨🇦
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
