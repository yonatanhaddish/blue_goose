"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaArrowRight, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";

const ACCENT = "#3B82F6";
const ORANGE = "#F97316";
const BG = "#F5F3EF";
const DARK = "#131313";
const FD = "var(--font-syne), sans-serif";
const FB = "var(--font-jakarta), sans-serif";

const INFO = [
  { icon: FaEnvelope,      label: "Email",    value: "hello@bluegoosedigital.com" },
  { icon: FaMapMarkerAlt,  label: "Location", value: "Toronto, ON, Canada" },
  { icon: FaPhoneAlt,      label: "Phone",    value: "+1 (555) 123-4567" },
];

const SOCIALS = [FaLinkedinIn, FaInstagram, FaTiktok];

const INPUT_SX = {
  mb: "16px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#EDEAE4",
    fontFamily: FB,
    fontSize: "15px",
    transition: "all 0.2s",
    "& fieldset": { borderColor: "transparent" },
    "&:hover fieldset": { borderColor: "rgba(0,0,0,0.1)" },
    "&.Mui-focused fieldset": { borderColor: ACCENT, borderWidth: "1.5px" },
    "&.Mui-focused": { backgroundColor: "#fff", boxShadow: "0 4px 20px rgba(59,130,246,0.08)" },
  },
  "& .MuiInputLabel-root": { fontFamily: FB, fontSize: "15px", color: "#aaa" },
  "& .MuiInputLabel-root.Mui-focused": { color: ACCENT },
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: BG,
        px: { xs: "20px", sm: "32px", md: "48px", lg: "72px" },
        py: { xs: "72px", md: "100px", lg: "120px" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs */}
      <Box sx={{
        position: "absolute", top: "-80px", left: "-80px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)",
        pointerEvents: "none", animation: "orb-drift 16s ease-in-out infinite",
      }} />
      <Box sx={{
        position: "absolute", bottom: "-60px", right: "-60px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 65%)",
        pointerEvents: "none", animation: "orb-drift 20s ease-in-out infinite reverse",
      }} />

      <Box sx={{ position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <Box sx={{ mb: { xs: "48px", md: "64px" } }}>
          <Typography sx={{
            fontFamily: FB, fontSize: "13px", fontWeight: 700,
            color: ACCENT, letterSpacing: "2px",
            textTransform: "uppercase", mb: "16px",
          }}>
            Get in Touch
          </Typography>
          <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            gap: { xs: "16px", md: "32px" },
          }}>
            <Typography sx={{
              fontFamily: FD, fontWeight: 800,
              fontSize: { xs: "36px", sm: "44px", md: "52px", lg: "58px" },
              color: DARK, letterSpacing: "-2px", lineHeight: 1.06,
            }}>
              Let's build something<br />
              <Box component="span" sx={{ color: ORANGE }}>great together.</Box>
            </Typography>
            <Typography sx={{
              fontFamily: FB, fontSize: { xs: "16px", md: "17px" },
              color: "#555", lineHeight: 1.75,
              maxWidth: { xs: "100%", md: "280px" },
            }}>
              Ready to grow your business? Drop us a message and we'll get back to you within 24 hours.
            </Typography>
          </Box>
        </Box>

        {/* ── Two column layout ── */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1.4fr" },
          gap: { xs: "16px", lg: "20px" },
          alignItems: "stretch",
        }}>

          {/* ── Left: info panel ── */}
          <Box sx={{
            backgroundColor: "#fff",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: "22px",
            p: { xs: "36px", md: "44px" },
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Glow */}
            <Box sx={{
              position: "absolute", bottom: "-80px", right: "-80px",
              width: "300px", height: "300px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />

            {/* Tagline */}
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography sx={{
                fontFamily: FD, fontWeight: 800,
                fontSize: { xs: "24px", md: "28px" },
                color: DARK, letterSpacing: "-0.6px",
                lineHeight: 1.25, mb: "12px",
              }}>
                We'd love to hear from you.
              </Typography>
              <Typography sx={{
                fontFamily: FB, fontSize: "15px",
                color: "#555", lineHeight: 1.8,
              }}>
                Whether it's a new project, a quick question, or just a hello — we're here.
              </Typography>
            </Box>

            {/* Divider */}
            <Box sx={{ height: "1px", backgroundColor: "rgba(0,0,0,0.07)" }} />

            {/* Contact info */}
            <Box sx={{
              position: "relative", zIndex: 1,
              display: "flex", flexDirection: "column", gap: "20px",
            }}>
              {INFO.map(({ icon: Icon, label, value }) => (
                <Box key={label} sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <Box sx={{
                    width: "42px", height: "42px", borderRadius: "11px", flexShrink: 0,
                    backgroundColor: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.15)",
                    color: ACCENT,
                    display: "flex", justifyContent: "center", alignItems: "center",
                  }}>
                    <Icon size={15} />
                  </Box>
                  <Box>
                    <Typography sx={{
                      fontFamily: FB, fontSize: "11px", fontWeight: 700,
                      color: "#444", textTransform: "uppercase",
                      letterSpacing: "1.2px", mb: "2px",
                    }}>
                      {label}
                    </Typography>
                    <Typography sx={{
                      fontFamily: FB, fontSize: "15px",
                      color: "#888", fontWeight: 500,
                    }}>
                      {value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Divider */}
            <Box sx={{ height: "1px", backgroundColor: "rgba(0,0,0,0.07)" }} />

            {/* Socials */}
            <Box sx={{ position: "relative", zIndex: 1, display: "flex", gap: "8px" }}>
              {SOCIALS.map((Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    width: "38px", height: "38px", borderRadius: "10px",
                    color: "#888",
                    backgroundColor: "rgba(0,0,0,0.03)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    transition: "all 0.2s",
                    "&:hover": { backgroundColor: ACCENT, color: "#fff", borderColor: "transparent", transform: "translateY(-2px)" },
                  }}
                >
                  <Icon size={14} />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* ── Right: form panel ── */}
          <Box sx={{
            backgroundColor: "#fff",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: "22px",
            p: { xs: "36px", md: "44px" },
          }}>
            {sent ? (
              <Box sx={{
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                height: "100%", gap: "20px", py: "40px", textAlign: "center",
              }}>
                <Box sx={{
                  width: "72px", height: "72px", borderRadius: "50%",
                  backgroundColor: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  display: "flex", justifyContent: "center", alignItems: "center",
                }}>
                  <FaEnvelope size={26} color={ACCENT} />
                </Box>
                <Typography sx={{
                  fontFamily: FD, fontWeight: 800, fontSize: "28px",
                  color: DARK, letterSpacing: "-0.5px",
                }}>
                  Message Sent!
                </Typography>
                <Typography sx={{
                  fontFamily: FB, fontSize: "16px",
                  color: "#666", lineHeight: 1.75, maxWidth: "300px",
                }}>
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </Typography>
              </Box>
            ) : (
              <>
                <Typography sx={{
                  fontFamily: FD, fontWeight: 800,
                  fontSize: { xs: "22px", md: "26px" },
                  color: DARK, letterSpacing: "-0.5px", mb: "6px",
                }}>
                  Send us a message
                </Typography>
                <Typography sx={{
                  fontFamily: FB, fontSize: "15px",
                  color: "#555", mb: "32px", lineHeight: 1.6,
                }}>
                  Fill in the form and we'll be in touch shortly.
                </Typography>

                <Box
                  component="form"
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                >
                  <Box sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: "0 16px",
                  }}>
                    <TextField fullWidth label="First Name" variant="outlined" sx={INPUT_SX} />
                    <TextField fullWidth label="Last Name" variant="outlined" sx={INPUT_SX} />
                  </Box>
                  <TextField fullWidth label="Email Address" type="email" variant="outlined" sx={INPUT_SX} />
                  <TextField fullWidth label="Tell us about your project..." multiline rows={4} variant="outlined" sx={INPUT_SX} />

                  <Box
                    component="button"
                    type="submit"
                    sx={{
                      width: "100%",
                      mt: "8px", py: "16px",
                      backgroundColor: ACCENT,
                      color: "#fff",
                      border: "none", borderRadius: "12px",
                      cursor: "pointer",
                      fontFamily: FB, fontWeight: 700, fontSize: "16px",
                      display: "flex", alignItems: "center",
                      justifyContent: "center", gap: "10px",
                      transition: "all 0.25s",
                      boxShadow: "0 4px 20px rgba(59,130,246,0.25)",
                      "&:hover": {
                        backgroundColor: "#2563EB",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 32px rgba(59,130,246,0.4)",
                      },
                    }}
                  >
                    Send Message <FaArrowRight size={13} />
                  </Box>
                </Box>
              </>
            )}
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
