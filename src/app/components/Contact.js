"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import { GiGoose } from "react-icons/gi";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const ACCENT = "#3B82F6";
const BG = "#F5F3EF";
const DARK = "#131313";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const INFO = [
  { icon: <FaEnvelope size={15} />, label: "Email", value: "hello@bluegoosedigital.com" },
  { icon: <FaMapMarkerAlt size={15} />, label: "Location", value: "Toronto, ON, Canada" },
  { icon: <FaPhoneAlt size={15} />, label: "Phone", value: "+1 (555) 123-4567" },
];

const INPUT_SX = {
  mb: "18px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#EDEAE4",
    fontFamily: FB,
    fontSize: "16px",
    transition: "all 0.2s",
    "& fieldset": { borderColor: "transparent" },
    "&:hover fieldset": { borderColor: "rgba(0,0,0,0.12)" },
    "&.Mui-focused fieldset": { borderColor: ACCENT, borderWidth: "1.5px" },
    "&.Mui-focused": { backgroundColor: "#fff", boxShadow: "0 4px 16px rgba(59,130,246,0.08)" },
  },
  "& .MuiInputLabel-root": { fontFamily: FB, fontSize: "16px", color: "#999" },
  "& .MuiInputLabel-root.Mui-focused": { color: ACCENT },
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Box
      id="contact"
      sx={{ backgroundColor: BG, px: { xs: "24px", md: "48px", lg: "72px" }, py: { xs: "80px", md: "120px" } }}
    >
      {/* Header */}
      <Box sx={{ mb: "56px" }}>
        <Typography sx={{ fontFamily: FB, fontSize: "13px", fontWeight: 700, color: ACCENT, letterSpacing: "2px", textTransform: "uppercase", mb: "14px" }}>
          Get in Touch
        </Typography>
        <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: { xs: "38px", md: "56px" }, color: DARK, letterSpacing: "-1.5px", lineHeight: 1.08 }}>
          Let's build something<br />
          <Box component="span" sx={{ color: ACCENT }}>great together.</Box>
        </Typography>
      </Box>

      {/* Two-panel container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: "22px",
          overflow: "hidden",
        }}
      >
        {/* Left — dark info panel */}
        <Box
          sx={{
            backgroundColor: DARK,
            p: { xs: "40px", md: "56px" },
            width: { xs: "100%", lg: "38%" },
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            gap: "44px", position: "relative", overflow: "hidden",
          }}
        >
          {/* Decorative glow */}
          <Box sx={{
            position: "absolute", bottom: "-120px", right: "-120px",
            width: "320px", height: "320px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />

          <Box sx={{ zIndex: 1 }}>
            <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: { xs: "30px", md: "38px" }, color: "#F5F3EF", letterSpacing: "-0.5px", mb: "12px" }}>
              Let's Talk.
            </Typography>
            <Typography sx={{ fontFamily: FB, fontSize: "17px", color: "#666", lineHeight: 1.75, maxWidth: "300px" }}>
              Whether you need a full digital transformation or just some advice on your next move — we're ready.
            </Typography>
          </Box>

          {/* Contact info items */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", zIndex: 1 }}>
            {INFO.map((item, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Box sx={{
                  width: "38px", height: "38px", borderRadius: "9px", flexShrink: 0,
                  backgroundColor: "rgba(59,130,246,0.12)", color: ACCENT,
                  display: "flex", justifyContent: "center", alignItems: "center",
                }}>
                  {item.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: FB, fontSize: "12px", fontWeight: 700, color: "#555", textTransform: "uppercase", letterSpacing: "1.2px", mb: "2px" }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ fontFamily: FB, fontSize: "16px", color: "#AAA", fontWeight: 500 }}>
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Socials */}
          <Box sx={{ display: "flex", gap: "8px", zIndex: 1 }}>
            {[FaLinkedinIn, FaTwitter, FaGithub].map((Icon, i) => (
              <IconButton
                key={i}
                size="small"
                sx={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  color: "#555", backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.2s",
                  "&:hover": { backgroundColor: ACCENT, color: "#fff", borderColor: "transparent" },
                }}
              >
                <Icon size={14} />
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Right — Form */}
        <Box sx={{ backgroundColor: "#fff", p: { xs: "40px", md: "56px" }, flex: 1 }}>
          {sent ? (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "16px", py: "40px" }}>
              <Box sx={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(59,130,246,0.09)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <FaPaperPlane size={22} color={ACCENT} />
              </Box>
              <Typography sx={{ fontFamily: FD, fontWeight: 800, fontSize: "30px", color: DARK, letterSpacing: "-0.5px" }}>
                Message Sent!
              </Typography>
              <Typography sx={{ fontFamily: FB, fontSize: "17px", color: "#888", textAlign: "center", maxWidth: "300px", lineHeight: 1.7 }}>
                Thanks for reaching out. Our team will get back to you within 24 hours.
              </Typography>
            </Box>
          ) : (
            <>
              <Typography sx={{ fontFamily: FD, fontWeight: 700, fontSize: "26px", color: DARK, letterSpacing: "-0.4px", mb: "6px" }}>
                Send us a message
              </Typography>
              <Typography sx={{ fontFamily: FB, fontSize: "16px", color: "#999", mb: "32px" }}>
                Fill in the form and we'll be in touch within 24 hours.
              </Typography>

              <Box component="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: "0 16px" }}>
                  <TextField fullWidth label="First Name" variant="outlined" sx={INPUT_SX} />
                  <TextField fullWidth label="Last Name" variant="outlined" sx={INPUT_SX} />
                </Box>
                <TextField fullWidth label="Email Address" type="email" variant="outlined" sx={INPUT_SX} />
                <TextField fullWidth label="Tell us about your project..." multiline rows={4} variant="outlined" sx={INPUT_SX} />

                <Box
                  component="button"
                  type="submit"
                  sx={{
                    width: "100%", py: "15px", mt: "6px",
                    backgroundColor: DARK, color: "#F5F3EF",
                    border: "none", borderRadius: "12px", cursor: "pointer",
                    fontFamily: FB, fontWeight: 700, fontSize: "17px",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                    transition: "all 0.25s",
                    "&:hover": {
                      backgroundColor: ACCENT,
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 28px rgba(59,130,246,0.3)",
                    },
                  }}
                >
                  Send Message <FaPaperPlane size={14} />
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
